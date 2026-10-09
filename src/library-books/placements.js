// Metres: x east, y up, z south. Origin is the frozen asset's lower-board centre.
// Full table volumes keep their previous anchors; the small notebook uses a
// verified gap on the north wall's third shelf. No decorative instance moves.
export const BOOK_PLACEMENTS = Object.freeze([
  { id: 'table-drums', contentId: 'drums', position: [-.87,.782,2.35], yaw: -.18, surface: 'table' },
  { id: 'table-welcome', contentId: 'welcome', position: [-.35,.782,3.53], yaw: .12, surface: 'table' },
  { id: 'north-shelf-notebook', contentId: 'notebook', position: [1.54,1.330682,-9.782], scale: .62, surface: 'shelf', location: 'On the north shelf',
    // Movement uses a whole-case collision volume. Permit only a ray through
    // this measured open shelf aperture, retaining every other occluder.
    support: { bounds: {x0:-7,x1:7,y0:-.025,y1:3.475,z0:-10,z1:-9.6},
      aperture: {x0:1.42,x1:2.313333,y0:1.330682,y1:1.69,z0:-9.601,z1:-9.599} } }
]);
export const MAX_PLACED_BOOKS = 4;
