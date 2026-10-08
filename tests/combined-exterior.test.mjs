import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import * as THREE from 'three';
import { createExterior } from '../src/exterior/index.js';
import { disposeLibraryResources } from '../src/exit-resources.js';

const cases = [], scene = new THREE.Scene();
const exterior = createExterior({ sunDirection: new THREE.Vector3(-.9,.4,.14).normalize() });
scene.add(exterior.group);
const geometries = new Set(), materials = new Set(), textures = new Set(), instances = new Set();
scene.traverse(object => {
  if (object.geometry) geometries.add(object.geometry);
  if (object.material) materials.add(object.material);
  if (object.isInstancedMesh) instances.add(object);
});
for (const material of materials) for (const uniform of Object.values(material.uniforms || {})) {
  if (uniform.value?.isTexture) textures.add(uniform.value);
}
assert.deepEqual([geometries.size,materials.size,textures.size,instances.size],[9,3,1,12]);
assert.equal(exterior.budget.triangles,51700);
assert.equal(exterior.budget.drawCallsUpperBound,14);
assert.equal(exterior.budget.textureBytesWithMipmaps,87380);
cases.push('Actual combined exterior keeps frozen inventory: 51,700 triangles, 14 submissions, three materials, 87,380 texture bytes with mipmaps');
const resources = [...geometries,...materials,...textures,...instances], counts = new Map();
for (const resource of resources) {
  counts.set(resource,0); resource.addEventListener('dispose',()=>counts.set(resource,counts.get(resource)+1));
}
let rendererDisposals=0;
disposeLibraryResources({scene,renderer:{dispose(){rendererDisposals++;}}});
assert.ok([...counts.values()].every(count=>count===1),'Full host cleanup must release every exterior resource exactly once');
assert.equal(rendererDisposals,1);assert.equal(scene.children.length,0);
cases.push('Exit host scene cleanup releases real shared exterior geometry, shader texture/materials and instance buffers exactly once, without also calling exterior.dispose');
function sources(root) {
  return readdirSync(root,{withFileTypes:true}).flatMap(entry=>{
    const path=new URL(entry.name+(entry.isDirectory()?'/':''),root);
    return entry.isDirectory()?sources(path):/\.(js|css)$/.test(entry.name)?[path]:[];
  });
}
for(const file of sources(new URL('../src/',import.meta.url))){
  const source=readFileSync(file,'utf8');
  assert.ok(!/\b(?:fetch|XMLHttpRequest|WebSocket|EventSource)\s*\(|\b(?:localStorage|sessionStorage|indexedDB|serviceWorker|caches)\b|document\.cookie/.test(source),file.pathname);
  assert.ok(!/\b(?:password|access_token|refresh_token|api_key)\b/i.test(source),file.pathname);
}
cases.push('Recursive public source review, including nested exterior modules, finds no network/private persistence/credential APIs');
const main=readFileSync(new URL('../src/main.js',import.meta.url),'utf8');
assert.equal((main.match(/createExterior\(\{ sunDirection: sunDir \}\)/g)||[]).length,1);
assert.match(main,/scene\.add\(exterior\.group\)/);
assert.ok(!/exterior\.dispose\s*\(/.test(main),'Shared host teardown is the sole scene GPU resource owner');
assert.ok(!/exterior\.(?:update|tick)\s*\(/.test(main));
assert.match(main,/setMenuPaused:/);assert.match(main,/beforeLeave: disposeLibrary/);assert.match(main,/returnFocus: canvas/);
assert.ok(!main.includes("overlay.classList.contains('hide')"));
cases.push('Static exterior attaches once; core menu/canvas-focus and exit teardown hooks survive; no exterior per-frame update or duplicate disposal');
console.log(JSON.stringify({status:'passed',cases,scope:'CPU-only real scene/resource construction and source checks; no rendered appearance, GLSL compilation or GPU timing'},null,2));
