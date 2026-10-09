import {BufferGeometry,BufferAttribute,MeshStandardMaterial,DataTexture,Group,Mesh,
  RGBAFormat,UnsignedByteType,RepeatWrapping,LinearMipmapLinearFilter,LinearFilter,SRGBColorSpace} from 'three';
import {createFolioChair} from './folio-refined/folio-chair.mjs';
import {compileFolioSeatInterface} from './folio-interface.js';

// One independently placed reading chair. Existing room art and RNG stay intact.
export const FOLIO_PLACEMENT = Object.freeze({position:Object.freeze([-7.35,0,4.9]),yaw:-Math.PI/2});
const FOLIO_THREE = Object.freeze({BufferGeometry,BufferAttribute,MeshStandardMaterial,DataTexture,Group,Mesh,
  RGBAFormat,UnsignedByteType,RepeatWrapping,LinearMipmapLinearFilter,LinearFilter,SRGBColorSpace});

export function mountFolioSeat(scene,placement=FOLIO_PLACEMENT) {
  let asset=createFolioChair(FOLIO_THREE,{castShadow:true,receiveShadow:true});
  const chair=compileFolioSeatInterface(asset.contract,placement);
  asset.root.applyMatrix4(chair.matrix);scene.add(asset.root);
  return {chair,solids:chair.solids,
    // The existing scene disposer owns the attached GPU resources. Never call
    // asset.dispose as well; release the closure's CPU backing references afterward.
    releaseReferences(){asset=null;}
  };
}

export function folioApproach(chair,eyeHeight=1.62) {
  const position=chair.anchors.stand[0].slice(),target=chair.anchors.seat;
  const dx=target[0]-position[0],dz=target[2]-position[2];
  return {position,yaw:Math.atan2(-dx,-dz),pitch:Math.atan2(target[1]+.18-position[1]-eyeHeight,Math.hypot(dx,dz))};
}
