import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { createPhysicalBook } from '../../src/jippity-book/book.js';
import { pickBook,HILLSIDE_PLACEMENT } from '../../src/jippity-book/picking.js';

const library=resolve(process.argv[2]||'');
assert.ok(process.argv[2],'Pass the authorized PR2 checkout path.');
const require=createRequire(resolve(library,'package.json'));
const THREE=require('three');
assert.equal(THREE.REVISION,'170');
const content=JSON.parse(readFileSync(new URL('../../src/jippity-book/content.json',import.meta.url),'utf8'));
const calls={};
const context=new Proxy({measureText:t=>({width:t.length*28})},{
 get(target,key){return key in target?target[key]:(...args)=>{calls[key]=(calls[key]||0)+1;};},
 set(target,key,value){target[key]=value;return true;}
});
const start=performance.now();
const book=createPhysicalBook({THREE,content,...HILLSIDE_PLACEMENT,makeCanvas:()=>({getContext:()=>context})});
const constructionMs=performance.now()-start;
assert.equal(book.object.material.type,'MeshStandardMaterial');
assert.equal(book.object.material.roughnessMap,book.object.material.metalnessMap);
assert.equal(book.object.material.map.colorSpace,THREE.SRGBColorSpace);
assert.equal(book.object.matrixAutoUpdate,false);
const scene=new THREE.Scene();scene.add(book.object);scene.updateMatrixWorld(true);
const box=new THREE.Box3().setFromObject(book.object);
const {loadRoom}=await import(pathToFileURL(resolve(library,'tests/load-room.mjs')));
const room=await loadRoom();
const volumeOverlap=(a,b)=>['x','y','z'].every(axis=>Math.min(a.max[axis],b.max[axis])-Math.max(a.min[axis],b.min[axis])>.0008);
assert.ok(!room.pieces.some(p=>volumeOverlap(box,p)),'Book overlaps room furniture');
const unit=new THREE.Box3(new THREE.Vector3(-.5,-.5,-.5),new THREE.Vector3(.5,.5,.5));
const decorativeBooks=room.books.mats.map(m=>unit.clone().applyMatrix4(m));
assert.ok(!decorativeBooks.some(p=>volumeOverlap(box,p)),'Book overlaps a decorative book');
const eye=new THREE.Vector3(-1.65,1.62,2.55),aim=new THREE.Vector3(-.87,.846,2.35);
const selected=pickBook(eye,aim.clone().sub(eye),room.solids);
assert.equal(selected?.id,'table-drums','Authored west approach can reach the actual book');
assert.ok(box.min.x>-1.125&&box.max.x<.125&&box.min.z>-.05&&box.max.z<3.85,'Inside original reading tabletop');
assert.ok(box.min.y>=.78,'Clear visible tabletop');
let disposed=0;
const resources=[book.object.geometry,book.object.material,book.object.material.map,book.object.material.roughnessMap,book.object.material.bumpMap];
resources.forEach(r=>r.addEventListener('dispose',()=>disposed++));
book.dispose();book.dispose();assert.equal(disposed,5);assert.equal(scene.children.length,0);
assert.equal(resources[2].image,null);
console.log(JSON.stringify({status:'passed',threeRevision:THREE.REVISION,budget:book.budget,
 worldBounds:{min:box.min.toArray(),max:box.max.toArray()},reachDistance:selected.distance,
 roomPiecesChecked:room.pieces.length,decorativeBooksChecked:decorativeBooks.length,
 constructionWithCanvasStubMs:constructionMs,canvasMethodCalls:calls,
 checks:['Real Three geometry/material construction','Original table and decorative-book clearance','Original room collision-aware reach','Idempotent disposal of five GPU resources'],
 limitations:'Construction time is one CPU sample with a canvas stub, not a render, texture-paint or browser timing.'},null,2));
