import * as THREE from 'three';

// Two static books, two draw calls, 28 triangles and one 512×384 canvas atlas.
// The desk uses its existing paper; no architecture/collision is changed.
export function addReadingBooks(scene, anchors, content, makeCanvas = () => document.createElement('canvas')) {
  const books = anchors.filter(anchor => anchor.kind === 'book');
  const atlas = makeCanvas(); atlas.width = 256 * books.length; atlas.height = 384;
  const context = atlas.getContext('2d');
  const positions = [], uvs = [], normal = new THREE.Vector3(0, 1, 0), normals = [];
  const matrix = new THREE.Matrix4(), rotation = new THREE.Quaternion(), scale = new THREE.Vector3();
  const bodyGeometry = new THREE.BoxGeometry(1, 1, 1);
  const bodyMaterial = new THREE.MeshStandardMaterial({ roughness: 0.85, color: 0xffffff });
  const bodies = new THREE.InstancedMesh(bodyGeometry, bodyMaterial, books.length);
  const point = new THREE.Vector3();
  for (let i = 0; i < books.length; i++) {
    const anchor = books[i];
    const book = content[anchor.contentId];
    const fill = '#' + book.color.toString(16).padStart(6, '0');
    context.fillStyle = fill; context.fillRect(i * 256, 0, 256, 384);
    context.strokeStyle = '#c7a96c'; context.lineWidth = 2;
    context.strokeRect(i * 256 + 20, 24, 216, 336);
    context.fillStyle = '#f0dfbe'; context.textAlign = 'center';
    context.font = '30px Georgia';
    book.cover.forEach((line, n) => context.fillText(line, i * 256 + 128, 154 + n * 42));
    context.font = '15px Georgia'; context.fillText('JIPPITY', i * 256 + 128, 304);
    rotation.setFromAxisAngle(normal, anchor.yaw);
    matrix.compose(point.fromArray(anchor.position), rotation, scale.set(0.26, 0.038, 0.34));
    bodies.setMatrixAt(i, matrix); bodies.setColorAt(i, new THREE.Color(book.color));
    for (const [x, z, u, v] of [[-.13, .17, 0, 0], [.13, .17, 1, 0], [.13, -.17, 1, 1], [-.13, .17, 0, 0], [.13, -.17, 1, 1], [-.13, -.17, 0, 1]]) {
      point.set(x, 0.021, z).applyQuaternion(rotation).add(new THREE.Vector3().fromArray(anchor.position));
      positions.push(point.x, point.y, point.z); normals.push(0, 1, 0);
      uvs.push((i + u) / books.length, v);
    }
  }
  bodies.instanceMatrix.needsUpdate = true;
  if (bodies.instanceColor) bodies.instanceColor.needsUpdate = true;
  const coverGeometry = new THREE.BufferGeometry();
  coverGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  coverGeometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  coverGeometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  const texture = new THREE.CanvasTexture(atlas); texture.colorSpace = THREE.SRGBColorSpace;
  const coverMaterial = new THREE.MeshStandardMaterial({ map: texture, roughness: 0.9 });
  const covers = new THREE.Mesh(coverGeometry, coverMaterial);
  bodies.name = 'Jippity reading books'; covers.name = 'Jippity book covers';
  scene.add(bodies, covers);
  return {
    objects: [bodies, covers],
    budget: { books: books.length, drawCalls: 2, triangles: books.length * 14, texturePixels: atlas.width * atlas.height },
    dispose() {
      scene.remove(bodies, covers);
      bodies.dispose();
      bodyGeometry.dispose(); bodyMaterial.dispose(); coverGeometry.dispose(); coverMaterial.dispose(); texture.dispose();
    }
  };
}
