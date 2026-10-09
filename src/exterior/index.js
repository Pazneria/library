import * as THREE from 'three';
import { makeLayout, seededRandom, terrainHeight } from './layout.js';
import {
  surfaceMaterial, groundTexture, terrainGeometry, oakGeometry, birchGeometry,
  woodlandGeometry, shrubGeometry, stoneGeometry, grassGeometry,
} from './assets.js';

function makeSky(sunDirection) {
  // Preserve the production sunset, exposure and horizon direction.
  const material = new THREE.ShaderMaterial({
    name: 'exterior-sunset', side: THREE.BackSide, depthWrite: false,
    uniforms: { sunDir: { value: sunDirection.clone() } },
    vertexShader: `varying vec3 vDir; void main(){ vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }`,
    fragmentShader: `uniform vec3 sunDir; varying vec3 vDir;
      void main(){ vec3 d = normalize(vDir); float h = d.y;
        vec3 zen = vec3(0.16,0.27,0.55); vec3 hor = vec3(1.25,0.74,0.45); vec3 below = vec3(0.55,0.42,0.36);
        vec3 col = mix(hor, zen, pow(clamp(h,0.0,1.0), 0.5));
        col = mix(col, below, 1.0 - smoothstep(-0.2,0.0,h));
        float s = max(dot(d, sunDir), 0.0);
        col += vec3(1.0,0.55,0.25)*pow(s,5.0)*0.7 + vec3(1.0,0.75,0.45)*pow(s,90.0)*2.5 + smoothstep(0.9993,0.9996,s)*vec3(18.0,12.0,7.0);
        gl_FragColor = vec4(col,1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(1200, 32, 16), material);
  sky.name = 'exterior-sky';
  sky.frustumCulled = false; sky.renderOrder = -1;
  sky.matrixAutoUpdate = false;
  return sky;
}

function instanceBatch(name, records, geometry, material, tintSeed) {
  const mesh = new THREE.InstancedMesh(geometry, material, records.length);
  mesh.name = name;
  const matrix = new THREE.Matrix4(), rotation = new THREE.Quaternion();
  const position = new THREE.Vector3(), scale = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
  const tint = new THREE.Color(), random = seededRandom(tintSeed);
  records.forEach((record, i) => {
    const { x, z, height, width, yaw } = record;
    position.set(x, terrainHeight(x, z) - 0.045, z);
    rotation.setFromAxisAngle(up, yaw);
    // Tree templates use unit-height proportions; detail assets have metre widths.
    const radiusScale = record.species ? height * width : width;
    scale.set(radiusScale, height, radiusScale);
    matrix.compose(position, rotation, scale);
    mesh.setMatrixAt(i, matrix);
    const v = random();
    tint.setRGB(0.88 + v * 0.23, 0.92 + v * 0.14, 0.88 + v * 0.11);
    mesh.setColorAt(i, tint);
  });
  mesh.instanceMatrix.setUsage(THREE.StaticDrawUsage);
  mesh.instanceMatrix.needsUpdate = true;
  mesh.instanceColor.setUsage(THREE.StaticDrawUsage);
  mesh.instanceColor.needsUpdate = true;
  mesh.matrixAutoUpdate = false;
  mesh.computeBoundingBox(); mesh.computeBoundingSphere();
  return mesh;
}

// Static scene-graph inventory, not GPU measurements or an FPS prediction.
export function measureExterior(group) {
  const geometries = new Set(), materials = new Set(), textures = new Set();
  const batches = [];
  let bufferBytes = 0, triangles = 0, instances = 0;
  group.traverse(object => {
    if (!object.isMesh) return;
    const geometry = object.geometry, material = object.material;
    const count = object.isInstancedMesh ? object.count : 1;
    const triangleCount = (geometry.index ? geometry.index.count : geometry.attributes.position.count) / 3;
    triangles += triangleCount * count;
    instances += object.isInstancedMesh ? count : 0;
    if (!geometries.has(geometry)) {
      for (const attr of Object.values(geometry.attributes)) bufferBytes += attr.array.byteLength;
      bufferBytes += geometry.index?.array.byteLength || 0;
      geometries.add(geometry);
    }
    if (object.instanceMatrix) bufferBytes += object.instanceMatrix.array.byteLength;
    if (object.instanceColor) bufferBytes += object.instanceColor.array.byteLength;
    materials.add(material);
    for (const value of Object.values(material.uniforms || {})) if (value.value?.isTexture) textures.add(value.value);
    batches.push({ name: object.name, instances: count, templateTriangles: triangleCount, submittedTriangles: triangleCount * count });
  });
  let textureBytes = 0, textureBytesWithMipmaps = 0;
  for (const texture of textures) {
    const { width, height, data } = texture.image;
    textureBytes += data.byteLength;
    let w = width, h = height;
    do {
      textureBytesWithMipmaps += w * h * 4;
      if (!texture.generateMipmaps || (w === 1 && h === 1)) break;
      w = Math.max(1, w >> 1); h = Math.max(1, h >> 1);
    } while (true);
  }
  return { triangles, drawCallsUpperBound: batches.length, instances, geometries: geometries.size, materials: materials.size, textures: textures.size, bufferBytes, textureBytes, textureBytesWithMipmaps, batches };
}

export function createExterior({ sunDirection }) {
  const group = new THREE.Group();
  group.name = 'hillside-exterior'; group.matrixAutoUpdate = false;
  const layout = makeLayout();
  const surface = surfaceMaterial(sunDirection);
  const texture = groundTexture();
  const ground = new THREE.Mesh(terrainGeometry(), surfaceMaterial(sunDirection, texture));
  ground.name = 'exterior-continuous-terrain'; ground.matrixAutoUpdate = false;
  group.add(makeSky(sunDirection), ground);

  const oak = oakGeometry(), birch = birchGeometry();
  const middle = woodlandGeometry(), far = woodlandGeometry(true);
  for (const species of ['oak', 'birch']) {
    const records = layout.trees.filter(tree => tree.species === species);
    group.add(instanceBatch(`exterior-near-${species}`, records, species === 'oak' ? oak : birch, surface, species === 'oak' ? 16 : 23));
  }
  // Pair north/south islands within each distance tier. Four useful culling
  // bounds instead of eight tiny draw submissions; no per-frame LOD work.
  for (const [tier, groves] of [['middle', [0, 2]], ['middle', [1, 3, 8]], ['far', [4, 6]], ['far', [5, 7]]]) {
    const records = layout.trees.filter(tree => groves.includes(tree.grove));
    group.add(instanceBatch(`exterior-${tier}-groves-${groves.join('-')}`, records, tier === 'middle' ? middle : far, surface, 70 + groves[0]));
  }
  const grass = grassGeometry();
  for (let bed = 0; bed < 4; bed++) {
    const records = layout.grass.filter(tuft => tuft.bed === bed);
    group.add(instanceBatch(`exterior-meadow-bed-${bed}`, records, grass, surface, 30 + bed));
  }
  group.add(instanceBatch('exterior-low-shrubs', layout.shrubs, shrubGeometry(), surface, 17));
  group.add(instanceBatch('exterior-sandstone-outcrops', layout.stones, stoneGeometry(), surface, 12));

  // New scenery neither receives nor casts shadow-map work. It does not change
  // the interior sun, static shadow map, renderer settings, books or collisions.
  group.traverse(object => { object.castShadow = false; object.receiveShadow = false; });
  group.updateMatrixWorld(true);
  const budget = measureExterior(group);
  group.userData.exteriorBudget = budget;
  return {
    group, layout, budget,
    // Integration/removal owns only this module's resources; shared host assets
    // and the scene environment remain owned by the library.
    dispose() {
      group.removeFromParent();
      const geometries = new Set(), materials = new Set();
      group.traverse(object => {
        if (object.geometry) geometries.add(object.geometry);
        if (object.material) materials.add(object.material);
        if (object.isInstancedMesh) object.dispose();
      });
      geometries.forEach(geometry => geometry.dispose());
      materials.forEach(material => material.dispose());
      texture.dispose();
    },
  };
}
