import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import * as THREE from 'three';
import { createExterior } from '../src/exterior/index.js';
import { makeLayout, inBuildingClearance, inWestViewCorridor, terrainHeight } from '../src/exterior/layout.js';

const sunDirection = new THREE.Vector3(-0.9, 0.4, 0.14).normalize();
const exterior = createExterior({ sunDirection });
const { group, budget, layout } = exterior;
const cases = [];
assert.deepEqual(layout, makeLayout());
assert.ok(budget.triangles <= 52000);
assert.ok(budget.drawCallsUpperBound <= 14);
assert.equal(budget.materials, 3);
assert.equal(budget.textures, 1);
assert.ok(budget.bufferBytes < 750000);
assert.equal(budget.textureBytesWithMipmaps, 87380);
cases.push('Deterministic layout; triangle, draw, material, buffer and texture caps');

const bufferHash = createHash('sha256');
group.traverse(object => {
  if (!object.isMesh) return;
  assert.equal(object.castShadow, false);
  assert.equal(object.receiveShadow, false);
  assert.equal(object.material.transparent, false);
  assert.equal(object.material.side, object.name === 'exterior-sky' ? THREE.BackSide : THREE.FrontSide);
  assert.equal(object.matrixAutoUpdate, false);
  for (const attribute of Object.values(object.geometry.attributes)) {
    assert.ok(attribute.array.every(Number.isFinite));
    bufferHash.update(Buffer.from(attribute.array.buffer, attribute.array.byteOffset, attribute.array.byteLength));
  }
  if (object.geometry.index) bufferHash.update(Buffer.from(object.geometry.index.array.buffer));
  if (object.isInstancedMesh) {
    assert.ok(object.frustumCulled);
    assert.ok(Number.isFinite(object.boundingSphere.radius) && object.boundingSphere.radius > 0);
    assert.ok(object.instanceMatrix.array.every(Number.isFinite));
    assert.equal(object.instanceMatrix.usage, THREE.StaticDrawUsage);
    bufferHash.update(Buffer.from(object.instanceMatrix.array.buffer));
    bufferHash.update(Buffer.from(object.instanceColor.array.buffer));
  }
});
cases.push('Finite geometry and bounds; static instances; opaque materials; zero exterior shadow work');

// Check the actual transformed vertices, not only placement centres. Nothing
// above the terrain may occupy the protected building/entry footprint.
const matrix = new THREE.Matrix4(), point = new THREE.Vector3(), worldBox = new THREE.Box3();
group.traverse(object => {
  if (!object.isInstancedMesh) return;
  for (let i = 0; i < object.count; i++) {
    object.getMatrixAt(i, matrix);
    worldBox.copy(object.geometry.boundingBox).applyMatrix4(matrix);
    const overlaps = worldBox.max.x > -13 && worldBox.min.x < 9 && worldBox.max.z > -12 && worldBox.min.z < 11;
    assert.equal(overlaps, false, `${object.name} instance ${i} enters building clearance`);
    const positions = object.geometry.attributes.position;
    for (let vertex = 0; vertex < positions.count; vertex++) {
      point.fromBufferAttribute(positions, vertex).applyMatrix4(matrix);
      assert.ok(object.boundingBox.containsPoint(point), `${object.name}: incorrect culling box`);
    }
  }
});
for (const tree of layout.trees) {
  assert.equal(inBuildingClearance(tree.x, tree.z, tree.height * 0.45), false);
  assert.equal(inWestViewCorridor(tree.x, tree.z, tree.height * 0.34), false);
}
cases.push('Every instance stays outside building/entry clearance; framing trees leave the west meadow open');

