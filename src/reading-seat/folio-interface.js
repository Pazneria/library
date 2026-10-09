import * as THREE from 'three';
import {compileSeatInterface} from './interaction.js';

// Consume the module's current contract, never its older exported JSON.
// The asset source remains untouched; this bridge owns no asset resources.
export function compileFolioSeatInterface(contract, placement) {
  if (contract?.collision?.type !== 'compound-box' || !contract.anchors?.seatedEye?.forward) {
    throw new TypeError('Expected the current Folio compound-box/anchor contract.');
  }
  const collision = contract.collision.boxes.map(box => {
    const local = new THREE.Box3(new THREE.Vector3(...box.size).multiplyScalar(-.5),
      new THREE.Vector3(...box.size).multiplyScalar(.5));
    local.applyMatrix4(new THREE.Matrix4().makeRotationX(box.rotationX || 0).setPosition(...box.center));
    return {x0:local.min.x,x1:local.max.x,y0:local.min.y,y1:local.max.y,z0:local.min.z,z1:local.max.z};
  });
  const {min,max} = contract.bounds;
  const compiled = compileSeatInterface({...placement,
    anchors:{seat:contract.anchors.seat.position,eye:contract.anchors.seatedEye.position,
      stand:[contract.anchors.standUp.position,contract.anchors.entry.position]},collision,
    pickBox:{x0:min[0],x1:max[0],y0:.2,y1:max[1],z0:min[2],z1:max[2]}});
  const forward = new THREE.Vector3(...contract.anchors.seatedEye.forward).transformDirection(compiled.matrix);
  compiled.facingYaw = Math.atan2(-forward.x,-forward.z);
  compiled.facingPitch = Math.asin(THREE.MathUtils.clamp(forward.y,-1,1));
  return compiled;
}
