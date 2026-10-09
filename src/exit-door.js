// Rigid hinge/collision math only; the host owns the single frame loop.
export function createExitDoor({ anchor, portal, setAngle = () => {} }) {
  const hingeX = anchor.position[0] - .00035;
  const hingeZ = anchor.position[2] + anchor.width / 2;
  const limit = Math.PI / 2, depth = .111, omega = 8;
  let angle = 0, velocity = 0, manual = false;
  function lowEnough(p) { return p.y >= -.15 && p.y < .35; }
  function inSweep(p, radius) {
    return lowEnough(p) && p.x + radius > hingeX && p.x - radius < hingeX + anchor.width &&
      p.z + radius > hingeZ - anchor.width && p.z - radius < hingeZ + .12;
  }
  function blocks(x, z, feet, height, radius) {
    if (feet >= anchor.height || feet + height <= 0) return false;
    const rotation = anchor.rotation - angle, c = Math.cos(rotation), s = Math.sin(rotation);
    const dx = x - hingeX, dz = z - hingeZ;
    const localX = dx * c - dz * s, localZ = dx * s + dz * c;
    const closestX = Math.max(-anchor.width, Math.min(0, localX));
    const closestZ = Math.max(0, Math.min(depth, localZ));
    return (localX - closestX) ** 2 + (localZ - closestZ) ** 2 < radius ** 2;
  }
  return {
    get angle() { return angle; },
    get passable() { return angle >= 1.48; },
    use() { manual = true; return angle >= 1.48; },
    update(dt, player, radius = .28) {
      const distance = Math.hypot(player.x - hingeX, player.z - anchor.position[2]);
      const near = lowEnough(player) && distance < 2.15;
      const occupied = inSweep(player, radius);
      if ((!lowEnough(player) || distance > 2.65) && !occupied) manual = false;
      const target = near || occupied || manual ? limit : 0;
      if (!Number.isFinite(dt) || dt <= 0) return;
      const previous = angle, touching = blocks(player.x, player.z, player.y, 1.75, radius);
      // Analytic critically damped motion: smooth start/reversal, no overshoot,
      // and identical angles for equivalent elapsed time at different rates.
      const delta = angle - target, c = velocity + omega * delta, decay = Math.exp(-omega * dt);
      angle = target + (delta + c * dt) * decay;
      velocity = (velocity - omega * c * dt) * decay;
      if (Math.abs(angle - target) < .0005 && Math.abs(velocity) < .004) { angle = target; velocity = 0; }
      angle = Math.max(0, Math.min(limit, angle));
      if (!touching && blocks(player.x, player.z, player.y, 1.75, radius)) {
        // Someone inspecting/backtracking in the sweep can stop the leaf.
        // Resume naturally when they move clear; never push it through them.
        angle = previous; velocity = 0;
      }
      setAngle(-angle);
    },
    blocks,
    crossed(from, to, radius = .28) {
      // A fast visitor can physically clear a moving leaf before its final
      // few degrees. Use that actual clearance so crossing is never missed.
      return angle > .01 && !blocks(to.x, to.z, to.y, 1.75, radius) && lowEnough(from) && lowEnough(to) &&
        from.x <= portal.threshold && to.x > portal.threshold &&
        Math.hypot(to.x - from.x, to.z - from.z) <= .45 &&
        to.z >= portal.z0 + radius && to.z <= portal.z1 - radius;
    },
  };
}
