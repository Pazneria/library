import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import * as THREE from 'three';
import { EXIT_ANCHOR, EXIT_PORTAL } from '../src/exit-anchor.js';
import { EXIT_CONTENT } from '../src/exit-content.js';
import { createExitDoor } from '../src/exit-door.js';
import { addLibraryExit } from '../src/exit-scene.js';
import { Builder } from '../src/build.js';
import { loadGeometry, paintContacts } from './load-geometry.mjs';
import { isEditingTarget } from '../src/interaction-core.js';

const cases = [], near = {x:5.8,y:0,z:7.75}, far = {x:3.4,y:0,z:4.3};
function door() { return createExitDoor({anchor:EXIT_ANCHOR,portal:EXIT_PORTAL}); }
function advance(d, player, seconds, hz=60) { for(let i=0;i<Math.round(seconds*hz);i++)d.update(1/hz,player); }
let a=door(),b=door();advance(a,near,1,60);advance(b,near,1,144);
assert.ok(Math.abs(a.angle-b.angle)<1e-12);assert.ok(a.angle<=Math.PI/2);assert.ok(a.passable);
assert.equal(door().angle,0);const distant=door();advance(distant,far,1);assert.equal(distant.angle,0);
advance(distant,{...near,y:4.2},1);assert.equal(distant.angle,0);
cases.push('Authored entrance and gallery leave the door closed; near-floor approach opens with identical elapsed-time hinge motion at 60/144 Hz and no overshoot');

a=door();assert.ok(a.blocks(6.8,7.75,0,1.75,.28));
assert.equal(a.crossed({x:7.6,y:0,z:7.75},{x:7.64,y:0,z:7.75}),false);
advance(a,near,2);assert.equal(a.angle,Math.PI/2);assert.equal(a.blocks(7.4,7.75,0,1.75,.28),false);
assert.ok(a.blocks(7.4,8.35,0,1.75,.28),'The open leaf remains a physical obstacle beside the passage');
assert.equal(a.blocks(7.4,8.35,4.2,1.75,.28),false);
cases.push('Closed leaf blocks the player; fully open center is passable while its real rotated footprint still blocks the hinge side and respects vertical separation');

assert.equal(a.crossed({x:7.6,y:0,z:7.75},{x:7.64,y:0,z:7.75}),true);
for(const [from,to] of [
  [{x:7.64,y:0,z:7.75},{x:7.6,y:0,z:7.75}],
  [{x:6.5,y:0,z:7.75},{x:8,y:0,z:7.75}],
  [{x:7.6,y:4.2,z:7.75},{x:7.64,y:4.2,z:7.75}],
  [{x:7.6,y:0,z:8.4},{x:7.64,y:0,z:8.4}],
  [{x:7.7,y:0,z:7.75},{x:7.8,y:0,z:7.75}],
])assert.equal(a.crossed(from,to),false);
cases.push('Only a small outward step across the supported threshold triggers exit; retreat, teleport, gallery, side-wall and already-outside movement do not');

a=door();assert.equal(a.use(),false);advance(a,{x:4.5,y:0,z:7.75},1);assert.ok(a.passable,'E at the edge of interaction reach must open the leaf');
advance(a,{x:7.4,y:0,z:7.75},2);assert.equal(a.angle,Math.PI/2,'Occupied swing area holds the door open');
advance(a,near,1);assert.equal(a.angle,Math.PI/2);advance(a,far,2);assert.equal(a.angle,0);
cases.push('Manual opening works at full interaction reach, never queues navigation, holds for an occupied/backtracking visitor and closes only after the visitor is clear');
a=door();const inspecting={x:7.3,y:0,z:8.16};assert.equal(a.blocks(inspecting.x,inspecting.z,0,1.75,.28),false);
for(let i=0;i<180;i++){a.update(1/60,inspecting);assert.equal(a.blocks(inspecting.x,inspecting.z,0,1.75,.28),false,'Moving leaf must not sweep through a stationary visitor');}
assert.ok(a.angle<Math.PI/2);advance(a,near,2);assert.equal(a.angle,Math.PI/2);
cases.push('A visitor standing in the opening sweep safely stalls the leaf; motion resumes after they step clear without pushing through their collision circle');

