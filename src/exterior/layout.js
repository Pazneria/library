// The view is west from the tall windows and reading bay, south from the gallery.
// All coordinates are in the library's world space: x east, z south, y up.
// This module owns decoration only. It does not provide navigable ground/solids.
export const EXTERIOR_SEED = 20261008;

export function seededRandom(seed) {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = Math.imul(state ^ (state >>> 15), state | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Preserve the production hillside's shape and its flat foundation terrace.
export function terrainHeight(x, z) {
  let h = -0.7;
  const w = Math.max(0, -x - 13);
  h -= 70 * (1 - Math.exp(-w / 140));
  h += (Math.sin(x * 0.011 + z * 0.017) * 10 + Math.sin(z * 0.029 + 1.3) * Math.cos(x * 0.013) * 12) * Math.min(1, w / 120);
  if (x < -420) h += Math.min(140, (-x - 420) * 0.22) * (0.75 + 0.18 * Math.sin(z * 0.009 + 0.5) + 0.07 * Math.sin(z * 0.043));
  if (x > 8) h += (x - 8) * 0.35;
  if (Math.abs(z) > 30 && x > -60) h += (Math.abs(z) - 30) * 0.12;
  return h;
}

// Deliberately wider than the shell/alcove. Never populate the building or entry.
export function inBuildingClearance(x, z, radius = 0) {
  return x + radius > -13 && x - radius < 9 && z + radius > -12 && z - radius < 11;
}

// Open meadow through the reading bay and the two long west windows.
// Trees frame this wedge; grass and low stones may sit beneath it.
export function inWestViewCorridor(x, z, radius = 0) {
  const halfWidth = 10 + Math.max(0, -x - 13) * 0.15;
  return x < -13 && x > -125 && Math.abs(z - 3) < halfWidth + radius;
}

export function makeLayout() {
  const random = seededRandom(EXTERIOR_SEED);
  const trees = [];
  // Individually placed framing trees, with a gap in front of every west window.
  const near = [
    [-22, -18, 12, 'oak'], [-34, -29, 15, 'oak'],
    [-51, -24, 14, 'oak'], [-25, 26, 13, 'oak'],
    [-39, 38, 16, 'oak'], [-56, 32, 14, 'oak'],
    [-20, 44, 12, 'birch'], [12, 43, 13, 'birch'],
    [-27, 63, 16, 'birch'], [-61, -43, 15, 'birch'],
  ];
  for (const [x, z, height, species] of near) {
    trees.push({ x, z, height, species, tier: 'near', yaw: random() * Math.PI * 2, width: 0.9 + random() * 0.2 });
  }
  // Small woodland islands, not a uniformly random plantation. Each island is a
  // part of a north/south distance batch with bounds for frustum culling.
  const groves = [
    [-91, -65, 34, 29, 20], [-119, 67, 32, 35, 20],
    [-202, -92, 68, 49, 32], [-211, 96, 74, 49, 32],
    [-376, -190, 110, 85, 54], [-403, 155, 125, 93, 60],
    [-615, -95, 99, 100, 44], [-643, 235, 100, 85, 36],
    // A low grove on the valley floor gives the open central view a focal layer.
    [-244, 3, 44, 22, 22],
  ];
  groves.forEach(([cx, cz, rx, rz, count], grove) => {
    for (let i = 0; i < count; i++) {
      const angle = random() * Math.PI * 2, radius = Math.sqrt(random());
      const x = cx + Math.cos(angle) * radius * rx;
      const z = cz + Math.sin(angle) * radius * rz;
      const height = 8 + random() * 9;
      if (inWestViewCorridor(x, z, height * 0.34)) continue;
      trees.push({ x, z, height, species: 'woodland', tier: grove < 4 || grove === 8 ? 'middle' : 'far', grove, yaw: random() * Math.PI * 2, width: 0.8 + random() * 0.4 });
    }
  });
  const grass = [], shrubs = [], stones = [];
  // Low, clustered verge planting below the sills. The fine detail ends at 42 m.
  const beds = [
    [-16.8, -5.6, 3.0, 6.2, 80], [-19.2, 13.8, 4.8, 4.7, 72],
    [-31, 18.4, 7.0, 4.3, 64], [-1.5, 18.4, 8.0, 4.1, 64],
  ];
  beds.forEach(([cx, cz, rx, rz, count], bed) => {
    for (let i = 0; i < count; i++) {
      const angle = random() * Math.PI * 2, radial = Math.sqrt(random());
      const x = cx + Math.cos(angle) * radial * rx;
      const z = cz + Math.sin(angle) * radial * rz;
      if (inBuildingClearance(x, z, 0.5)) continue;
      grass.push({ x, z, height: 0.24 + random() * 0.36, width: 0.6 + random() * 0.6, yaw: random() * Math.PI * 2, bed });
    }
  });
  for (const [x, z, scale] of [
    [-15.1, -10.5, 0.8], [-17.3, -12, 1.1], [-20.2, -13.8, 1.3],
    [-16.5, 13.2, 0.9], [-18.1, 15.2, 1.1], [-21.2, 17, 1.4],
    [-29.2, 22.2, 1.3], [-33, 24.4, 1.7], [-37, 26.1, 1.5],
    [-8.5, 19.8, 1.1], [-5.4, 21.8, 1.2], [5.7, 21, 1.0],
  ]) shrubs.push({ x, z, height: scale * 0.6, width: scale, yaw: random() * Math.PI * 2 });
  for (const [x, z, width] of [
    [-14.2, -8, 0.65], [-16.4, -9.1, 1.1], [-18.6, -10.6, 0.8],
    [-16, 13.4, 0.7], [-20, 15.3, 1.3], [-21.7, 16, 0.85],
    [-29, 23, 1.8], [-32.2, 24, 1.1], [-34, 25, 1.5],
    [-47, -17, 2.0], [-50, -18.1, 1.1], [-43, 27, 1.8],
  ]) stones.push({ x, z, height: width * 0.38, width, yaw: random() * Math.PI * 2 });
  return { trees, grass, shrubs, stones };
}
