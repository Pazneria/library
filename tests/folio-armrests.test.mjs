import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import * as THREE from 'three';
import * as accepted from '../src/reading-seat/folio-refined/folio-core.mjs';
import * as rounded from '../src/reading-seat/folio-rounded/folio-core.mjs';
import {createFolioChair as createAccepted} from '../src/reading-seat/folio-refined/folio-chair.mjs';
import {createFolioChair} from '../src/reading-seat/folio-rounded/folio-chair.mjs';
const before=accepted.buildFolioData(),after=rounded.buildFolioData(),audit=rounded.auditFolio(after);
const withoutVersion=contract=>({...contract,version:null});
assert.equal(audit.passed,true,JSON.stringify(audit.errors));
assert.deepEqual(withoutVersion(after.contract),withoutVersion(before.contract),'Exact anchors, bounds, offsets, sitting dimensions and collisions');
assert.equal(rounded.buildFolioTextures,accepted.buildFolioTextures,'The accepted texture generator is reused');
const part=(b,p)=>{
  const indices=b.indices.slice(p.startTriangle*3,(p.startTriangle+p.triangles)*3);
  const ids=[...new Set(indices)].sort((a,b)=>a-b),map=new Map(ids.map((id,i)=>[id,i]));
  return {positions:ids.flatMap(id=>b.positions.slice(id*3,id*3+3)),normals:ids.flatMap(id=>b.normals.slice(id*3,id*3+3)),
    uvs:ids.flatMap(id=>b.uvs.slice(id*2,id*2+2)),indices:indices.map(id=>map.get(id))};
};
for(let b=0;b<5;b++){
  if(b>=2){assert.deepEqual(after.batches[b],before.batches[b],'Upholstery, welts and stitches are unchanged');continue;}
  for(const p of before.batches[b].parts){
    const now=after.batches[b].parts.find(q=>q.name===p.name);
    if(!/^(left|right) sculpted arm(?: \/ finish end grain)?$/.test(p.name))assert.deepEqual(part(after.batches[b],now),part(before.batches[b],p),p.name+' remains exact');
    else if(b===0){
      const a=part(before.batches[b],p),z=part(after.batches[b],now);
      assert.deepEqual(z.positions.slice(0,23*24*3),a.positions.slice(0,23*24*3),'Broad body and station 22 positions retained');
      assert.deepEqual(z.normals.slice(0,22*24*3),a.normals.slice(0,22*24*3),'Body normals before terminal join retained');
      assert.deepEqual(z.uvs.slice(0,23*24*2),a.uvs.slice(0,23*24*2),'Body grain mapping retained');
      const end=after.batches[1].parts.find(q=>q.name===p.name+' / finish end grain'),tip=part(after.batches[1],end);
      assert.deepEqual(z.positions.slice(-24*3),tip.positions.slice(0,24*3),'Wood and end-grain share the terminal ring');
      assert.deepEqual(z.normals.slice(-24*3),tip.normals.slice(0,24*3),'Continuous normals at the material seam');
      assert.ok(new Set(tip.normals.map(n=>n.toFixed(6))).size>10,'The terminal has a curved normal field');
    }
  }
}
const baselineAsset=createAccepted(THREE),asset=createFolioChair(THREE);
for(const side of ['left','right']){
  const name=side+' sculpted arm',surfaces=[part(after.batches[0],after.batches[0].parts.find(p=>p.name===name)),
    ...['start','finish'].map(end=>part(after.batches[1],after.batches[1].parts.find(p=>p.name===name+' / '+end+' end grain')))];
  const edges=new Map(),key=p=>p.map(v=>Math.round(v*1e9)).join(',');
  for(const surface of surfaces)for(let i=0;i<surface.indices.length;i+=3){
    const triangle=surface.indices.slice(i,i+3).map(id=>key(surface.positions.slice(id*3,id*3+3)));
    for(let e=0;e<3;e++){
      const a=triangle[e],b=triangle[(e+1)%3],ordered=a<b?[a,b]:[b,a],edge=ordered.join('|'),record=edges.get(edge)||{uses:0,direction:0};
      record.uses++;record.direction+=a<b?1:-1;edges.set(edge,record);
    }
  }
  assert.ok([...edges.values()].every(e=>e.uses===2&&e.direction===0),'Rounded '+side+' arm is a closed consistently wound surface across materials');
}
assert.deepEqual(new THREE.Box3().setFromObject(asset.root),new THREE.Box3().setFromObject(baselineAsset.root),'Actual typed geometry preserves the exact footprint');
let bytes=0;const resources=new Set();
for(let i=0;i<asset.root.children.length;i++){
  const mesh=asset.root.children[i],old=baselineAsset.root.children[i];
  resources.add(mesh.geometry);resources.add(mesh.material);
  for(const a of Object.values(mesh.geometry.attributes))bytes+=a.array.byteLength;
  bytes+=mesh.geometry.index.array.byteLength;
  for(const key of ['roughness','metalness','bumpScale'])assert.equal(mesh.material[key],old.material[key]);
  assert.equal(mesh.material.color.getHex(),old.material.color.getHex());
  for(const key of ['map','bumpMap','roughnessMap'])if(mesh.material[key]){
    const map=mesh.material[key];resources.add(map);
    assert.deepEqual(map.image.data,old.material[key].image.data,'Accepted material samples remain exact');
    assert.equal(map.anisotropy,old.material[key].anisotropy);
  }
}
assert.equal(resources.size,16);assert.equal(bytes,531472);assert.equal(audit.counts.triangles,19704);assert.equal(audit.counts.drawCalls,5);
const disposal=new Map();for(const r of resources)r.addEventListener('dispose',()=>disposal.set(r,(disposal.get(r)||0)+1));
asset.dispose();asset.dispose();baselineAsset.dispose();assert.equal(disposal.size,16);assert.ok([...disposal.values()].every(n=>n===1));
const root=new URL('../',import.meta.url),base='8e07dab17098664835f98b3170ad9d687e98f3d4';
const protectedPaths=execFileSync('git',['ls-tree','-r','--name-only',base,'src','index.html','package-lock.json'],{cwd:root,encoding:'utf8'}).trim().split('\n');
for(const path of protectedPaths){
  const original=execFileSync('git',['show',base+':'+path],{cwd:root});
  if(path==='src/reading-seat/hillside.js')assert.equal(readFileSync(new URL(path,root),'utf8').replace("'./folio-rounded/folio-chair.mjs'","'./folio-refined/folio-chair.mjs'"),original.toString('utf8'),'Only the reversible variant import changes the host');
  else assert.deepEqual(readFileSync(new URL(path,root)),original,path+' remains byte-exact to published main');
}
console.log(JSON.stringify({status:'passed',base,protectedPaths:protectedPaths.length,onlyHostChange:'Folio variant import',
  exactSittingContract:true,actualBoundsExact:true,materialsAndTexturesExact:true,nonArmPartsExact:true,terminalOnly:true,
  triangles:19704,deltaTriangles:384,draws:5,geometryBytes:bytes,deltaGeometryBytes:8448,resources:16,onceOnlyDisposal:true,audit},null,2));
