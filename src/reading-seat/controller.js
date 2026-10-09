const point = (value, name) => {
  if (!Array.isArray(value) || value.length !== 3 || !value.every(Number.isFinite)) {
    throw new TypeError(name + ' must be a finite [x, y, z] point.');
  }
  return value.slice();
};
const ease = t => t * t * t * (10 + t * (-15 + 6 * t));
const angleDelta = value => Math.atan2(Math.sin(value), Math.cos(value));

// Camera/movement ownership only. The existing frame loop and look controller
// remain active; this module creates no timer, render loop, asset or storage.
export function createSeatController({player, camera, anchors, facingYaw, facingPitch = player.pitch,
  canStandAt, recoverStanding, releaseMovement, reducedMotion = () => false,
  standingEyeHeight = () => player.eye, onChange = () => {}, duration = .5}) {
  const seat = point(anchors.seat, 'Seat'), eye = point(anchors.eye, 'Eye');
  const exits = anchors.stand.map((p, i) => point(p, 'Stand ' + i));
  if (!exits.length || !Number.isFinite(facingYaw) || !Number.isFinite(facingPitch) || !(duration > 0 && duration <= 1)) {
    throw new TypeError('A facing yaw, bounded duration and at least one stand anchor are required.');
  }
  if (typeof recoverStanding !== 'function' || typeof canStandAt !== 'function') {
    throw new TypeError('Host collision validation and safe standing recovery are required.');
  }
  let state = 'walking', elapsed = 0, previousFeet = null, targetFeet = null;
  const from = [0, 0, 0], to = [0, 0, 0];
  let turnStart = 0, turnDelta = 0, pitchStart = 0, pitchDelta = 0;
  let lastYaw = player.yaw, lastPitch = player.pitch, turning = false;
  const change = next => { state = next; onChange(next); };
  const cameraPoint = () => camera.position.toArray();
  function start(next, destination) {
    const current = cameraPoint();
    for (let i = 0; i < 3; i++) { from[i] = current[i]; to[i] = destination[i]; }
    elapsed = 0; change(next);
    if (reducedMotion()) update(duration);
  }
  function safeExit() {
    return [...exits, ...(previousFeet ? [previousFeet] : [])].find(p => canStandAt(p));
  }
  function finishStanding() {
    player.pos.set(...targetFeet); player.smoothY = targetFeet[1];
    player.eyeCur = standingEyeHeight(); player.vy = 0;
    releaseMovement(); turning = false; previousFeet = null; change('walking');
  }
  function sit() {
    if (state !== 'walking') return false;
    previousFeet = player.pos.toArray();
    if (!safeExit()) { previousFeet = null; return false; }
    releaseMovement(); player.vy = 0; player.pos.set(...seat);
    turnStart = player.yaw; turnDelta = angleDelta(facingYaw - turnStart);
    pitchStart = player.pitch; pitchDelta = facingPitch - pitchStart;
    lastYaw = player.yaw; lastPitch = player.pitch; turning = true;
    start('settling', eye); return true;
  }
  function stand({immediate = false} = {}) {
    if (!['settling', 'seated'].includes(state)) return false;
    releaseMovement(); turning = false; targetFeet = safeExit();
    if (!targetFeet) {
      // The host restores its already validated entrance view. A moving door
      // cannot trap a visitor when every nearby authored exit becomes blocked.
      recoverStanding(); player.vy = 0; releaseMovement();
      previousFeet = null; change('walking'); return true;
    }
    player.pos.set(...targetFeet); player.vy = 0;
    const destination = [targetFeet[0], targetFeet[1] + standingEyeHeight(), targetFeet[2]];
    start('rising', destination);
    if (immediate && state === 'rising') update(duration);
    return true;
  }
  function update(dt) {
    if (!['settling', 'seated', 'rising'].includes(state)) return false;
    if (state === 'seated') {
      camera.position.set(...eye); camera.rotation.set(player.pitch, player.yaw, 0); return true;
    }
    if (!Number.isFinite(dt) || dt < 0) return false;
    // Actual mouse look cancels the authored turn while position settlement
    // continues. Never fight the visitor's existing yaw/pitch input.
    if (turning && (Math.abs(angleDelta(player.yaw - lastYaw)) > 1e-6 ||
      Math.abs(player.pitch - lastPitch) > 1e-6)) turning = false;
    elapsed = reducedMotion() ? duration : Math.min(duration, elapsed + dt);
    const t = ease(elapsed / duration);
    camera.position.set(from[0] + (to[0] - from[0]) * t,
      from[1] + (to[1] - from[1]) * t, from[2] + (to[2] - from[2]) * t);
    if (turning) { player.yaw = turnStart + turnDelta * t; player.pitch = pitchStart + pitchDelta * t; }
    lastYaw = player.yaw; lastPitch = player.pitch; camera.rotation.set(player.pitch, player.yaw, 0);
    if (elapsed === duration) {
      if (state === 'settling') { turning = false; change('seated'); }
      else finishStanding();
    }
    return true;
  }
  function cancel() {
    if (state === 'rising') { update(duration); return true; }
    return stand({immediate: true});
  }
  return {
    get state() { return state; },
    get ownsMovement() { return ['settling', 'seated', 'rising'].includes(state); },
    sit, stand, cancel, update,
    dispose() { if (state === 'disposed') return; cancel(); releaseMovement(); change('disposed'); }
  };
}
