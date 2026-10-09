import * as THREE from 'three';
import { softBox, tube, roundedLoop, leg, wing } from './geometry.js';
import { makeChairMaterials } from './materials.js';

// One material set per host Builder. The host's normal scene traversal owns
// disposal after B.finish(scene); the WeakMap does not keep a closed room alive.
const palettes = new WeakMap();
export const READING_CHAIR_DESIGN = Object.freeze({
  name: 'Hearthside wingback', version: 1,
  footprint: [0.9, 0.86], seatHeight: .532, backHeight: 1.241,
  legacyRandomDraws: 14,
  placements: [
    { name: 'fireplace-west', position: [-2.15, 0, 7.4], rotationY: Math.PI / 2 - .2, finish: 'tobacco' },
    { name: 'fireplace-east', position: [2.15, 0, 7.4], rotationY: -Math.PI / 2 + .25, finish: 'oxblood' },
    { name: 'alcove-north', position: [-9.3, 0, 3.4], rotationY: -Math.PI / 2 + .55, finish: 'oxblood' },
    { name: 'alcove-south', position: [-9.3, 0, 6.35], rotationY: -Math.PI / 2 - .55, finish: 'tobacco' },
    { name: 'gallery-east', position: [6, 4.2, -3.6], rotationY: -Math.PI / 2, finish: 'tobacco' }
  ]
});

/** Add visual geometry only, in the host chair's existing local frame (+Z front).
 * Colliders and advancement of the host RNG stay in the tiny integration hook.
 * No shared host material is read or changed. Geometry is generated once.
 */
export function addReadingArmchair(f, finish = 'oxblood') {
  if (!['oxblood', 'tobacco'].includes(finish)) throw new Error(`Unknown reading chair finish: ${finish}`);
  let M = palettes.get(f.b);
  if (!M) {
    M = makeChairMaterials(); palettes.set(f.b, M);
    for (const material of Object.values(M)) material.addEventListener('dispose', () => palettes.delete(f.b));
  }
  const leather = M[finish];
  const add = (mat, geo, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) => f.geo(mat, geo, x, y, z, rx, ry, rz);
  const soft = (mat, size, r, p, options = {}, rot = [0, 0, 0]) => add(mat, softBox(...size, r, options), ...p, ...rot);
  const pipe = (mat, points, r, segments = 28, closed = false) => add(mat, tube(points, r, segments, 6, closed));

  // Visible, legible structure: a full walnut seat frame on gently swept feet.
  // Seat rails meet the leg shoulders. Small tenon plugs read at close distance.
  for (const s of [-1, 1]) {
    add(M.wood, leg(s)); add(M.wood, leg(s, true));
    soft(M.wood, [.06, .102, .635], .008, [s * .315, .339, -.005], { grain: true });
  }
  soft(M.wood, [.63, .11, .065], .009, [0, .34, .286], { grain: true });
  soft(M.wood, [.63, .092, .055], .007, [0, .335, -.304], { grain: true });
  // An upholstered deck sits down into the rails, leaving honest wood reveal.
  soft(leather, [.625, .092, .60], .023, [0, .39, -.005]);
  soft(leather, [.619, .128, .564], .037, [0, .468, .023], { bulge: .011, dish: .014 });
  pipe(leather, roundedLoop(.620, .565, .482, .023, .037), .0033, 48, true);
  // A second, quieter welt is on the cushion boxing; it is not a floating halo.
  pipe(leather, roundedLoop(.611, .556, .428, .023, .037), .0024, 48, true);
  // Short real stitches across the front boxing, sunk close to the seam.
  for (let i = 0; i < 31; i++) {
    const x = -.259 + i * .0172;
    const g = new THREE.CylinderGeometry(.00085, .00085, .006, 4);
    add(M.thread, g, x, .462, .3054, 0, 0, Math.PI / 2);
  }

  // Reclining back with a broad pillow face and continuous curved timber crest.
  soft(leather, [.674, .72, .112], .046, [0, .854, -.321], {}, [-.10, 0, 0]);
  soft(leather, [.559, .555, .075], .035, [0, .877, -.251], {}, [-.10, 0, 0]);
  // Soft lumbar support bridges the seat/back meeting without tufting clutter.
  soft(leather, [.526, .116, .099], .043, [0, .589, -.228], {}, [-.10, 0, 0]);
  const backWelt = [
    [-.242, .629, -.184], [-.270, .671, -.184], [-.270, 1.082, -.226],
    [-.229, 1.143, -.237], [0, 1.151, -.238], [.229, 1.143, -.237],
    [.270, 1.082, -.226], [.270, .671, -.184], [.242, .629, -.184], [0, .619, -.184]
  ];
  pipe(leather, backWelt, .0028, 64, true);
  const crest = [[-.322, .365, -.339], [-.342, .75, -.36], [-.341, 1.14, -.392],
    [-.302, 1.203, -.394], [-.18, 1.221, -.394], [0, 1.227, -.394],
    [.18, 1.221, -.394], [.302, 1.203, -.394], [.341, 1.14, -.392], [.342, .75, -.36], [.322, .365, -.339]];
  pipe(M.wood, crest, .014, 72);

  for (const s of [-1, 1]) {
    add(leather, wing(s));
    // Under-arm negative space makes the chair light enough for the alcove.
    soft(M.wood, [.039, .316, .052], .007, [s * .355, .523, .251], { grain: true }, [0, 0, s * -.038]);
    soft(M.wood, [.040, .328, .047], .007, [s * .347, .525, -.208], { grain: true }, [-.08, 0, 0]);
    // Arms broaden gently under the hand, with a proper rounded upholstered nose.
    soft(M.wood, [.112, .048, .586], .019, [s * .363, .684, .012], { grain: true }, [.035, 0, 0]);
    soft(leather, [.131, .10, .589], .043, [s * .363, .743, .018], {}, [.035, 0, 0]);
    const armWelt = roundedLoop(.132, .590, .743, .018, .043).map(([x, y, z]) => [x + s * .363, y - (z - .018) * .035, z]);
    pipe(leather, armWelt, .0026, 40, true);
    // Wing edge welt follows the front rolled edge instead of cutting across it.
    pipe(leather, [[s * .318, .751, -.123], [s * .345, .843, -.063],
      [s * .365, 1.021, -.108], [s * .341, 1.18, -.208], [s * .314, 1.224, -.287]], .003, 32);
    // Restrained old brass nails on timber-backed lower side upholstery only.
    for (let j = 0; j < 7; j++) {
      const g = new THREE.SphereGeometry(.0035, 6, 4); g.scale(.42, 1, 1);
      add(M.brass, g, s * .314, .398, -.225 + j * .071);
    }
    for (const z of [.26, -.28]) {
      const plug = new THREE.CylinderGeometry(.0045, .0045, .0015, 8);
      add(M.wood, plug, s * .346, .34, z, 0, 0, Math.PI / 2);
    }
  }
}
