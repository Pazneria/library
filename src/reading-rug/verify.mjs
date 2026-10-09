// CPU-only contract checks. Run from repo root: node src/reading-rug/verify.mjs
// The optional first argument selects the comparison commit (default: brief).
import assert from 'node:assert/strict';
import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { inflateSync } from 'node:zlib';
import * as THREE from 'three';
import { READING_RUG, createRugBodyGeometry, createRugFringeGeometry, createRugMaterials } from './index.js';
import { disposeLibraryResources } from '../exit-resources.js';
const hash = data => createHash('sha256').update(data).digest('hex');
const base=process.argv[2]||'f47874c78844936ee048cf45b81cf3827f5b35b7';
const body=createRugBodyGeometry(),fringe=createRugFringeGeometry();
const stats=[];
for (const g of [body,fringe]) {
  assert.equal(g.index.count%3,0);
  let minimumArea=Infinity,volume=0,bytes=g.index.array.byteLength;
  for(const a of Object.values(g.attributes)) {
    bytes+=a.array.byteLength;
    assert.ok([...a.array].every(Number.isFinite),'Finite vertex attributes');
  }
  const a=new THREE.Vector3(),b=new THREE.Vector3(),c=new THREE.Vector3(),cross=new THREE.Vector3();
  for(let i=0;i<g.index.count;i+=3) {
    for(const [v,j] of [[a,0],[b,1],[c,2]])v.fromBufferAttribute(g.attributes.position,g.index.getX(i+j));
    cross.crossVectors(b.clone().sub(a),c.clone().sub(a));
    minimumArea=Math.min(minimumArea,cross.length()/2);
    volume+=a.dot(b.clone().cross(c))/6;
  }
  assert.ok(minimumArea>1e-10,'No degenerate triangles');
  assert.ok(volume>0,'Positive outward closed volume');
  // Weld positions only for topology checks, retaining UV/normal seams in art.
  const edges=new Map(),key=id=>[0,1,2].map(k=>g.attributes.position.array[id*3+k].toFixed(7)).join(',');
  for(let i=0;i<g.index.count;i+=3) for(let j=0;j<3;j++) {
    const a=key(g.index.getX(i+j)),b=key(g.index.getX(i+(j+1)%3));
    const e=[a,b].sort().join('|'),v=edges.get(e)||[0,0];
    v[0]++;v[1]+=a<b?1:-1;edges.set(e,v);
  }
  assert.ok([...edges.values()].every(([count,balance])=>count===2&&balance===0),'Closed two-manifold, oppositely wound edges');
  const box=g.boundingBox.clone().translate(new THREE.Vector3(...READING_RUG.center));
  assert.ok(box.min.x>=-2.200001&&box.max.x<=1.200001);
  assert.ok(box.min.z>=-.900001&&box.max.z<=4.700001);
  assert.ok(box.min.y>=.00299&&box.max.y<.013,'Real floor clearance and low pile');
  stats.push({name:g.name,triangles:g.index.count/3,vertices:g.attributes.position.count,geometryBytes:bytes,minimumTriangleArea:minimumArea,signedVolume:volume,worldBounds:[box.min.toArray(),box.max.toArray()]});
}
const loaded=[];
const material=createRugMaterials((url,onLoad)=>{const t=new THREE.Texture();t.userData.sourceURL=url;if(onLoad)loaded.push(onLoad);return t;});
assert.equal(material.cloth.color.getHex(),0x87463b,'Dyed fallback before the local image loads');
loaded.forEach(callback=>callback());
assert.equal(material.cloth.color.getHex(),0xffffff,'Loaded albedo keeps its authored colours');
assert.equal(material.cloth.map.colorSpace,THREE.SRGBColorSpace);
assert.equal(material.cloth.bumpMap.colorSpace,THREE.NoColorSpace);
assert.equal(material.cloth.bumpMap,material.cloth.roughnessMap);
assert.equal(material.cloth.bumpScale,.0013);
for(const m of Object.values(material)) {
  assert.equal(m.transparent,false);assert.equal(m.side,THREE.FrontSide);
  assert.equal(m.depthWrite,true);assert.equal(m.polygonOffset,false);
  assert.equal(m.userData.noShadow,true);
}
for(const t of [material.cloth.map,material.cloth.bumpMap]) {
  assert.equal(t.minFilter,THREE.LinearMipmapLinearFilter);assert.equal(t.anisotropy,4);
  assert.equal(t.wrapS,THREE.ClampToEdgeWrapping);assert.equal(t.generateMipmaps,true);
}
function pngInfo(file) {
  const p=readFileSync(new URL(file,import.meta.url));
  assert.equal(p.subarray(0,8).toString('hex'),'89504e470d0a1a0a');
  const width=p.readUInt32BE(16),height=p.readUInt32BE(20),chunks=[],compressed=[];
  for(let i=8;i<p.length;){const n=p.readUInt32BE(i),type=p.subarray(i+4,i+8).toString();chunks.push(type);if(type==='IDAT')compressed.push(p.subarray(i+8,i+8+n));i+=12+n;}
  const raw=inflateSync(Buffer.concat(compressed));assert.equal(raw.length,(width*4+1)*height);
  for(let y=0;y<height;y++){assert.equal(raw[y*(width*4+1)],0);for(let x=0;x<width;x++)assert.equal(raw[y*(width*4+1)+x*4+4],255);}
  let mipBytes=0,w=width,h=height;do {mipBytes+=w*h*4;w=Math.max(1,w>>1);h=Math.max(1,h>>1);}while(w>1||h>1);mipBytes+=4;
  return {file,width,height,fileBytes:p.length,sha256:hash(p),gpuBytesRGBA8WithFullMips:mipBytes,chunks};
}
const textures=[pngInfo('./rug-albedo.png'),pngInfo('./rug-detail.png')];
assert.deepEqual(textures.map(t=>[t.width,t.height]),[READING_RUG.textureSize,READING_RUG.detailSize]);
assert.ok(textures[0].chunks.includes('sRGB'));assert.ok(!textures[1].chunks.includes('sRGB'));

