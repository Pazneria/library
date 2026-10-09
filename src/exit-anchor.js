// Existing southeast entrance bay: east wall between stair foot and south case.
// A closed door sits in front of the wainscot; the shell and solids stay intact.
export const EXIT_ANCHOR = Object.freeze({
  id: 'library-home-exit',
  // Core trim now sits proud of the wall: keep 12 mm behind this exit and
  // retain more than the camera's 50 mm near-plane distance at legal positions.
  position: Object.freeze([6.8963, 0, 7.75]),
  rotation: -Math.PI / 2,
  width: 1.30,
  height: 2.42,
  bounds: Object.freeze({ x0: 6.70, x1: 6.93, y0: 0.08, y1: 2.58, z0: 6.94, z1: 8.56 }),
  reach: 2.2,
});