const baseline=await loadGeometry(),carved=await loadGeometry(undefined,EXIT_PORTAL);
function fingerprint(p) {
  const hash=createHash('sha256');hash.update(p.name);
  for(const attribute of Object.values(p.geometry.attributes))hash.update(Buffer.from(attribute.array.buffer,attribute.array.byteOffset,attribute.array.byteLength));
  if(p.geometry.index)hash.update(Buffer.from(p.geometry.index.array.buffer));
  return hash.digest('hex');
}
const oldCounts=new Map(),newCounts=new Map();
for(const p of baseline.pieces){const key=fingerprint(p);oldCounts.set(key,(oldCounts.get(key)||0)+1);}
for(const p of carved.pieces){const key=fingerprint(p);newCounts.set(key,(newCounts.get(key)||0)+1);}
let removed=0,added=0;
for(const [key,n]of oldCounts)removed+=Math.max(0,n-(newCounts.get(key)||0));
for(const [key,n]of newCounts)added+=Math.max(0,n-(oldCounts.get(key)||0));
assert.deepEqual([removed,added],[3,7],'Only the wall and two wainscot sections may change; all other position/normal/UV/index bytes stay exact');
assert.deepEqual(carved.books.mats,baseline.books.mats);assert.deepEqual(carved.books.cols,baseline.books.cols);assert.deepEqual(carved.books.vars,baseline.books.vars);
assert.equal(paintContacts(carved).length,0);assert.equal(paintContacts(carved,.012).filter(hit=>hit.wood<721).length,0);
cases.push('Production portal replaces exactly three old volumes with seven split sections, preserves every other geometry/UV/index and book stream, and retains the 12 mm architectural paint-clearance guard');

const scene=new THREE.Scene(),parts=[],add=Builder.prototype.add,finish=Builder.prototype.finish;
Builder.prototype.add=function(material,g){g.computeBoundingBox();parts.push({builder:this,material,box:g.boundingBox.clone()});add.call(this,material,g);};
Builder.prototype.finish=function(target){for(const p of parts)if(p.builder===this)p.target=target;finish.call(this,target);};
const materials=Object.fromEntries(['oak','dark','brass','stone'].map(name=>[name,new THREE.MeshStandardMaterial()]));
let geometry;
try{geometry=addLibraryExit(scene,materials,EXIT_ANCHOR,EXIT_CONTENT,()=>({getContext:()=>({fillRect(){},strokeRect(){},fillText(){}})}));}
finally{Builder.prototype.add=add;Builder.prototype.finish=finish;}
const fixed=parts.filter(p=>p.target!==geometry.leaf&&p.material!==materials.brass);
for(let degree=0;degree<=90;degree++){
  geometry.leaf.rotation.y=-degree*Math.PI/180;geometry.group.updateWorldMatrix(true,true);
  for(const part of parts){
    const box=part.box.clone().applyMatrix4(part.target.matrixWorld);
    for(const base of carved.pieces){
      const size=box.clone().intersect(base.box).getSize(new THREE.Vector3());
      assert.ok(size.x<1e-5||size.y<1e-5||size.z<1e-5,`Door/landing hits room geometry at ${degree} degrees`);
    }
    if(part.target===geometry.leaf)for(const other of fixed){
      const size=box.clone().intersect(other.box.clone().applyMatrix4(other.target.matrixWorld)).getSize(new THREE.Vector3());
      assert.ok(size.x<1e-5||size.y<1e-5||size.z<1e-5,`Leaf hits its own fixed casing at ${degree} degrees`);
    }
  }
}
const hinge=geometry.leaf.getWorldPosition(new THREE.Vector3());
assert.ok(Math.abs(hinge.x-(EXIT_ANCHOR.position[0]-.00035))<1e-12);assert.equal(hinge.z,8.4);
cases.push('Actual rigid leaf is sampled at every degree from closed to 90 degrees; pivot matches collision math, and leaf/casing/landing clear the wall, stair, bookcases and each other');

