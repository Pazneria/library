import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import vm from 'node:vm';
import * as THREE from 'three';
import {mountFolioSeat,folioApproach,FOLIO_PLACEMENT} from '../src/reading-seat/hillside.js';
import {createSeatController} from '../src/reading-seat/controller.js';
import {createFrameLoop} from '../src/frame-loop.js';
import {disposeLibraryResources} from '../src/exit-resources.js';
import {withoutFolioHooks} from './folio-host-contract.mjs';
import {loadGeometry} from './load-geometry.mjs';
import {EXIT_PORTAL} from '../src/exit-anchor.js';
const root=new URL('../',import.meta.url),base='4080f473676571bc48dd58e19f98656fc26d93cf';
const previous=path=>execFileSync('git',['show',base+':'+path],{cwd:root});
const raw=readFileSync(new URL('src/main.js',root),'utf8'),source=raw.replaceAll('\r\n','\n');
assert.deepEqual(Buffer.from(withoutFolioHooks(raw)),previous('src/main.js'));
const protectedPaths=execFileSync('git',['ls-tree','-r','--name-only',base,'src','index.html','package-lock.json'],{cwd:root,encoding:'utf8'}).trim().split('\n').filter(p=>p!=='src/main.js');
for(const path of protectedPaths)assert.deepEqual(readFileSync(new URL(path,root)),previous(path),path);
for(const [name,expected]of [['folio-core.mjs','905db3ffbd9c73dfec87a4a20ca1d773ac9fe8f32e221ed3e79aa8179d07db2d'],['folio-chair.mjs','51c0ec1cb2637127b4d876f0effd7fe83528a199caf19aa89fc7a100de18bec4']]){
  assert.equal(createHash('sha256').update(readFileSync(new URL('src/reading-seat/folio-refined/'+name,root))).digest('hex'),expected);
}
const scene=new THREE.Scene(),mounted=mountFolioSeat(scene),chair=mounted.chair;
const performance=scene.children[0].userData.folio.performance;
const geometryBytes=scene.children[0].children.reduce((bytes,mesh)=>bytes+Object.values(mesh.geometry.attributes).reduce((sum,a)=>sum+a.array.byteLength,0)+mesh.geometry.index.array.byteLength,0);
assert.equal(scene.children.length,1);assert.equal(scene.children[0].children.length,5);
assert.deepEqual(scene.children[0].position.toArray(),FOLIO_PLACEMENT.position);
const room=await loadGeometry(undefined,EXIT_PORTAL),bounds=new THREE.Box3().setFromObject(scene.children[0]);
assert.ok(!room.pieces.some(p=>p.box.max.y>.03&&['x','y','z'].every(a=>Math.min(bounds.max[a],p.box.max[a])-Math.max(bounds.min[a],p.box.min[a])>.0008)));
const solids=[...room.room.B.solids,...mounted.solids];
const clear=p=>!solids.some(s=>p[0]+.28>s.x0&&p[0]-.28<s.x1&&p[2]+.28>s.z0&&p[2]-.28<s.z1&&s.y0<p[1]+1.75&&s.y1>p[1]+.42);
const supported=p=>room.room.B.solids.some(s=>p[0]+.196>=s.x0&&p[0]-.196<=s.x1&&p[2]+.196>=s.z0&&p[2]-.196<=s.z1&&Math.abs(s.y1-p[1])<.001);
for(const p of [...chair.anchors.stand,[-8.2,0,4.9],[3.4,0,4.3]])assert.ok(clear(p)&&supported(p));
const approach=folioApproach(chair),player={pos:new THREE.Vector3(...approach.position),vel:new THREE.Vector3(),eye:1.62,eyeCur:1.62,smoothY:0,vy:0,yaw:approach.yaw,pitch:approach.pitch};
const camera=new THREE.PerspectiveCamera();camera.rotation.order='YXZ';camera.position.copy(player.pos).add(new THREE.Vector3(0,1.62,0));
const seat=createSeatController({player,camera,anchors:chair.anchors,facingYaw:chair.facingYaw,facingPitch:chair.facingPitch,
  canStandAt:p=>clear(p)&&supported(p),releaseMovement:()=>player.vel.set(0,0,0),recoverStanding(){throw Error('Unexpected recovery');}});
