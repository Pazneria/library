import { readFileSync } from 'node:fs';
import * as THREE from 'three';

// Actual room builder with textures stubbed: bounded CPU geometry only.
export async function loadRoom(exitPortal = null) {
  const threeURL = import.meta.resolve('three');
  const mergeURL = import.meta.resolve('three/addons/utils/BufferGeometryUtils.js');
  const source = readFileSync(new URL('../src/build.js', import.meta.url), 'utf8');
  const textures = readFileSync(new URL('../src/textures.js', import.meta.url), 'utf8');
  const names = [...textures.matchAll(/export function (\w+)/g)].map(match => match[1]).filter(name => name !== 'rng');
  const stub = `const TX = {${names.map(name => `${name}:()=>new THREE.Texture()`).join(',')}};`;
  const rugURL = new URL('../src/reading-rug/index.js', import.meta.url).href;
  const rugStub = `import { addReadingRug as addRug, createRugMaterials } from ${JSON.stringify(rugURL)}; const addReadingRug = frame => addRug(frame, createRugMaterials(() => new THREE.Texture()));`;
  const moduleURL = value => 'data:text/javascript;base64,' + Buffer.from(value).toString('base64');
  const api = await import(moduleURL(source.replace("'three'", JSON.stringify(threeURL))
    .replace("'three/addons/utils/BufferGeometryUtils.js'", JSON.stringify(mergeURL))
    .replace("import * as TX from './textures.js';", stub)
    .replace("'./reading-chairs/index.js'", JSON.stringify(new URL('../src/reading-chairs/index.js', import.meta.url).href))
    .replace("'./upstairs-desk/index.js'", JSON.stringify(new URL('../src/upstairs-desk/index.js', import.meta.url).href))
    .replace("import { addReadingRug } from './reading-rug/index.js';", rugStub)
    .replace("import { makeGlobeMaterials } from './antique-globe/atlas.js';", "const makeGlobeMaterials = () => Object.fromEntries(['globe','globeWalnut','globeBrass','globeScales'].map(k => [k, new THREE.MeshStandardMaterial()]));")
    .replace("'./antique-globe/geometry.js'", JSON.stringify(new URL('../src/antique-globe/geometry.js', import.meta.url).href))));
  const { BookSet } = await import('../src/books.js');
  const { rng } = await import(moduleURL(textures.split('// Tileable')[0].replace("import * as THREE from 'three';", '')));
  const materials = api.makeMaterials(), pieces = [];
  const add = api.Builder.prototype.add;
  api.Builder.prototype.add = function(material, geometry) {
    geometry.computeBoundingBox(); pieces.push(geometry.boundingBox.clone());
    add.call(this, material, geometry);
  };
  const books = new BookSet(rng(77));
  const room = api.buildLibrary(materials, books, rng(20261006), exitPortal);
  api.Builder.prototype.add = add;
  return { solids: room.B.solids, pieces, books };
}
