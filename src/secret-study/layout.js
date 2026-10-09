// Public set. The diagnostic URL switch is not access control.
export const STUDY = Object.freeze({
  cut: { x0: 2.37, x1: 4.17, y0: 0, y1: 3.56, z0: -10.5, z1: -9.50 },
  hinge: { x: 2.37, z: -10 }, width: 1.70, depth: .49, height: 3.5,
  room: { x0: .9, x1: 6.65, z0: -17.3, z1: -11.65, height: 3.8 },
  entry: [3.3, 0, -8.55], inside: [3.65, 0, -12.75],
  latch: { x0: 3.75, x1: 4.13, y0: 1.12, y1: 1.64, z0: -9.61, z1: -9.45 },
  returnPull: { x0: 4.22, x1: 4.40, y0: 1.02, y1: 1.58, z0: -11.76, z1: -11.66 },
});
export function studyEnabled(search = '') { return new URLSearchParams(search).get('jippityStudy') !== '0'; }
export function inStudy(p) { return p.y < 3.8 && p.z < -10.55 && p.x > .6 && p.x < 6.9; }

// Rear corner pivot: the slightly inset leaf clears the right jamb throughout its arc.
export function leafPose(angle) { return { x: STUDY.hinge.x, z: STUDY.hinge.z, angle }; }
export function leafBlocks(angle, x, z, feet = 0, height = 1.75, radius = .28) {
  if (feet >= STUDY.height || feet + height <= 0) return false;
  const c = Math.cos(angle), s = Math.sin(angle), dx = x - STUDY.hinge.x, dz = z - STUDY.hinge.z;
  const u = dx * c - dz * s, v = dx * s + dz * c;
  const cu = Math.max(0, Math.min(STUDY.width, u)), cv = Math.max(0, Math.min(STUDY.depth, v));
  if ((u-cu)**2 + (v-cv)**2 < radius**2) return true;
  // The pulled latch volume protrudes beyond the case front, above knee height.
  if(feet<1.68&&feet+height>1.31) {
    const lu=Math.max(1.45,Math.min(1.55,u)),lv=Math.max(.39,Math.min(.64,v));
    return (u-lu)**2+(v-lv)**2<radius**2;
  }
  return false;
}
export function createStudyDoor({setAngle = () => {}, setLatch = () => {}, reducedMotion = () => false} = {}) {
  let angle = 0, elapsed = 0, start = 0, target = 0, requested = false, latch = 0;
  const maximum = Math.PI / 2, duration = 1.65, delay = .22;
  const ease = t => t*t*t*(10+t*(-15+6*t));
  return {
    get angle() { return angle; }, get open() { return angle > 1.54; },
    get moving() { return Math.abs(angle-target) > 1e-6 || requested && latch < 1; },
    get requested() { return requested; },
    openDoor() { if (!requested) { requested = true; start = angle; target = maximum; elapsed = 0; } },
    closeDoor() { if (requested) { requested = false; start = angle; target = 0; elapsed = 0; } },
    blocks(x,z,feet,height,radius) { return leafBlocks(angle,x,z,feet,height,radius); },
    update(dt, player, radius = .28) {
      if (!Number.isFinite(dt) || dt <= 0) return false;
      const old = angle, before = elapsed;
      elapsed += Math.min(dt, .05);
      latch = requested ? Math.min(1, elapsed / delay) : Math.max(0, 1-elapsed/duration);
      let t = Math.min(1, Math.max(0, (elapsed-(requested ? delay : 0))/duration));
      if (reducedMotion()) t = 1;
      const next = start + (target-start)*ease(t);
      // Check the swept arc, including reduced-motion jumps. Never move through a visitor.
      const steps = Math.max(1, Math.ceil(Math.abs(next-angle)/.02));
      let obstructed = false;
      for (let i=1;i<=steps;i++) if (leafBlocks(angle+(next-angle)*i/steps,player.x,player.z,player.y,1.75,radius)) { obstructed=true; break; }
      if (obstructed) { elapsed=before; } else angle=next;
      setAngle(angle); setLatch(latch);
      return old !== angle;
    },
  };
}
