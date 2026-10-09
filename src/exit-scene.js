import * as THREE from 'three';
import { Builder } from './build.js';
import { EXIT_PORTAL } from './exit-anchor.js';
import { createExitDoor } from './exit-door.js';

// Modest joinery in the existing material vocabulary. Independent construction
// RNG keeps every existing wood UV, book, light and collision stream untouched.
export function addLibraryExit(scene, materials, anchor, content, makeCanvas = () => document.createElement('canvas')) {
  const group = new THREE.Group();
  group.name = 'Library exit';
  group.position.set(...anchor.position); group.rotation.y = anchor.rotation;
  const builder = new Builder(() => 0.37);
  const frame = builder.frame(0, 0, 0);
  // Keep even the plaque beyond the camera's 50 mm near plane at the closest
  // position allowed by the original east-wall collider (x = 7 - 0.28).
  frame.m.multiply(new THREE.Matrix4().makeScale(1, 1, 0.70));
  const { width: w, height: h } = anchor;
  const { oak, dark, brass } = materials;
  const leaf = new THREE.Group(); leaf.name = 'Hinged oak door leaf';
  // Axis on the rear edge, shared by the fixed brass barrels and the rigid leaf.
  // Scaling is baked into geometry, never into the rotating hinge transform.
  leaf.position.set(w / 2, 0, .00035);
  const leafBuilder = new Builder(() => .37);
  const leafFrame = leafBuilder.frame(-w / 2, 0, -.00035);
  leafFrame.m.multiply(new THREE.Matrix4().makeScale(1, 1, .70));
  let f = leafFrame;
  // Back is 55 mm inside the wall-mounted wainscot; all visible faces are clear.
  f.box(dark, w, h - 0.04, 0.055, 0, h / 2, 0.028);
  // Door leaf: two long recessed panels, a broad lower field, planted mouldings.
  for (const x of [-w / 2 + 0.065, w / 2 - 0.065]) f.box(oak, 0.13, h, 0.045, x, h / 2, 0.082);
  for (const [y, height] of [[0.11, 0.22], [0.84, 0.13], [h - 0.09, 0.18]]) f.box(oak, w - 0.26, height, 0.045, 0, y, 0.082);
  f.box(oak, 0.07, 1.33, 0.045, 0, 1.575, 0.082);
  for (const [x, y, pw, ph] of [[-0.26, 1.575, 0.42, 1.28], [0.26, 1.575, 0.42, 1.28], [0, 0.49, 0.96, 0.51]]) {
    f.box(oak, pw, ph, 0.018, x, y, 0.063);
    for (const side of [-1, 1]) {
      f.box(dark, 0.018, ph + 0.04, 0.014, x + side * (pw / 2 + 0.009), y, 0.081);
      f.box(dark, pw + 0.04, 0.018, 0.014, x, y + side * (ph / 2 + 0.009), 0.081);
    }
  }
  // Casing stands proud of leaf and paint, echoing the alcove's oak lintel.
  f = frame;
  for (const side of [-1, 1]) {
    f.box(dark, 0.13, h + 0.02, 0.09, side * (w / 2 + 0.085), (h + 0.02) / 2, 0.067);
    f.box(oak, 0.10, h + 0.02, 0.035, side * (w / 2 + 0.085), (h + 0.02) / 2, 0.129);
    f.box(oak, 0.16, 0.24, 0.13, side * (w / 2 + 0.085), 0.12, 0.083);
  }
  f.box(dark, w + 0.30, 0.18, 0.09, 0, h + 0.09, 0.067);
  f.box(oak, w + 0.33, 0.10, 0.035, 0, h + 0.11, 0.129);
  f.box(oak, w + 0.37, 0.045, 0.15, 0, h + 0.2025, 0.080);
  // Latch travels with the leaf; hinge barrels stay on the shared pivot axis.
  f = leafFrame;
  f.box(brass, 0.045, 0.19, 0.014, -0.47, 1.03, 0.115);
  f.cyl(brass, 0.018, 0.018, 0.025, -0.47, 1.06, 0.14, 8, Math.PI / 2);
  f.box(brass, 0.13, 0.025, 0.025, -0.425, 1.06, 0.158);
  f = frame;
  for (const y of [.32, 1.20, 2.10]) f.cyl(brass, .018, .018, .11, w / 2, y, .0005, 8);

  // Solid landing and inset jambs make the cut a real, supported threshold.
  const reveal = builder.frame(0, 0, 0), p = EXIT_PORTAL;
  for (const z of [p.z0 + .018, p.z1 - .018]) {
    reveal.box(oak, .012, p.height - .024, .476, z - anchor.position[2], (p.height - .024) / 2, anchor.position[0] - 7.25);
  }
  reveal.box(oak, p.z1 - p.z0 - .024, .012, .476, 0, p.height - .018, anchor.position[0] - 7.25);
  reveal.sbox(materials.stone, p.z1 - p.z0, .16, p.landingEnd - p.x0, 0, -.08, anchor.position[0] - (p.x0 + p.landingEnd) / 2);
  reveal.box(brass, p.z1 - p.z0 - .048, .012, .05, 0, .006, anchor.position[0] - 7.04);

  const plaque = makeCanvas();
  plaque.width = 512; plaque.height = 256;
  const ctx = plaque.getContext('2d');
  ctx.fillStyle = '#30271b'; ctx.fillRect(0, 0, 512, 256);
  ctx.strokeStyle = '#b99a60'; ctx.lineWidth = 4; ctx.strokeRect(12, 12, 488, 232);
  ctx.fillStyle = '#efdab0'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.font = '60px Georgia, serif'; ctx.fillText(content.plaque, 256, 102);
  ctx.font = '25px Georgia, serif'; ctx.fillText(content.plaqueSubtitle, 256, 172);
  const texture = new THREE.CanvasTexture(plaque);
  texture.colorSpace = THREE.SRGBColorSpace;
  const sign = new THREE.MeshStandardMaterial({ map: texture, roughness: 0.62,
    emissive: 0xedd6a0, emissiveMap: texture, emissiveIntensity: 0.18 });
  f.box(brass, 0.45, 0.23, 0.012, 0, 2.51, 0.172);
  f.plane(sign, 0.426, 0.206, 0, 2.51, 0.180);
  leafBuilder.finish(leaf); group.add(leaf); builder.finish(group);
  group.traverse(mesh => { if (mesh.isMesh) { mesh.castShadow = false; mesh.receiveShadow = true; } });
  scene.add(group);
  const door = createExitDoor({ anchor, portal: p, setAngle: angle => { leaf.rotation.y = angle; } });
  return { group, leaf, door, solids: builder.solids.map(s => ({
    x0: anchor.position[0] - s.z1, x1: anchor.position[0] - s.z0,
    y0: s.y0, y1: s.y1, z0: anchor.position[2] + s.x0, z1: anchor.position[2] + s.x1,
  })), materials: [sign], textures: [texture] };
}
