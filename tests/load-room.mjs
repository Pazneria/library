import { readFileSync } from 'node:fs';
import * as THREE from 'three';

// Actual room builder with textures stubbed: bounded CPU geometry only.
export async function loadRoom() {
  const threeURL = import.meta.resolve('three');
  const mergeURL = import.meta.resolve('three/addons/utils/BufferGeometryUtils.js');
  const source = readFileSync(new URL('../src/build.js', import.meta.url), 'utf8');
  const textures = readFileSync(new URL('../src/textures.js', import.meta.url), 'utf8');
  const names = [...textures.matchAll(/export function (\w+)/g)].map(match => match[1]).filter(name => name !== 'rng');
  const stub = `const TX = {${names.map(name => `${name}:()=>new THREE.Texture()`).join(',')}};`;
  const moduleURL = value => 'data:text/javascript;base64,' + Buffer.from(value).toString('base64');
  const api = await import(moduleURL(source.replace("'three'", JSON.stringify(threeURL))
    .replace("'three/addons/utils/BufferGeometryUtils.js'", JSON.stringify(mergeURL))
    .replace("import * as TX from './textures.js';", stub)));
  const { BookSet } = await import('../src/books.js');
  const { rng } = await import(moduleURL(textures.split('// Tileable')[0].replace("import * as THREE from 'three';", '')));
  const materials = api.makeMaterials(), pieces = [];
  const add = api.Builder.prototype.add;
  api.Builder.prototype.add = function(material, geometry) {
    geometry.computeBoundingBox(); pieces.push(geometry.boundingBox.clone());
    add.call(this, material, geometry);
  };
  const books = new BookSet(rng(77));
  const room = api.buildLibrary(materials, books, rng(20261006));
  api.Builder.prototype.add = add;
  return { solids: room.B.solids, pieces, books };
}