// Rays originate at the actual production window centres. Low sill and outward
// centre rays stay open to 120 m; nearby crowns cannot seal a window's view.
const vegetation = group.children.filter(object => object.isInstancedMesh);
const windows = [
  { p: [-7.51, 1.62, -4.6], d: [-1, 0, 0] },
  { p: [-7.51, 1.62, -0.6], d: [-1, 0, 0] },
  { p: [-12.01, 1.62, 4.9], d: [-1, 0, 0] },
  { p: [-7.51, 6.5, 4.9], d: [-1, 0, 0] },
  { p: [-9.5, 1.62, 7.91], d: [0, 0, 1] },
  { p: [-9.5, 1.62, 1.89], d: [0, 0, -1] },
  { p: [-4, 6.4, 9.51], d: [0, 0, 1] },
  { p: [3.6, 6.4, 9.51], d: [0, 0, 1] },
];
for (const window of windows) {
  const ray = new THREE.Raycaster(new THREE.Vector3(...window.p), new THREE.Vector3(...window.d), 0, 120);
  assert.equal(ray.intersectObjects(vegetation, false).length, 0, `Blocked window at ${window.p}`);
}
cases.push('Eight actual outward window-centre rays remain clear through 120 m');

const ground = group.getObjectByName('exterior-continuous-terrain');
const positions = ground.geometry.attributes.position;
for (let i = 0; i < positions.count; i++) {
  assert.ok(Math.abs(positions.getY(i) - terrainHeight(positions.getX(i), positions.getZ(i))) < 0.0001);
}
const texture = ground.material.uniforms.map.value;
assert.equal(texture.image.width, 128); assert.equal(texture.image.height, 128);
assert.ok(texture.generateMipmaps);
assert.equal(texture.anisotropy, 4);
assert.ok(texture.image.data.every((value, i) => i % 4 !== 3 || value === 255));
cases.push('Terrain vertices follow the preserved analytic hillside; generated texture is opaque, mipmapped and preupload-compatible');

// This is frustum submission math only. It omits window/wall occlusion, GPU
// rasterization, shader compilation, driver overhead and every FPS claim.
const views = [
  { name: 'Entrance by the hearth', p: [3.4, 1.62, 4.3], yaw: 0.78, pitch: 0.1 },
  { name: 'Lower shelves', p: [-2, 1.62, -3.7], yaw: 1.2, pitch: -0.05 },
  { name: 'Window reading alcove', p: [-8.2, 1.62, 4.9], yaw: 1.5, pitch: -0.05 },
  { name: 'Foot of staircase', p: [5.6, 1.62, 8], yaw: 0, pitch: 0.18 },
  { name: 'Gallery overlook', p: [1.2, 5.82, -7.6], yaw: Math.PI - 0.3, pitch: -0.32 },
];
const frustumViews = views.map(view => {
  const camera = new THREE.PerspectiveCamera(70, 16 / 9, 0.05, 2500);
  camera.position.set(...view.p); camera.rotation.set(view.pitch, view.yaw, 0, 'YXZ'); camera.updateMatrixWorld(true);
  const frustum = new THREE.Frustum().setFromProjectionMatrix(new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse));
  let triangles = 0, drawCalls = 0;
  for (const object of group.children) {
    if (object.frustumCulled && !frustum.intersectsObject(object)) continue;
    drawCalls++;
    triangles += (object.geometry.index?.count || object.geometry.attributes.position.count) / 3 * (object.isInstancedMesh ? object.count : 1);
  }
  return { name: view.name, triangles, drawCalls };
});

const scene = new THREE.Scene(); scene.add(group);
let geometryDisposals = 0, materialDisposals = 0, textureDisposals = 0, instanceDisposals = 0;
const seenGeometry = new Set(), seenMaterial = new Set();
group.traverse(object => {
  if (object.geometry && !seenGeometry.has(object.geometry)) {
    seenGeometry.add(object.geometry); object.geometry.addEventListener('dispose', () => geometryDisposals++);
  }
  if (object.material && !seenMaterial.has(object.material)) {
    seenMaterial.add(object.material); object.material.addEventListener('dispose', () => materialDisposals++);
  }
  if (object.isInstancedMesh) object.addEventListener('dispose', () => instanceDisposals++);
});
texture.addEventListener('dispose', () => textureDisposals++);
exterior.dispose();
assert.equal(group.parent, null);
assert.equal(geometryDisposals, budget.geometries); assert.equal(materialDisposals, budget.materials);
assert.equal(textureDisposals, 1); assert.equal(instanceDisposals, 12);
cases.push('Removal disposes all owned geometries, materials, texture and instance buffers exactly once');

console.log(JSON.stringify({ status: 'passed', scope: 'CPU construction and static checks only', cases, geometryBufferSha256: bufferHash.digest('hex'), budget, frustumViews }, null, 2));
