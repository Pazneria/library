const DEFAULT_SENSITIVITY = 0.0026; // radians per mouse count, independent of frame time
const PITCH_LIMIT = Math.PI / 2 - 0.02;

export function installFpsLook({ canvas, overlay, player, camera, releaseMovement, toast }) {
  const slider = overlay.querySelector('#look-sensitivity');
  const value = overlay.querySelector('#look-sensitivity-value');
  let sensitivity = DEFAULT_SENSITIVITY;
  let locked = false, dragging = false, pending = false, legacyRequest = false, captureWanted = false;
  let focused = document.hasFocus();
  let dragX = 0, dragY = 0, requestId = 0;

  function applyLook(dx, dy) {
    if (!Number.isFinite(dx) || !Number.isFinite(dy)) return;
    player.yaw -= dx * sensitivity;
    player.pitch = Math.max(-PITCH_LIMIT, Math.min(PITCH_LIMIT, player.pitch - dy * sensitivity));
    // Apply each input event directly. There is no target angle, interpolation or inertia.
    camera.rotation.set(player.pitch, player.yaw, 0);
  }

  function showDragFallback() {
    pending = captureWanted = false;
    overlay.classList.add('hide');
    toast('Mouse capture unavailable. Hold left mouse to look; Esc opens controls.');
  }

  async function requestLock() {
    if (locked || pending || !focused) return;
    if (!canvas.requestPointerLock) { showDragFallback(); return; }
    const id = ++requestId;
    pending = true;
    captureWanted = true;
    legacyRequest = false;
    try {
      const result = canvas.requestPointerLock({ unadjustedMovement: true });
      // Older browsers report success/failure solely through pointer-lock events.
      if (!result || typeof result.then !== 'function') { legacyRequest = true; return; }
      try {
        await result;
      } catch (error) {
        if (error.name !== 'NotSupportedError' || id !== requestId || !focused) throw error;
        await canvas.requestPointerLock();
      }
    } catch {
      if (id === requestId && focused) showDragFallback();
    } finally {
      if (id === requestId && !legacyRequest) pending = false;
    }
  }

  overlay.addEventListener('click', e => {
    if (!e.target.closest('[data-look-setting]')) requestLock();
  });
  canvas.addEventListener('mousedown', e => {
    if (e.button !== 0 || locked || !focused) return;
    dragging = true;
    dragX = e.clientX; dragY = e.clientY;
    requestLock();
  });
  addEventListener('mouseup', () => { dragging = false; });
  addEventListener('mousemove', e => {
    if (!focused || document.visibilityState !== 'visible') return;
    if (locked) {
      applyLook(e.movementX, e.movementY);
    } else if (dragging) {
      if (!(e.buttons & 1)) { dragging = false; return; }
      // Use stable client coordinates for unlocked drag, not pointer-lock deltas.
      applyLook(e.clientX - dragX, e.clientY - dragY);
      dragX = e.clientX; dragY = e.clientY;
    }
  });
  document.addEventListener('pointerlockchange', () => {
    locked = document.pointerLockElement === canvas;
    pending = legacyRequest = dragging = false;
    releaseMovement();
    if (locked && (!focused || !captureWanted)) { document.exitPointerLock(); locked = false; }
    if (!locked) captureWanted = false;
    overlay.classList.toggle('hide', locked);
  });
  document.addEventListener('pointerlockerror', () => {
    // Promise browsers retry raw input only for NotSupportedError in requestLock.
    if (legacyRequest && pending) { legacyRequest = false; showDragFallback(); }
  });

  function suspend() {
    focused = false;
    ++requestId;
    locked = pending = legacyRequest = dragging = captureWanted = false;
    releaseMovement();
    overlay.classList.remove('hide');
    if (document.pointerLockElement === canvas) document.exitPointerLock();
  }
  addEventListener('blur', suspend);
  addEventListener('focus', () => { focused = document.visibilityState === 'visible'; });
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState !== 'visible') suspend();
    else focused = document.hasFocus();
  });
  addEventListener('keydown', e => {
    if (e.code === 'Escape' && !locked) {
      ++requestId;
      dragging = pending = legacyRequest = captureWanted = false;
      releaseMovement();
      overlay.classList.remove('hide');
    }
  });
  slider.addEventListener('input', () => {
    const percent = Math.max(40, Math.min(220, Number(slider.value) || 100));
    sensitivity = DEFAULT_SENSITIVITY * percent / 100;
    value.textContent = `${percent}%`;
  });
}
