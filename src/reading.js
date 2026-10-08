import { isEditingTarget } from './interaction-core.js';

const HISTORY_KEY = 'jippityLibraryReader';

export function installReading({ document: doc, window: win, canvas, dialog, hint, content, getTarget, canInteract, look, setPaused, releaseMovement, returnFocus }) {
  const title = dialog.querySelector('#reader-title'), kicker = dialog.querySelector('#reader-kicker');
  const pages = dialog.querySelector('#reader-pages'), links = dialog.querySelector('#reader-links');
  const signature = dialog.querySelector('#reader-signature');
  const removers = [];
  let currentId = null, disposed = false, pendingBack = false, press = null;
  function on(target, event, listener) {
    target.addEventListener(event, listener);
    removers.push(() => target.removeEventListener(event, listener));
  }
  function render(id) {
    const book = content[id];
    kicker.textContent = book.kicker; title.textContent = book.title;
    pages.replaceChildren(); links.replaceChildren();
    for (const paragraph of book.paragraphs) {
      const p = doc.createElement('p'); p.textContent = paragraph; pages.append(p);
    }
    for (const link of book.links) {
      const a = doc.createElement('a'); a.textContent = link.label; a.href = link.href;
      a.target = '_blank'; a.rel = 'noopener noreferrer'; a.referrerPolicy = 'no-referrer';
      links.append(a);
    }
    links.hidden = !book.links.length; signature.textContent = book.signature;
  }
  function show(id, pushHistory = true) {
    if (disposed || pendingBack || !Object.hasOwn(content, id)) return false;
    const wasOpen = currentId !== null;
    currentId = id; releaseMovement(); look.pause(); setPaused(true); hint.hidden = true;
    render(id); doc.body.classList.add('reading-open');
    if (!dialog.open) dialog.showModal();
    dialog.scrollTop = 0; title.focus({ preventScroll: true });
    if (pushHistory) {
      const state = { ...win.history.state, [HISTORY_KEY]: id };
      if (wasOpen) win.history.replaceState(state, '', win.location.href);
      else win.history.pushState(state, '', win.location.href);
    }
    return true;
  }
  function hide() {
    if (currentId === null) return;
    currentId = null; if (dialog.open) dialog.close();
    doc.body.classList.remove('reading-open'); hint.hidden = true;
    releaseMovement(); look.resume(); setPaused(false);
    returnFocus?.focus({ preventScroll: true });
  }
  function close() {
    if (currentId === null) return;
    const ownsHistory = win.history.state?.[HISTORY_KEY] === currentId;
    hide();
    if (ownsHistory) { pendingBack = true; win.history.back(); }
  }
  function openNearby() {
    if (currentId !== null || disposed || pendingBack || !canInteract()) return false;
    const target = getTarget();
    return target ? show(target.contentId) : false;
  }
  on(win, 'keydown', event => {
    if (event.code !== 'KeyE' || event.repeat || currentId !== null || isEditingTarget(event.target)) return;
    if (openNearby()) event.preventDefault();
  });
  on(canvas, 'mousedown', event => {
    press = event.button === 0 ? { x: event.clientX, y: event.clientY, dragged: false } : null;
  });
  on(win, 'mousemove', event => {
    if (press && Math.hypot(event.clientX - press.x, event.clientY - press.y) > 5) press.dragged = true;
  });
  on(canvas, 'click', event => {
    const dragged = press?.dragged; press = null;
    if (!dragged && (event.button === undefined || event.button === 0)) openNearby();
  });
  on(hint, 'click', openNearby);
  on(dialog, 'cancel', event => { event.preventDefault(); close(); });
  on(dialog.querySelector('#reader-close'), 'click', close);
  on(dialog.querySelector('#reader-back'), 'click', close);
  on(dialog, 'close', close);
  on(win, 'popstate', event => {
    pendingBack = false;
    const id = event.state?.[HISTORY_KEY];
    if (id && Object.hasOwn(content, id)) show(id, false); else hide();
  });
  return {
    get isOpen() { return currentId !== null; },
    openNearby, close,
    updateHint() {
      const target = !disposed && currentId === null && canInteract() ? getTarget() : null;
      hint.hidden = !target;
      if (target) hint.textContent = `E — ${content[target.contentId].label}`;
    },
    dispose() {
      if (disposed) return;
      disposed = true;
      for (const remove of removers) remove();
      if (dialog.open) dialog.close();
      currentId = null; hint.hidden = true; doc.body.classList.remove('reading-open');
      if (win.history.state?.[HISTORY_KEY]) {
        const state = { ...win.history.state }; delete state[HISTORY_KEY];
        win.history.replaceState(state, '', win.location.href);
      }
      releaseMovement(); look.pause(); setPaused(true);
    }
  };
}
