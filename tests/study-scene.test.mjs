import assert from 'node:assert/strict';
import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import vm from 'node:vm';
import * as THREE from 'three';
import {loadGeometry} from './load-geometry.mjs';
import {EXIT_PORTAL} from '../src/exit-anchor.js';
import {prepareStudy} from '../src/secret-study/scene.js';
import {isEditingTarget} from '../src/interaction-core.js';
import {disposeLibraryResources} from '../src/exit-resources.js';

const base=await loadGeometry(undefined,EXIT_PORTAL),scene=new THREE.Scene();
const context2d=new Proxy({createLinearGradient:()=>({addColorStop(){}})},{get:(o,k)=>k in o?o[k]:()=>{},set:(o,k,v)=>(o[k]=v,true)});
const study=prepareStudy({lib:base.room,books:base.books,materials:base.materials,scene,makeCanvas:()=>({getContext:()=>context2d})});
base.room.B.finish(scene);const bookTexture=new THREE.Texture(),books=base.books.build(bookTexture);scene.add(books);study.attachBooks(bookTexture);
// Validate the real mesh, not just a nominal leaf rectangle, against the shell.
const obstacles=[...base.room.B.solids,...study.solids].filter(s=>s.y1>.3&&s.z0<-9.4&&s.z1>-12.1&&s.x0<4.6&&s.x1>2.1)
  .map(s=>new THREE.Box3(new THREE.Vector3(s.x0+.012,s.y0+.012,s.z0+.012),new THREE.Vector3(s.x1-.012,s.y1-.012,s.z1-.012)));
const tri=new THREE.Triangle(),matrix=new THREE.Matrix4(),instance=new THREE.Matrix4();let triangleTests=0;
for(let degree=0;degree<=90;degree+=2){
  study.leaf.rotation.y=degree*Math.PI/180;scene.updateMatrixWorld(true);
  study.leaf.traverse(o=>{if(!o.isMesh)return;const g=o.geometry,p=g.attributes.position,index=g.index;
    for(let n=0;n<(o.isInstancedMesh?o.count:1);n++){
      matrix.copy(o.matrixWorld);if(o.isInstancedMesh){o.getMatrixAt(n,instance);matrix.multiply(instance);}
      for(let i=0;i<(index?.count??p.count);i+=3){
        [tri.a,tri.b,tri.c].forEach((v,k)=>v.fromBufferAttribute(p,index?index.getX(i+k):i+k).applyMatrix4(matrix));
        for(const box of obstacles){triangleTests++;assert.ok(!box.intersectsTriangle(tri),`Door mesh penetrates architecture at ${degree} degrees ${JSON.stringify({material:Object.entries(base.materials).find(([,m])=>m===o.material)?.[0],box:[box.min.toArray(),box.max.toArray()],triangle:[tri.a.toArray(),tri.b.toArray(),tri.c.toArray()]})}`);}
      }
    }
  });
}
study.leaf.rotation.y=0;
// Exercise the actual production movement function, with the extension enabled.
const source=readFileSync(new URL('../src/main.js',import.meta.url),'utf8').replaceAll('\r\n','\n');
const listeners=new Map(),context={THREE,study,solids:[...base.room.B.solids,...study.solids],exitGeometry:{door:{blocks:()=>false}},ROOM:{GY:4.2},camera:new THREE.PerspectiveCamera(),toast(){},isEditingTarget,
 stats:{classList:{toggle(){}}},help:{classList:{toggle(){}}},addEventListener:(type,fn)=>listeners.set(type,fn)};
vm.createContext(context);vm.runInContext(source.slice(source.indexOf('const P ='),source.indexOf('const overlay ='))+';loop={paused:false};'+source.slice(source.indexOf('const desiredVelocity'),source.indexOf('// --------------------------------------------------------------- loop + stats'))+';globalThis.player=P;globalThis.tick=updatePlayer;globalThis.inputs=keys;',context);
for(const hz of [20,60,144]){
 const p=context.player;p.pos.set(3.5,0,-8.55);p.smoothY=0;p.yaw=0;p.vel.set(0,0,0);p.vy=0;
 study.door.openDoor();for(let i=0;i<hz*3;i++)study.update(1/hz,p.pos);
 context.inputs.add('KeyW');for(let i=0;i<hz*1.7;i++){context.tick(1/hz);assert.ok(Math.abs(p.pos.y)<1e-8);}
 context.inputs.clear();assert.ok(p.pos.z<-12.3,`walk in at ${hz} Hz`);
 p.vel.set(0,0,0);context.inputs.add('KeyS');for(let i=0;i<hz*1.7;i++){context.tick(1/hz);assert.ok(Math.abs(p.pos.y)<1e-8);}
 context.inputs.clear();assert.ok(p.pos.z>-9,`walk out at ${hz} Hz`);
}
const resources=new Set(),materials=new Set(),textures=new Set();let draws=0,triangles=0,geometryBytes=0;
scene.traverse(o=>{if(o.geometry){resources.add(o.geometry);if(o.isMesh){draws++;triangles+=(o.geometry.index?.count??o.geometry.attributes.position.count)/3*(o.isInstancedMesh?o.count:1);for(const a of Object.values(o.geometry.attributes))geometryBytes+=a.array.byteLength;if(o.geometry.index)geometryBytes+=o.geometry.index.array.byteLength;}}if(o.isInstancedMesh)resources.add(o);for(const m of [].concat(o.material||[])){resources.add(m);materials.add(m);for(const v of Object.values(m))if(v?.isTexture){resources.add(v);textures.add(v);}}});
const counts=new Map();for(const r of resources)r.addEventListener('dispose',()=>counts.set(r,(counts.get(r)||0)+1));
study.dispose();disposeLibraryResources({scene,renderer:{dispose(){}},materials:Object.values(base.materials)});
for(const r of resources)assert.equal(counts.get(r),1,`resource ${r.type||r.constructor.name} disposed exactly once`);
assert.equal(study.room.atlas.image,null);
const result={status:'passed',cases:['Actual moving mesh/216 books tested against nearby architectural collision volumes at 46 angles, with 12 mm joint allowance','Actual main.js movement walks both directions, remains supported and clears the open leaf at 20/60/144 Hz','Every attached geometry/material/texture/instance disposes exactly once; atlas backing canvas released'],triangleTests,budget:{combinedCoreDraws:draws,combinedCoreTriangles:triangles,combinedCoreGeometryBytes:geometryBytes,combinedMaterialReferences:materials.size,combinedTextureReferences:textures.size},scope:'CPU only; combined core excludes exterior, public premium books, exit dressing, shafts and dust, which are unchanged. No GPU/native/rendered claim.'};
mkdirSync(new URL('../study-evidence/',import.meta.url),{recursive:true});writeFileSync(new URL('../study-evidence/scene.json',import.meta.url),JSON.stringify(result,null,2));console.log(JSON.stringify(result,null,2));
