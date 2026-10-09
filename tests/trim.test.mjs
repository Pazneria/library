import assert from 'node:assert/strict';
import { loadGeometry, paintContacts } from './load-geometry.mjs';

const scene = await loadGeometry();
const paint = scene.pieces.filter(p => ['plaster', 'sage', 'ceil'].includes(p.name));
for (const piece of paint) {
  assert.equal(piece.geometry.type, 'BoxGeometry');
  const normal = piece.geometry.attributes.normal;
  for (let i=0;i<normal.count;i++) {
    const values=[normal.getX(i),normal.getY(i),normal.getZ(i)];
    assert.equal(values.filter(value=>Math.abs(value)>1e-5).length,1, 'Paint volume must be axis-aligned');
  }
}
assert.equal(paintContacts(scene).length,0,'A wood triangle still intersects a painted wall/ceiling volume');
// Everything before the first bookcase includes the architectural trim,
// transformed truss braces, alcove beams, window parts, rails and stairs.
assert.equal(paintContacts(scene,.012).filter(hit=>hit.wood<717).length,0,'Architectural wood has less than 12 mm physical paint clearance');
const faces=scene.pieces.slice(38,42).map(piece=>[piece.box.min.toArray(),piece.box.max.toArray()]);
assert.ok(faces.slice(0,3).every(bounds=>bounds[1][1]<3.589&&bounds[1][0]<-7.511));
assert.ok(faces[3][0][0]>-6.989,'The whole lintel must stand outside the main wall');
console.log(JSON.stringify({status:'passed',woodPieces:scene.pieces.filter(p=>['oak','dark','walnut','gilt'].includes(p.name)).length,
  paintPieces:paint.length,intersectingPairs:0,architecturalClearanceMm:12,
  scope:'All transformed wood triangles tested against axis-aligned paint volumes using SAT. Flush concealed furniture backs are outside the architectural-clearance claim.'},null,2));
