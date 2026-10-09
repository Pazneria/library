const DEFAULT_SENSITIVITY = 0.0026;
const PITCH_LIMIT = Math.PI / 2 - 0.02;

export function installFpsLook({ canvas, overlay, menuButton, player, camera, releaseMovement, toast,
  isInputBlocked = () => false, setMenuPaused = () => {} }) {
  const slider = overlay.querySelector('#look-sensitivity');
  const value = overlay.querySelector('#look-sensitivity-value');
  const resumeButton = overlay.querySelector('[data-resume-look]');
  let sensitivity = DEFAULT_SENSITIVITY;
  let locked = false, dragging = false, pending = false, legacyRequest = false, captureWanted = false;
  let focused = document.hasFocus(), fallback = false, consumeClick = false;
  let dragX = 0, dragY = 0, requestId = 0;
  let suspended = false, disposed = false;
  const removers = [];
  function on(target, type, listener, options) {
    target.addEventListener(type, listener, options);
    removers.push(() => target.removeEventListener(type, listener, options));
  }
  function usable() { return !disposed && !suspended && focused && !overlay.open && !isInputBlocked(); }
  function focusScene() {
    canvas.focus({ preventScroll: true });
    focused = document.visibilityState === 'visible' && document.hasFocus();
  }
  function applyLook(dx, dy) {
    if (!Number.isFinite(dx) || !Number.isFinite(dy)) return;
    // Mouse counts apply immediately, independently of simulation/render cadence.
    player.yaw -= dx * sensitivity;
    player.pitch = Math.max(-PITCH_LIMIT, Math.min(PITCH_LIMIT, player.pitch - dy * sensitivity));
    camera.rotation.set(player.pitch, player.yaw, 0);
  }
  function cancelCapture() {
    ++requestId;
    locked = pending = legacyRequest = dragging = captureWanted = false;
    releaseMovement();
    if (document.pointerLockElement === canvas) document.exitPointerLock();
  }
  function closeMenu() {
    if (overlay.open) overlay.close();
    setMenuPaused(false);
    if (!disposed && !suspended) focusScene();
  }
  function openMenu() {
    if (disposed || suspended || overlay.open || isInputBlocked()) return;
    cancelCapture();
    overlay.showModal(); setMenuPaused(true);
    resumeButton.focus({ preventScroll: true });
    return true;
  }
  function showDragFallback() {
    pending = captureWanted = false;
    if (!usable()) return;
    fallback = true;
    toast('Hold left mouse to look. Esc opens controls.');
  }
  async function requestLock() {
    if (locked || pending || !usable()) return;
    if (!canvas.requestPointerLock) { showDragFallback(); return; }
    const id = ++requestId;
    pending = captureWanted = true; legacyRequest = false;
    try {
      const result = canvas.requestPointerLock({ unadjustedMovement: true });
      if (!result || typeof result.then !== 'function') { legacyRequest = true; return; }
      try { await result; }
      catch (error) {
        if (error.name !== 'NotSupportedError' || id !== requestId || !usable()) throw error;
        await canvas.requestPointerLock();
      }
    } catch {
      if (id === requestId && usable()) showDragFallback();
    } finally {
      if (id === requestId && !legacyRequest) pending = false;
    }
  }
  on(menuButton, 'click', openMenu);
  on(resumeButton, 'click', () => { closeMenu(); requestLock(); });
  on(overlay, 'cancel', event => { event.preventDefault(); closeMenu(); });
  on(overlay, 'close', () => { setMenuPaused(false); if (!disposed && !suspended) focusScene(); });
  on(canvas, 'mousedown', event => {
    if (event.button !== 0 || disposed || suspended || overlay.open || isInputBlocked()) return;
    focusScene();
    if (locked || !usable()) return;
    consumeClick = !fallback;
    dragging = true; dragX = event.clientX; dragY = event.clientY;
    requestLock();
  });
  // The first scene gesture acquires focus/capture; it cannot also open a book.
  on(canvas, 'click', event => {
    if (consumeClick) { consumeClick = false; event.stopImmediatePropagation(); }
  }, true);
  on(canvas, 'keydown', event => {
    if (event.code === 'Enter' && !event.repeat && usable()) { requestLock(); event.preventDefault(); }
  });
  on(globalThis, 'mouseup', () => { dragging = false; });
  on(globalThis, 'mousemove', event => {
    if (!usable() || document.visibilityState !== 'visible') return;
    if (locked) applyLook(event.movementX, event.movementY);
    else if (dragging) {
      if (!(event.buttons & 1)) { dragging = false; return; }
      applyLook(event.clientX - dragX, event.clientY - dragY);
      dragX = event.clientX; dragY = event.clientY;
    }
  });
  on(document, 'pointerlockchange', () => {
    const wasLocked = locked;
    locked = document.pointerLockElement === canvas;
    pending = legacyRequest = dragging = false;
    if (locked && (!usable() || !captureWanted)) {
      document.exitPointerLock(); locked = false;
    }
    if (locked) { fallback = false; focusScene(); }
    else {
      captureWanted = false;
      if (wasLocked) releaseMovement();
    }
  });
  on(document, 'pointerlockerror', () => {
    if (legacyRequest && pending) { legacyRequest = false; showDragFallback(); }
  });
  function suspend() { focused = false; fallback = false; cancelCapture(); }
  on(globalThis, 'blur', suspend);
  on(globalThis, 'focus', () => { focused = document.visibilityState === 'visible'; });
  on(document, 'visibilitychange', () => {
    if (document.visibilityState !== 'visible') suspend();
    else focused = document.hasFocus();
  });
  on(globalThis, 'keydown', event => {
    if (event.code === 'Escape' && !event.repeat && !overlay.open && openMenu()) event.preventDefault();
  });
  on(slider, 'input', () => {
    const percent = Math.max(40, Math.min(220, Number(slider.value) || 100));
    sensitivity = DEFAULT_SENSITIVITY * percent / 100;
    value.textContent = `${percent}%`;
  });
  return {
    get menuOpen() { return overlay.open; },
    pause() { suspended = true; suspend(); },
    resume() {
      if (disposed) return;
      suspended = false; focused = document.visibilityState === 'visible' && document.hasFocus();
    },
    dispose() {
      if (disposed) return;
      disposed = true; suspended = true; suspend();
      for (const remove of removers) remove();
      if (overlay.open) overlay.close();
    }
  };
}
