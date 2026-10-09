// Progress reflects the host's actual startup stages. No percentage or timer simulation.
export function createLoadingScreen({ document: doc, window: win, onCancel = () => {} }) {
  const screen = doc.getElementById('loading'), status = doc.getElementById('loading-status');
  const retry = doc.getElementById('loading-retry'), error = doc.getElementById('loading-error');
  win.__libraryBootErrorCleanup?.();
  const handoff = win.pazneriaRoomHandoff;
  let state = 'loading', pending = null, fadeTimer = null, disposed = false, cancelled = false;
  let revealObserver = null, reveal = null;
  function stopReveal() {
    revealObserver?.disconnect(); revealObserver = null; reveal = null;
  }
  function finishReveal() {
    if (!reveal || handoff?.active) return;
    const callback = reveal;
    stopReveal();
    if (doc.visibilityState === 'visible' && doc.hasFocus()) {
      doc.getElementById('c')?.focus({ preventScroll: true });
    }
    callback();
  }
  const abort = () => Object.assign(new Error('Library loading cancelled'), { name: 'AbortError' });
  function clearPending() {
    if (!pending) return;
    win.cancelAnimationFrame(pending.frame);
    if (pending.timer !== null) win.clearTimeout(pending.timer);
    pending.reject(abort()); pending = null;
  }
  function finishFade() {
    if (fadeTimer !== null) win.clearTimeout(fadeTimer);
    fadeTimer = null;
    if (state === 'ready') screen.hidden = true;
  }
  function cancel() {
    if (cancelled || disposed || state !== 'loading') return;
    cancelled = true; state = 'cancelled'; clearPending(); stopReveal(); handoff?.fail(); onCancel();
  }
  function pageHide() { stopReveal(); if (state === 'loading') cancel(); else finishFade(); }
  function pageShow(event) { if (cancelled && event.persisted) win.location.reload(); }
  function fail() {
    if (disposed || cancelled) return;
    state = 'error'; clearPending(); stopReveal(); handoff?.fail(); finishFade();
    screen.hidden = false; screen.classList.remove('is-ready'); screen.dataset.state = 'error';
    screen.setAttribute('aria-busy', 'false'); status.textContent = 'Library could not load.';
    error.hidden = retry.hidden = false;
  }
  const retryLoad = () => win.location.reload();
  retry.addEventListener('click', retryLoad);
  win.addEventListener('pagehide', pageHide); win.addEventListener('pageshow', pageShow);
  screen.addEventListener('transitionend', finishFade);
  return {
    get cancelled() { return cancelled; },
    get state() { return state; },
    async stage(index, label) {
      if (disposed || cancelled || state !== 'loading') throw abort();
      if (!Number.isInteger(index) || index < 0 || index > 3) throw new RangeError('Invalid loading stage');
      screen.dataset.stage = String(index); status.textContent = label;
      // Let this real stage paint before the next synchronous construction batch.
      await new Promise((resolve, reject) => {
        pending = { frame: null, timer: null, reject };
        pending.frame = win.requestAnimationFrame(() => {
          pending.timer = win.setTimeout(() => { pending = null; resolve(); }, 0);
        });
      });
      if (disposed || cancelled) throw abort();
    },
    ready(onReveal = () => {}) {
      if (disposed || cancelled || state !== 'loading') return;
      state = 'ready'; screen.dataset.stage = '4'; screen.dataset.state = 'ready';
      screen.setAttribute('aria-busy', 'false'); status.textContent = 'Ready';
      win.__libraryBootErrorCleanup?.();
      if (handoff?.active) {
        // The host has drawn the matching entrance. Keep input paused until the
        // canonical cover is removed, including its reduced-motion path.
        screen.hidden = true;
        reveal = onReveal;
        revealObserver = new win.MutationObserver(finishReveal);
        revealObserver.observe(doc.documentElement, { attributes: true, attributeFilter: ['data-room-handoff'] });
        handoff.ready();
        finishReveal();
        return;
      }
      onReveal();
      screen.classList.add('is-ready');
      if (win.matchMedia?.('(prefers-reduced-motion: reduce)').matches) finishFade();
      else fadeTimer = win.setTimeout(finishFade, 240);
    },
    fail,
    dispose() {
      if (disposed) return;
      disposed = true; clearPending(); stopReveal(); handoff?.fail(); finishFade(); win.__libraryBootErrorCleanup?.();
      retry.removeEventListener('click', retryLoad);
      win.removeEventListener('pagehide', pageHide); win.removeEventListener('pageshow', pageShow);
      screen.removeEventListener('transitionend', finishFade);
    }
  };
}
