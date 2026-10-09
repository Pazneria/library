// Bounded, allocation-light collision-box picking; no scan of decorative books.
const AXES = ['x', 'y', 'z'];

export function rayBoxDistance(origin, direction, box, limit = Infinity) {
  let near = 0, far = limit;
  if (!Number.isFinite(Math.hypot(direction.x, direction.y, direction.z)) || Math.hypot(direction.x, direction.y, direction.z) < 1e-10) return null;
  for (const axis of AXES) {
    const p = origin[axis], d = direction[axis], low = box[axis + '0'], high = box[axis + '1'];
    if (!Number.isFinite(p) || !Number.isFinite(d) || !Number.isFinite(low) || !Number.isFinite(high)) return null;
    if (Math.abs(d) < 1e-10) {
      if (p < low || p > high) return null;
    } else {
      const a = (low - p) / d, b = (high - p) / d;
      near = Math.max(near, Math.min(a, b));
      far = Math.min(far, Math.max(a, b));
      if (near > far) return null;
    }
  }
  return far >= 0 ? near : null;
}

export function pickAnchor(origin, direction, anchors, solids, reach = 2.2) {
  let selected = null, distance = reach;
  for (const anchor of anchors) {
    const hit = rayBoxDistance(origin, direction, anchor.bounds, distance);
    if (hit !== null && hit <= distance) { selected = anchor; distance = hit; }
  }
  if (!selected) return null;
  // Authored furniture collision boxes extend slightly past the visible top.
  // This 25 mm tolerance permits the existing desk paper, not wall traversal.
  for (const solid of solids) {
    const hit = rayBoxDistance(origin, direction, solid, distance);
    if (hit !== null && hit + 0.025 < distance) return null;
  }
  return selected;
}

export function isEditingTarget(target) {
  return Boolean(target?.closest?.('input, textarea, select, button, a, [contenteditable], [role="textbox"]'));
}
