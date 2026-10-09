import * as THREE from 'three';
import {rayBoxDistance, isEditingTarget} from '../interaction-core.js';
import {createSeatController} from './controller.js';

export function compileSeatInterface({position, yaw = 0, anchors, collision, pickBox}) {
  const finitePoint = p => Array.isArray(p) && p.length === 3 && p.every(Number.isFinite);
  const finiteBox = b => b && ['x','y','z'].every(a => Number.isFinite(b[a+'0']) &&
    Number.isFinite(b[a+'1']) && b[a+'1'] > b[a+'0']);
  if (!finitePoint(position) || !Number.isFinite(yaw) || !finitePoint(anchors?.seat) ||
    !finitePoint(anchors?.eye) || !Array.isArray(anchors?.stand) || !anchors.stand.length ||
    !anchors.stand.every(finitePoint) || !Array.isArray(collision) || !collision.length ||
    !collision.every(finiteBox) || !finiteBox(pickBox)) throw new TypeError('Invalid chair interface.');
  const matrix = new THREE.Matrix4().makeRotationY(yaw).setPosition(...position);
  const transform = p => new THREE.Vector3(...p).applyMatrix4(matrix).toArray();
  const solids = collision.map(bounds => {
    const box = new THREE.Box3(new THREE.Vector3(bounds.x0, bounds.y0, bounds.z0),
      new THREE.Vector3(bounds.x1, bounds.y1, bounds.z1)).applyMatrix4(matrix);
    return {x0:box.min.x, x1:box.max.x, y0:box.min.y, y1:box.max.y, z0:box.min.z, z1:box.max.z};
  });
  return {matrix, inverse:matrix.clone().invert(), solids, pickBox,
    facingYaw:yaw + Math.PI,
    anchors:{seat:transform(anchors.seat), eye:transform(anchors.eye), stand:anchors.stand.map(transform)}};
}

export function installReadingSeat({document:doc, window:win, canvas, player, camera,
  chair, solids, canInteract, canStandAt, recoverStanding, releaseMovement,
  standingEyeHeight, toast = () => {}}) {
  const hint = doc.createElement('button'), stand = doc.createElement('button');
  hint.className = 'seat-hint'; hint.type = 'button'; hint.textContent = 'E · Sit in the reading chair';
  stand.className = 'seat-stand'; stand.type = 'button'; stand.textContent = 'Stand up · E / Esc';
  hint.hidden = stand.hidden = true;
  const removers = [], worldRay = new THREE.Vector3(), origin = new THREE.Vector3(), direction = new THREE.Vector3();
  let press = null, disposed = false;
  const on = (target, type, fn, options) => {
    target.addEventListener(type, fn, options); removers.push(() => target.removeEventListener(type, fn, options));
  };
  const controller = createSeatController({player, camera, anchors:chair.anchors,
    facingYaw:chair.facingYaw, facingPitch:chair.facingPitch,
    canStandAt, recoverStanding, releaseMovement, standingEyeHeight,
    reducedMotion:() => Boolean(win.matchMedia?.('(prefers-reduced-motion: reduce)').matches),
    onChange:state => { hint.hidden = true; stand.hidden = !['settling','seated','rising'].includes(state);
      stand.disabled = state === 'rising'; }});
  doc.body.append(hint, stand);
  function target(event) {
    if (disposed || controller.ownsMovement || !canInteract()) return false;
    camera.updateMatrixWorld(); camera.getWorldDirection(worldRay);
    if (event && doc.pointerLockElement !== canvas) {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return false;
      const x = (event.clientX - rect.left) / rect.width, y = (event.clientY - rect.top) / rect.height;
      if (!(x >= 0 && x <= 1 && y >= 0 && y <= 1)) return false;
      worldRay.set(x * 2 - 1, 1 - y * 2, .5).unproject(camera).sub(camera.position).normalize();
    }
    origin.copy(camera.position).applyMatrix4(chair.inverse);
    direction.copy(worldRay).transformDirection(chair.inverse);
    const distance = rayBoxDistance(origin, direction, chair.pickBox, 2.1);
    if (distance === null) return false;
    return !solids.some(s => { const hit = rayBoxDistance(camera.position, worldRay, s, distance);
      return hit !== null && hit + .025 < distance; });
  }
  function focusScene() { if (doc.visibilityState === 'visible' && doc.hasFocus()) canvas.focus({preventScroll:true}); }
  function use(event) {
    if (!canInteract()) return false;
    const wasSeated = controller.ownsMovement;
    const changed = wasSeated ? controller.stand() : target(event) && controller.sit();
    if (changed) { press = null; focusScene(); toast(wasSeated ? 'Standing up.' : 'Settle in. E or Escape stands up.'); }
    return changed;
  }
  on(hint, 'click', () => use()); on(stand, 'click', () => use());
  on(canvas, 'mousedown', e => { press = e.button === 0 ? {x:e.clientX, y:e.clientY, moved:0,
    locked:doc.pointerLockElement === canvas} : null; });
  on(win, 'mousemove', e => { if (press) press.moved += Math.abs(e.movementX || 0) + Math.abs(e.movementY || 0); });
  on(canvas, 'click', e => {
    const p = press; press = null;
    if (!p || e.button !== 0 || p.moved > 4 || Math.hypot(e.clientX - p.x, e.clientY - p.y) > 4 ||
      p.locked !== (doc.pointerLockElement === canvas) || controller.ownsMovement) return;
    if (use(e)) { e.preventDefault(); e.stopImmediatePropagation(); }
  });
  on(win, 'keydown', e => {
    if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey || isEditingTarget(e.target)) return;
    if (controller.ownsMovement && (e.code === 'KeyR' || /^Digit[1-5]$/.test(e.code))) {
      controller.cancel(); return; // Let the host apply its chosen navigation view.
    }
    if (controller.ownsMovement && ['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space','KeyC'].includes(e.code)) {
      e.preventDefault(); e.stopImmediatePropagation(); return;
    }
    if (e.code === 'Escape' && controller.ownsMovement) {
      if (!e.repeat) { if (controller.state === 'rising') controller.cancel(); else use(); }
      e.preventDefault(); e.stopImmediatePropagation(); return;
    }
    if (e.code === 'KeyE' && !e.repeat && use()) {
      e.preventDefault(); e.stopImmediatePropagation();
    }
  }, true);
  const suspend = () => { press = null; controller.cancel(); hint.hidden = true; };
  on(win, 'blur', suspend); on(win, 'popstate', suspend); on(win, 'pagehide', suspend); on(win, 'hashchange', suspend);
  on(doc, 'visibilitychange', () => { if (doc.visibilityState !== 'visible') suspend(); });
  on(win, 'resize', () => controller.update(0));
  return {
    get state() { return controller.state; }, get ownsMovement() { return controller.ownsMovement; },
    target, cancel:suspend,
    update(dt) { controller.update(dt); hint.hidden = controller.ownsMovement || !target(); },
    dispose() { if (disposed) return; disposed = true; press = null; controller.dispose();
      for (const remove of removers) remove(); hint.remove(); stand.remove(); }
  };
}