const source=readFileSync(new URL('../src/main.js',import.meta.url),'utf8').replaceAll('\r\n','\n');
const listeners=new Map(),context={THREE,study:null,solids:[...carved.room.B.solids,...geometry.solids],exitGeometry:geometry,ROOM:{GY:4.2},camera:new THREE.PerspectiveCamera(),toast(){},isEditingTarget,
  stats:{classList:{toggle(){}}},help:{classList:{toggle(){}}},addEventListener:(type,handler)=>listeners.set(type,handler)};
vm.createContext(context);
vm.runInContext(source.slice(source.indexOf('const P ='),source.indexOf('const overlay ='))+';loop={paused:false};'+
  source.slice(source.indexOf('const desiredVelocity'),source.indexOf('// --------------------------------------------------------------- loop + stats'))+
  ';globalThis.player=P;globalThis.tick=updatePlayer;globalThis.view=setView;',context);
context.view(0);context.player.pos.set(5.6,0,7.75);context.player.smoothY=0;context.player.yaw=-Math.PI/2;context.tick(0);
listeners.get('keydown')({code:'KeyW',target:{closest:()=>null}});
let crossings=0;const history=[];
for(let i=0;i<100;i++){
  const before=context.player.pos.clone();geometry.door.update(1/60,before);context.tick(1/60);history.push(context.player.pos.clone());
  if(geometry.door.crossed(before,context.player.pos)){crossings++;break;}
}
assert.equal(crossings,1);assert.ok(context.player.pos.x>EXIT_PORTAL.threshold);assert.ok(history.every(p=>Math.abs(p.y)<1e-8),'Landing must prevent falling while crossing');
context.player.pos.set(7.4,0,7.75);context.player.vel.set(0,0,0);context.player.yaw=Math.PI/2;context.player.smoothY=0;
for(let i=0;i<45;i++){const before=context.player.pos.clone();geometry.door.update(1/60,before);context.tick(1/60);assert.equal(geometry.door.crossed(before,context.player.pos),false);}
assert.ok(context.player.pos.x<6.3,'Visitor can backtrack from inside the threshold');
for(const hz of [20,60,144]){
  geometry.leaf.rotation.y=0;geometry.door=createExitDoor({anchor:EXIT_ANCHOR,portal:EXIT_PORTAL,setAngle:angle=>{geometry.leaf.rotation.y=angle;}});
  context.player.pos.set(6.45,0,7.75);context.player.smoothY=0;context.player.vel.set(0,0,0);context.player.yaw=-Math.PI/2;
  listeners.get('keydown')({code:'ShiftLeft',target:{closest:()=>null}});let count=0;
  for(let i=0;i<hz*4;i++){const before=context.player.pos.clone();geometry.door.update(1/hz,before);context.tick(1/hz);if(geometry.door.crossed(before,context.player.pos)){count++;break;}}
  assert.equal(count,1,`Fast close approach must not miss the crossing at ${hz} Hz`);
  assert.ok(Math.abs(context.player.pos.y)<1e-8);listeners.get('keyup')({code:'ShiftLeft'});
}
const frame=source.slice(source.indexOf('function frame(now'),source.indexOf('loop = createFrameLoop'));
assert.ok(frame.lastIndexOf('exit.leave()')>frame.lastIndexOf('drawFrame()'));
assert.ok(!/setTimeout|requestAnimationFrame/.test(readFileSync(new URL('../src/exit-door.js',import.meta.url),'utf8')));
cases.push('Actual production movement/collision walks through once, including fast close approaches at 20/60/144 Hz, stays supported and permits retreat; navigation is last and adds no scheduler/timer');
console.log(JSON.stringify({status:'passed',cases,scope:'CPU real geometry, analytic hinge/collision, actual player movement and host-source checks; no rendering, pointer or browser navigation'},null,2));