let requests=0;const queued=new Map();
const loop=createFrameLoop({tick:()=>{},now:()=>0,request:fn=>{queued.set(++requests,fn);return requests;},cancel:id=>queued.delete(id)});
loop.start();loop.setPaused('focus',true);
const context={loop,seat,study:{isOpen:false},look:{pause(){throw Error('Unexpected study pause');}}};
function callback(start,key){const begin=source.indexOf(start),end=source.indexOf('\n});',begin),block=source.slice(begin,end);const index=block.indexOf(key)+key.length;return vm.runInNewContext('('+block.slice(index).replace(/,\s*$/,'').trim()+')',context);}
// Look's setter is followed by its closing call. Reading/study setters are last.
const controls=callback('const look = installFpsLook(','setMenuPaused: ');
const reading=callback('reading = installHillsideReading(','setPaused: ');
const study=callback('study?.install(','setPaused: ');
for(const pause of [controls,reading,study])for(let i=0;i<12;i++){
  assert.ok(seat.sit());seat.update(.5);assert.equal(seat.state,'seated');
  player.yaw+=.2;player.pitch-=.1;seat.update(0);assert.equal(camera.rotation.y,player.yaw);
  const before=requests;pause(true);assert.equal(seat.state,'walking');
  assert.deepEqual(player.pos.toArray(),chair.anchors.stand[0]);assert.equal(camera.position.y,1.62);
  pause(false);assert.ok(loop.paused);assert.equal(requests,before);assert.equal(queued.size,0);
}
const seatBlock=source.slice(source.indexOf('seat = installReadingSeat('),source.indexOf('\n});',source.indexOf('seat = installReadingSeat(')));
const gateSource=seatBlock.match(/canInteract: ([\s\S]*?),\n  canStandAt:/)[1];
const gate=vm.runInNewContext('('+gateSource+')',{libraryDisposed:false,reading:{isOpen:false},study:{isOpen:false},look:{menuOpen:false},loop:{paused:false},seat,P:player,camera,document:{visibilityState:'visible',hasFocus:()=>true},Math});
assert.equal(gate(),true);
const foot=player.pos.toArray();player.pos.set(3.9,0,-8.55);
assert.equal(gate(),false,'A just-selected distant view cannot use the old camera ray before its first frame');
player.pos.set(...foot);assert.ok(seat.sit());seat.update(.5);assert.equal(gate(),true,'The authored seated eye offset does not block standing');seat.cancel();
seat.dispose();loop.dispose();
const resources=new Set();scene.traverse(o=>{if(o.geometry)resources.add(o.geometry);for(const m of [].concat(o.material||[])){resources.add(m);for(const v of Object.values(m))if(v?.isTexture)resources.add(v);}});
assert.equal(resources.size,16);const disposed=new Map();for(const r of resources)r.addEventListener('dispose',()=>disposed.set(r,(disposed.get(r)||0)+1));
const textureBackingBytes=[...resources].filter(r=>r.isTexture).reduce((bytes,t)=>bytes+t.image.data.byteLength,0);
let rendererDisposals=0;disposeLibraryResources({scene,renderer:{dispose(){rendererDisposals++;}}});mounted.releaseReferences();
assert.equal(rendererDisposals,1);assert.equal(scene.children.length,0);assert.equal(disposed.size,16);assert.ok([...disposed.values()].every(n=>n===1));
console.log(JSON.stringify({status:'passed',base,protectedPaths:protectedPaths.length,placement:FOLIO_PLACEMENT,approach,
  cases:['Reviewed candidate bytes exact; every prior source other than enumerated main hooks remains exact','One chair mounts; actual envelope and supported standing anchors clear authored room','Actual Controls, book and study-note callbacks safely cancel seating through 36 transitions without releasing focus pause','A rapid distant-view handoff rejects a stale camera ray while the seated eye offset still permits standing','Existing host disposer releases all 16 attached chair resources once'],
  resources:{triangles:performance.triangles,materialBatches:performance.drawCalls,geometries:5,materials:5,textures:6,geometryBytes,textureBackingBytes},scope:'CPU actual modules and host callbacks; actual lighting/native input acceptance is separate.'},null,2));
