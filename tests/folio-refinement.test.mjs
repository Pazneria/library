import assert from 'node:assert/strict';
import * as THREE from 'three';
import {writeFileSync,readFileSync,mkdirSync} from 'node:fs';
import {performance} from 'node:perf_hooks';
import {createHash} from 'node:crypto';
import * as before from '../src/reading-seat/folio/folio-core.mjs';
import * as after from '../src/reading-seat/folio-refined/folio-core.mjs';
import {createFolioChair} from '../src/reading-seat/folio-refined/folio-chair.mjs';
import {compileFolioSeatInterface} from '../src/reading-seat/folio-interface.js';
const original=before.buildFolioData(),candidate=after.buildFolioData(),audit=after.auditFolio(candidate);
assert.equal(audit.passed,true,JSON.stringify(audit.errors));
for(let i=0;i<original.batches.length;i++){
  assert.deepEqual(candidate.batches[i].positions,original.batches[i].positions,'Silhouette/positions retained');
  assert.deepEqual(candidate.batches[i].indices,original.batches[i].indices,'Every triangle retained');
}
const omitVersion=contract=>({...contract,version:null});
assert.deepEqual(omitVersion(candidate.contract),omitVersion(original.contract),'All anchors, bounds and proxy retained');
assert.notDeepEqual(candidate.batches[2].normals,original.batches[2].normals,'Cover shading actually changed');
assert.notDeepEqual(candidate.batches[1].uvs,original.batches[1].uvs,'Distinct board sampling at exposed ends');
const asset=createFolioChair(THREE);let attributeBytes=0;const geometries=new Set(),materials=new Set(),textures=new Set();
for(const mesh of asset.root.children){
  geometries.add(mesh.geometry);materials.add(mesh.material);
  for(const value of Object.values(mesh.geometry.attributes))attributeBytes+=value.array.byteLength;
  attributeBytes+=mesh.geometry.index.array.byteLength;
  for(const key of ['map','bumpMap','roughnessMap'])if(mesh.material[key])textures.add(mesh.material[key]);
  if(mesh.material.roughnessMap)assert.equal(mesh.material.roughnessMap,mesh.material.bumpMap,'Packed map reuse');
}
let disposed=0;for(const item of [...geometries,...materials,...textures])item.addEventListener('dispose',()=>disposed++);
const compiled=compileFolioSeatInterface(asset.contract,{position:[-7.35,0,4.9],yaw:-Math.PI/2});
assert.ok(Math.abs(compiled.facingPitch+.0649087)<1e-6);
let textureBackingBytes=0;for(const tex of textures)textureBackingBytes+=tex.image.data.byteLength;
asset.dispose();asset.dispose();assert.equal(disposed,16);assert.equal(asset.root.children.length,0);
// Constructor CPU times are local observations, not a benchmark or frame-time score.
const timing={};for(const [name,core] of [['before',before],['after',after]]){
  core.buildFolioTextures();const samples=[];
  for(let i=0;i<3;i++){const start=performance.now();core.buildFolioTextures();samples.push(performance.now()-start);}
  timing[name]={samplesMs:samples,medianMs:samples.slice().sort((a,b)=>a-b)[1]};
}
const hash=path=>createHash('sha256').update(readFileSync(new URL(path,import.meta.url))).digest('hex');
assert.equal(hash('../src/reading-seat/folio/folio-core.mjs'),'edccf32862fb2632ab8faa2282357a92126feebe8adfc5c070dfdf13ff3435c8');
assert.equal(hash('../src/reading-seat/folio/folio-chair.mjs'),'53006c52f457d0dd41f86ee7182a888b9c304cc631d0a692368ffed1dd71a639');
const result={status:'passed',positionAndTriangleBytesUnchanged:true,anchorsBoundsProxyUnchanged:true,audit,
  measuredResources:{geometries:geometries.size,materials:materials.size,textures:textures.size,geometryAttributeBytes:attributeBytes,textureBackingBytes,disposeEvents:disposed},
  localTextureConstructionTiming:timing,limits:'Local CPU texture construction observations only; no frame-time, GPU allocation or score claim. Actual visual comparison is separate.'};
mkdirSync(new URL('../../evidence/folio-refinement/',import.meta.url),{recursive:true});
writeFileSync(new URL('../../evidence/folio-refinement/CPU-RESOURCES.json',import.meta.url),JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify(result,null,2));
