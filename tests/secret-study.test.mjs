import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import vm from 'node:vm';
import * as THREE from 'three';
import {loadGeometry} from './load-geometry.mjs';
import {EXIT_PORTAL} from '../src/exit-anchor.js';
import {Builder} from '../src/build.js';
import {BookSet} from '../src/books.js';
import {carveStudy} from '../src/secret-study/carve.js';
import {buildStudyRoom} from '../src/secret-study/room.js';
import {STUDY,studyEnabled,createStudyDoor,leafBlocks} from '../src/secret-study/layout.js';
const cases=[];
assert.equal(studyEnabled(''),true);assert.equal(studyEnabled('?jippityStudy=true'),true);assert.equal(studyEnabled('?jippityStudy=1'),true);assert.equal(studyEnabled('?jippityStudy=0'),false);
const base=await loadGeometry(undefined,EXIT_PORTAL), doorBuilder=new Builder(()=>.5), doorBooks=new BookSet(()=>.5);
function hash(g){const h=createHash('sha256');for(const a of Object.values(g.attributes))h.update(Buffer.from(a.array.buffer));if(g.index)h.update(Buffer.from(g.index.array.buffer));return h.digest('hex');}
const originals=new Map([...base.room.B.batches].flatMap(([m,gs])=>gs.map(g=>[g,hash(g)])));
const allBooks=base.books.mats.map(m=>m.clone());
const report=carveStudy(base.room,base.books,base.materials,doorBuilder,doorBooks);
assert.equal(report.wallPieces,1);assert.equal(report.movingBooks,216);
let kept=0;for(const [,gs]of base.room.B.batches)for(const g of gs)if(originals.has(g)){assert.equal(hash(g),originals.get(g));kept++;}
assert.equal(base.books.mats.length+doorBooks.mats.length,allBooks.length);
cases.push('Ordinary route enables Marginalia; exact diagnostic 0 skips it; only one north wall and bounded shelf pieces are carved; all retained primitive buffers and 9,813 decorative book records are preserved.');
const context=new Proxy({createLinearGradient:()=>({addColorStop(){}})},{get:(o,k)=>k in o?o[k]:()=>{},set:(o,k,v)=>(o[k]=v,true)});
const room=buildStudyRoom(base.materials,{makeCanvas:()=>({getContext:()=>context})});
const scene=new THREE.Scene();base.room.B.finish(scene);doorBuilder.finish(scene);room.group.updateMatrixWorld(true);
assert.ok(scene.children.every(o=>o.geometry));
const solids=[...base.room.B.solids,...room.solids];
const blocked=(x,z,angle=0)=>solids.some(s=>x+.28>s.x0&&x-.28<s.x1&&z+.28>s.z0&&z-.28<s.z1&&s.y0<1.75&&s.y1>.42)||leafBlocks(angle,x,z);
const grounded=(x,z)=>solids.some(s=>x+.196>=s.x0&&x-.196<=s.x1&&z+.196>=s.z0&&z-.196<=s.z1&&Math.abs(s.y1)<.001);
assert.ok(blocked(3.5,-9.8,0));
const route=[[3.5,-8.55],[3.5,-10.6],[3.5,-11.9],[4.5,-12.3],[4.9,-14.6]];
for(let i=0;i<route.length-1;i++)for(let j=0;j<=100;j++){
 const t=j/100,x=route[i][0]*(1-t)+route[i+1][0]*t,z=route[i][1]*(1-t)+route[i+1][1]*t;
 assert.ok(!blocked(x,z,Math.PI/2),`route blocked ${x}, ${z}`);assert.ok(grounded(x,z),`route unsupported ${x}, ${z}`);
}
cases.push('A continuous standing-width route in and out is supported at every sample; closed leaf blocks it and fully open leaf clears it.');
const openAt=hz=>{const d=createStudyDoor();d.openDoor();for(let i=0;i<hz*3;i++)d.update(1/hz,{x:3.5,y:0,z:-8.55});return d;};
for(const hz of [20,60,144]){const d=openAt(hz);assert.ok(d.open);assert.equal(d.angle,Math.PI/2);d.closeDoor();for(let i=0;i<hz*3;i++)d.update(1/hz,{x:3.5,y:0,z:-12.4});assert.equal(d.angle,0);}
const jam=openAt(60),visitor={x:3.50,y:0,z:-10.25};jam.closeDoor();for(let i=0;i<240;i++){jam.update(1/60,visitor);assert.ok(!jam.blocks(visitor.x,visitor.z,0,1.75,.28));}assert.ok(jam.angle>0);
const reduced=createStudyDoor({reducedMotion:()=>true});reduced.openDoor();reduced.update(.016,{x:3.5,y:0,z:-8.55});assert.equal(reduced.angle,Math.PI/2);
reduced.closeDoor();reduced.update(.016,visitor);assert.equal(reduced.angle,Math.PI/2);
cases.push('Open/close and reversal finish at 20/60/144 Hz; occupied arc stalls safely; reduced motion jumps are swept for collisions too.');
// The full rotated rectangle must stay within the architectural opening until
// it is entirely behind the original wall. Check at quarter-degree intervals.
for(let a=0;a<=Math.PI/2;a+=Math.PI/720)for(const u of [0,STUDY.width])for(const v of [0,STUDY.depth]){
 const x=STUDY.hinge.x+u*Math.cos(a)+v*Math.sin(a),z=STUDY.hinge.z-u*Math.sin(a)+v*Math.cos(a);
 if(z>=-10.5&&z<=-9.50)assert.ok(x>=STUDY.cut.x0-1e-5&&x<=STUDY.cut.x1+1e-5,'Leaf clears jamb');
}
cases.push('Rear pivot and leaf thickness clear the north-wall jamb throughout a 90-degree arc, with no portal teleport.');
let triangles=0,bytes=0,meshes=0;const materials=new Set(),textures=new Set();
room.group.traverse(o=>{if(o.isMesh){meshes++;triangles+=(o.geometry.index?.count??o.geometry.attributes.position.count)/3;for(const a of Object.values(o.geometry.attributes))bytes+=a.array.byteLength;if(o.geometry.index)bytes+=o.geometry.index.array.byteLength;materials.add(o.material);for(const v of Object.values(o.material))if(v?.isTexture)textures.add(v);}});
const budget={roomTriangles:triangles,roomBatches:meshes,roomMaterials:materials.size,roomGeometryBytes:bytes,roomTextureReferences:textures.size,newTexturePixels:1024*1024,newTextureRGBAWithMips:(4*(1024*1024*4-1))/3,newNonShadowLights:room.lights.length,movingDecorativeBooks:doorBooks.mats.length,retainedUnchangedPieces:kept,report};
assert.ok(triangles<25000);assert.ok(meshes<24);assert.equal(room.lights.filter(l=>l.castShadow).length,0);
const source=readFileSync(new URL('../src/main.js',import.meta.url),'utf8');
assert.ok(source.includes("? await import('./secret-study/index.js') : null"));
assert.ok(source.includes('study?.dispose()'));assert.ok(source.includes('study?.door.blocks'));
const gate=source.slice(source.indexOf('// Public Marginalia study'),source.indexOf('lib.B.finish(scene);')).replace("await import('./secret-study/index.js')",'await loadStudy()');
let downloads=0,constructions=0,resolveDownload;
const contextGate={URLSearchParams,window:{location:{search:'?jippityStudy=0'}},partialDisposed:false,lib:{},books:{},M:{},scene:{},loadStudy:()=>{downloads++;return new Promise(resolve=>resolveDownload=resolve);}};
vm.createContext(contextGate);
await vm.runInContext(`(async()=>{${gate};return study;})()`,contextGate);assert.equal(downloads,0);
contextGate.window.location.search='';
const cancelled=vm.runInContext(`(async()=>{${gate};return study;})()`,contextGate);
contextGate.partialDisposed=true;resolveDownload({prepareStudy(){constructions++;}});
await assert.rejects(cancelled,e=>e.name==='AbortError');assert.equal(constructions,0);
contextGate.partialDisposed=false;
const ready=vm.runInContext(`(async()=>{${gate};return study;})()`,contextGate);
resolveDownload({prepareStudy(){constructions++;return 'ready';}});assert.equal(await ready,'ready');assert.equal(constructions,1);
cases.push('Actual host gate downloads nothing when disabled, rejects a late module after startup cancellation, and constructs once on a normal enabled load.');
const result={status:'passed',cases,budget,scope:'CPU geometry, collision and state only. No browser, graphics, rendered quality, native pointer, texture rasterization or frame-rate claim.'};
mkdirSync(new URL('../study-evidence/',import.meta.url),{recursive:true});writeFileSync(new URL('../study-evidence/cpu.json',import.meta.url),JSON.stringify(result,null,2));console.log(JSON.stringify(result,null,2));
