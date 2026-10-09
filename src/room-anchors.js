// Hillside-specific adapter. Replace this file when a different building wins;
// stable contentId values and the reader do not depend on this room's geometry.
export const ROOM_ANCHORS = Object.freeze([
  {
    id: 'table-welcome', contentId: 'welcome',
    position: [-0.35, 0.808, 3.53], yaw: 0.12, kind: 'book',
    bounds: { x0: -0.53, x1: -0.17, y0: 0.783, y1: 0.84, z0: 3.32, z1: 3.74 }
  },
  {
    id: 'table-drums', contentId: 'drums',
    position: [-0.87, 0.808, 2.35], yaw: -0.18, kind: 'book',
    bounds: { x0: -1.06, x1: -0.68, y0: 0.783, y1: 0.84, z0: 2.13, z1: 2.57 }
  },
  {
    id: 'gallery-writing-desk', contentId: 'desk',
    kind: 'existing-paper', position: [-5.55, 4.999, -8.75],
    bounds: { x0: -5.76, x1: -5.34, y0: 4.98, y1: 5.025, z0: -8.94, z1: -8.56 }
  }
]);

export const INTERACTION_REACH = 2.2;
