import assert from 'node:assert/strict';
import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import vm from 'node:vm';
import * as THREE from 'three';
import { loadGeometry, paintContacts } from './load-geometry.mjs';

// Handoff comparison uses the independently preserved reviewed PR2 checkout.
// Portable npm test does not depend on that sibling directory.
const baseRoot=new URL('../../library-reading/',import.meta.url), currentRoot=new URL('../',import.meta.url);
const before=await loadGeometry(baseRoot), after=await loadGeometry(currentRoot);
const sha=value=>createHash('sha256').update(value).digest('hex');
const bytes=array=>Buffer.from(array.buffer,array.byteOffset,array.byteLength);
assert.equal(after.pieces.length,before.pieces.length);
assert.deepEqual(after.room.B.solids,before.room.B.solids);
assert.deepEqual(after.room.windows,before.room.windows);
assert.deepEqual(after.room.lights,before.room.lights);
for(const key of ['mats','cols','vars'])assert.equal(sha(JSON.stringify(after.books[key])),sha(JSON.stringify(before.books[key])),key);
for(const file of ['src/textures.js','src/books.js','src/room-anchors.js','src/reading-scene.js','src/reading-content.js','src/reading.js','src/reading.css','package-lock.json','vite.config.js'])
  assert.ok(readFileSync(new URL(file,baseRoot)).equals(readFileSync(new URL(file,currentRoot))),file);
const oldSource=readFileSync(new URL('src/main.js',baseRoot),'utf8'),newSource=readFileSync(new URL('src/main.js',currentRoot),'utf8');
for(const [start,end] of [['const canvas =','// --------------------------------------------------------------- player & collision'],['function groundAt','const keys ='],['const desiredVelocity','// --------------------------------------------------------------- loop + stats']])
  assert.equal(newSource.slice(newSource.indexOf(start),newSource.indexOf(end)),oldSource.slice(oldSource.indexOf(start),oldSource.indexOf(end)));
const changed=[];let trianglesBefore=0,trianglesAfter=0;
for(let i=0;i<before.pieces.length;i++){
  const a=before.pieces[i],b=after.pieces[i];assert.equal(a.name,b.name);
  trianglesBefore+=a.geometry.index.count/3;trianglesAfter+=b.geometry.index.count/3;
  const different=Object.keys(a.geometry.attributes).some(key=>!bytes(a.geometry.attributes[key].array).equals(bytes(b.geometry.attributes[key].array)));
  if(different){
    assert.ok(['oak','dark','walnut','gilt','iron'].includes(a.name)||[1842,1843,1849].includes(i),`Unexpected changed material ${i}:${a.name}`);
    changed.push({id:i,material:a.name,type:b.geometry.type});
  }
}
function trace(source,solids){
  const setup=source.slice(source.indexOf('const P ='),source.indexOf('const keys ='));
  const update=source.slice(source.indexOf('const desiredVelocity'),source.indexOf('// --------------------------------------------------------------- loop + stats'));
  const context={THREE,solids,ROOM:{GY:4.2},toast:()=>{},camera:new THREE.PerspectiveCamera(),keys:new Set(),crouch:false};
  vm.createContext(context);vm.runInContext(setup+update+';globalThis.player=P;globalThis.tick=updatePlayer;globalThis.view=setView;',context);
  const records=[];
  for(let i=0;i<6000;i++){
    if(i%1200===0)context.view(i/1200);context.keys.clear();
    for(const key of [['KeyW'],['KeyD'],['KeyS','ShiftLeft'],['KeyA'],[],['KeyW','KeyD']][Math.floor(i/50)%6])context.keys.add(key);
    context.crouch=Math.floor(i/73)%2===0;context.player.yaw+=(i%13-6)*.003;context.player.pitch=Math.sin(i/30)*.3;
    context.tick([1/60,1/90,1/30,.05][i%4]);
    records.push([context.player.pos.toArray(),context.player.vel.toArray(),context.player.vy,context.player.eyeCur,
      context.player.smoothY,context.camera.position.toArray(),context.camera.rotation.toArray()]);
  }
  return sha(JSON.stringify(records));
}
const movement=trace(oldSource,before.room.B.solids);assert.equal(trace(newSource,after.room.B.solids),movement);
const intersectionsBefore=paintContacts(before),intersectionsAfter=paintContacts(after);
assert.equal(intersectionsAfter.length,0);
const result={status:'passed',scope:'CPU-only transformed triangle/paint-volume SAT and exact preservation comparison; no graphics/native input',
  baseline:'Reviewed PR2 head 9718bb3fddc9b4988d45fae858bab9c73b6a65b4; retained in library-reading',
  woodPieces:1412,paintPieces:37,woodPaintTriangleVolumePairsBefore:intersectionsBefore.length,woodPaintTriangleVolumePairsAfter:0,
  structuralClearanceMm:12,structuralClearancePairs:paintContacts(after,.012).filter(hit=>hit.wood<717).length,
  sourcePiecesBefore:before.pieces.length,sourcePiecesAfter:after.pieces.length,changedPieces:changed,
  trianglesAdded:trianglesAfter-trianglesBefore,collisionSolidsExact:true,bookInstancesExact:true,lightsAndWindowVolumesExact:true,
  exteriorRendererLightingQualityExact:true,contentAnchorsAndBookComponentExact:true,
  movement:{steps:6000,exactMatch:true,sha256:movement}};
writeFileSync(new URL('../../evidence/core-preservation-checks.json',import.meta.url),JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify({...result,changedPieces:changed.length},null,2));
