import { readFileSync } from 'node:fs';
import * as THREE from 'three';

export async function loadGeometry(root = new URL('../', import.meta.url)) {
  const threeURL = import.meta.resolve('three');
  const mergeURL = import.meta.resolve('three/addons/utils/BufferGeometryUtils.js');
  const source = readFileSync(new URL('src/build.js', root), 'utf8');
  const textures = readFileSync(new URL('src/textures.js', root), 'utf8');
  const names = [...textures.matchAll(/export function (\w+)/g)].map(match => match[1]).filter(name => name !== 'rng');
  const stub = `const TX = {${names.map(name => `${name}:()=>new THREE.Texture()`).join(',')}};`;
  const moduleURL = value => 'data:text/javascript;base64,' + Buffer.from(value).toString('base64');
  const api = await import(moduleURL(source.replace("'three'", JSON.stringify(threeURL))
    .replace("'three/addons/utils/BufferGeometryUtils.js'", JSON.stringify(mergeURL))
    .replace("import * as TX from './textures.js';", stub)));
  const { BookSet } = await import(moduleURL(readFileSync(new URL('src/books.js', root), 'utf8').replace("'three'", JSON.stringify(threeURL))));
  const { rng } = await import(moduleURL(textures.split('// Tileable')[0].replace("import * as THREE from 'three';", '')));
  const materials = api.makeMaterials(), pieces = [];
  const materialNames = new Map(Object.entries(materials).map(([name, material]) => [material, name]));
  const add = api.Builder.prototype.add;
  api.Builder.prototype.add = function(material, geometry) {
    geometry.computeBoundingBox();
    pieces.push({ id: pieces.length, name: materialNames.get(material), geometry, box: geometry.boundingBox.clone() });
    add.call(this, material, geometry);
  };
  const books = new BookSet(rng(77));
  let room;
  try { room = api.buildLibrary(materials, books, rng(20261006)); }
  finally { api.Builder.prototype.add = add; }
  return { pieces, books, room };
}

// Paint is constructed entirely from axis-aligned boxes. Test actual transformed
// wood triangles with SAT; no outward-normal or BoxGeometry-only assumption.
export function paintContacts(scene, clearance = 0) {
  const wood = scene.pieces.filter(piece => ['oak', 'dark', 'walnut', 'gilt'].includes(piece.name));
  const paint = scene.pieces.filter(piece => ['plaster', 'sage', 'ceil'].includes(piece.name));
  const contacts = [], triangle = new THREE.Triangle();
  for (const w of wood) for (const p of paint) {
    const box = p.box.clone().expandByScalar(clearance - 1e-5);
    if (!box.intersectsBox(w.box)) continue;
    const position = w.geometry.attributes.position, index = w.geometry.index;
    let count = 0;
    for (let i = 0; i < (index?.count ?? position.count); i += 3) {
      for (const [vertex, offset] of [[triangle.a, 0], [triangle.b, 1], [triangle.c, 2]]) {
        vertex.fromBufferAttribute(position, index ? index.getX(i + offset) : i + offset);
      }
      if (box.intersectsTriangle(triangle)) count++;
    }
    if (count) contacts.push({ wood: w.id, paint: p.id, material: w.name, paintMaterial: p.name,
      woodType: w.geometry.type, triangles: count,
      woodBounds: [w.box.min.toArray(), w.box.max.toArray()], paintBounds: [p.box.min.toArray(), p.box.max.toArray()] });
  }
  return contacts;
}
