import { isEditingTarget } from './interaction-core.js';

// Functional navigation is independent of the building and its artwork.
export function installLibraryExit({ document: doc, window: win, canvas, controls, readerFooter,
  content, getTarget, canInteract, beforeLeave, useDoor = () => true, getPrompt = () => content.prompt }) {
  let disposed = false, leaving = false, press = null;
  const removers = [], elements = [];
  const previousDescription = canvas.getAttribute('aria-describedby');
  function on(target, event, listener, options) {
    target.addEventListener(event, listener, options);
    removers.push(() => target.removeEventListener(event, listener, options));
  }
  function leave(event) {
    event?.preventDefault(); event?.stopPropagation();
    if (leaving || disposed) return false;
    leaving = true;
    // The host stops frames/input and releases scene resources before same-tab
    // navigation. location.assign preserves normal browser Back navigation.
    try { beforeLeave(); }
    finally {
      // Back may restore a disposed document from the browser page cache.
      // Rebuild it on restoration; mouse capture still requires a fresh gesture.
      win.addEventListener('pageshow', event => { if (event.persisted) win.location.reload(); }, { once: true });
      win.location.assign(content.href);
    }
    return true;
  }
  function use(event) {
    event?.preventDefault(); event?.stopPropagation();
    if (leaving || disposed) return;
    // Opening is reversible. It never queues a delayed navigation; another
    // deliberate use or an outward threshold crossing is required to leave.
    if (useDoor()) leave();
  }
  function link(parent, className) {
    const a = doc.createElement('a');
    a.href = content.href; a.textContent = content.label;
    a.className = `library-exit-link ${className}`;
    a.setAttribute('aria-keyshortcuts', content.shortcut);
    // Click is handled before the controls' capture listener can see it.
    on(a, 'click', leave);
    parent.append(a); elements.push(a);
    return a;
  }
  const keyboardLink = link(doc.body, 'library-exit-keyboard');
  if (controls) link(controls, 'library-exit-controls');
  if (readerFooter) link(readerFooter, 'library-exit-reader');
  const description = doc.createElement('span');
  description.id = 'library-exit-instructions'; description.className = 'library-exit-instructions';
  description.textContent = content.instructions; doc.body.append(description); elements.push(description);
  canvas.setAttribute('aria-describedby', [previousDescription, description.id].filter(Boolean).join(' '));
  const hint = doc.createElement('button');
  hint.id = 'exit-hint'; hint.type = 'button'; hint.hidden = true; hint.textContent = content.prompt;
  hint.setAttribute('aria-label', content.label); doc.body.append(hint); elements.push(hint);
  on(hint, 'click', event => { if (canInteract() && getTarget()) use(event); });
  on(win, 'keydown', event => {
    if (event.repeat || event.defaultPrevented || event.isComposing) return;
    if (event.code === 'KeyX' && event.altKey && !event.ctrlKey && !event.metaKey &&
      !event.target?.closest?.('input, textarea, select, [contenteditable], [role="textbox"]')) {
      leave(event); return;
    }
    if (event.code === 'KeyE' && !event.altKey && !event.ctrlKey && !event.metaKey &&
      !isEditingTarget(event.target) && canInteract() && getTarget()) use(event);
  });
  on(canvas, 'mousedown', event => {
    press = event.button === 0 && canInteract() && getTarget() ?
      { x: event.clientX, y: event.clientY, travel: 0 } : null;
  });
  on(win, 'mousemove', event => {
    if (!press) return;
    press.travel += doc.pointerLockElement === canvas ?
      Math.hypot(event.movementX || 0, event.movementY || 0) :
      Math.hypot(event.clientX - press.x, event.clientY - press.y);
    press.x = event.clientX; press.y = event.clientY;
  });
  on(canvas, 'click', event => {
    const deliberate = press && press.travel <= 5; press = null;
    if (deliberate && event.button === 0 && canInteract() && getTarget()) use(event);
  });
  on(win, 'blur', () => { press = null; hint.hidden = true; });
  on(doc, 'pointerlockchange', () => { press = null; hint.hidden = true; });
  return {
    leave,
    keyboardLink,
    updateHint() {
      hint.hidden = disposed || !canInteract() || !getTarget();
      hint.textContent = getPrompt(); hint.setAttribute('aria-label', hint.textContent);
    },
    dispose() {
      if (disposed) return;
      disposed = true; press = null;
      for (const remove of removers) remove();
      for (const element of elements) element.remove();
      if (previousDescription === null) canvas.removeAttribute('aria-describedby');
      else canvas.setAttribute('aria-describedby', previousDescription);
    }
  };
}