// Compare actual transformed scene data before/after, stubbing only texture I/O.
const current=readFileSync(new URL('../build.js',import.meta.url),'utf8');
const original=execFileSync('git',['show',base+':src/build.js'],{encoding:'utf8'}).replaceAll('\r\n','\n');
const expected=original.replace("import * as TX from './textures.js';","import * as TX from './textures.js';\nimport { addReadingRug } from './reading-rug/index.js';")
  .replace('    const g = new THREE.PlaneGeometry(3.4, 5.6); g.rotateX(-Math.PI / 2);\n    W.geo(M.rug, g, -0.5, 0.008, 1.9);','    addReadingRug(W);');
assert.equal(hash(current.replaceAll('\r\n','\n')),hash(expected),'Only agreed import and rug call changed');
const tx=readFileSync(new URL('../textures.js',import.meta.url),'utf8');
const names=[...tx.matchAll(/export function (\w+)/g)].map(x=>x[1]).filter(x=>x!=='rng');
const stub=`const TX = {${names.map(name=>`${name}:()=>new THREE.Texture()`).join(',')}};`;
const dataURL=value=>'data:text/javascript;base64,'+Buffer.from(value).toString('base64');
const {rng}=await import(dataURL(tx.split('// Tileable')[0].replace("import * as THREE from 'three';",'')));
const {BookSet}=await import('../books.js');
const loader=THREE.TextureLoader.prototype.load;
THREE.TextureLoader.prototype.load=function(){return new THREE.Texture();};
async function sceneData(source) {
  const api=await import(dataURL(source.replace("'three'",JSON.stringify(import.meta.resolve('three')))
    .replace("'three/addons/utils/BufferGeometryUtils.js'",JSON.stringify(import.meta.resolve('three/addons/utils/BufferGeometryUtils.js')))
    .replace("'./reading-rug/index.js'",JSON.stringify(new URL('./index.js',import.meta.url).href))
    .replace("import * as TX from './textures.js';",stub)));
  const M=api.makeMaterials(),books=new BookSet(rng(77)),B=api.buildLibrary(M,books,rng(20261006)),pieces=[];
  for(const [m,geos] of B.B.batches) for(const g of geos) {
    const name=Object.entries(M).find(([,v])=>v===m)?.[0]||m.name;
    const h=createHash('sha256');
    for(const [key,attr]of Object.entries(g.attributes)){h.update(key);h.update(Buffer.from(attr.array.buffer));}
    if(g.index)h.update(Buffer.from(g.index.array.buffer));
    pieces.push({name,hash:h.digest('hex'),triangles:(g.index?.count||g.attributes.position.count)/3});
  }
  const snapshots={solids:B.B.solids,slots:B.slots,lights:B.lights,windows:B.windows,books:{mats:books.mats,cols:books.cols,vars:books.vars}};
  return {pieces,snapshots,B,M};
}
let before,after;
try { before=await sceneData(original);after=await sceneData(current); }
finally { THREE.TextureLoader.prototype.load=loader; }
assert.deepEqual(after.snapshots,before.snapshots,'Collisions, coordinates, room RNG, books, lights and openings preserved');
const oldRugs=before.pieces.filter(p=>p.name==='rug');assert.equal(oldRugs.length,3);
const unchangedBefore=before.pieces.filter(p=>p!==oldRugs[0]);
const unchangedAfter=after.pieces.filter(p=>!p.name.startsWith('Reading rug /'));
assert.deepEqual(unchangedAfter,unchangedBefore,'Every non-target geometry attribute/index preserved');
const scene=new THREE.Scene();after.B.B.finish(scene);
const rugMeshes=scene.children.filter(o=>o.material.name.startsWith('Reading rug /'));
assert.equal(rugMeshes.length,2);
for(const m of rugMeshes){assert.equal(m.castShadow,false);assert.equal(m.receiveShadow,true);assert.equal(m.matrixAutoUpdate,false);}
const owned=new Set();for(const m of rugMeshes){owned.add(m.geometry);owned.add(m.material);for(const k of ['map','bumpMap','roughnessMap'])if(m.material[k])owned.add(m.material[k]);}
assert.equal(owned.size,6);let disposed=0;for(const r of owned)r.addEventListener('dispose',()=>disposed++);
disposeLibraryResources({scene,renderer:{dispose(){}},materials:Object.values(after.M)});assert.equal(disposed,6);assert.equal(scene.children.length,0);
const report={status:'passed',base,threeRevision:THREE.REVISION,
  geometry:stats,totalTriangles:stats.reduce((n,g)=>n+g.triangles,0),netAddedTriangles:stats.reduce((n,g)=>n+g.triangles,0)-2,
  totalGeometryBytes:stats.reduce((n,g)=>n+g.geometryBytes,0),
  mainPassDraws:2,netAddedMainPassDraws:2,addedShadowPassDraws:0,materials:2,textures,
  gpuTextureBytesRGBA8WithFullMips:textures.reduce((n,t)=>n+t.gpuBytesRGBA8WithFullMips,0),
  preservedGeometryPieces:unchangedAfter.length,preservedSolidCount:after.snapshots.solids.length,
  checks:['Finite attributes; no degenerate triangles; positive volumes; closed manifold winding','Original footprint and anchor, 3 mm floor clearance, <13 mm pile top','Linear detail / sRGB colour, mip filters, opaque depth-writing materials','All untouched scene geometry, books, collisions, lights and openings exactly equal','Existing resource disposer releases 2 geometries, 2 materials, 2 textures once'],
  limitations:['No 3D render, browser, server, native UI, GPU or performance test','Texture image loading/decoding stubbed; PNG structure and opacity checked on CPU','Draw counts are structural main-pass accounting, not observed renderer.info readings']};
writeFileSync(new URL('./validation.json',import.meta.url),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report,null,2));
