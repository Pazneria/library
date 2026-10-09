import { buildBookGeometry } from './geometry.js';
import { paintBookAtlas, TEXTURE_SIZES } from './atlas.js';
import { validateContent } from './content-validation.js';

// Host provides its existing Three instance; no duplicate renderer or scene.
export function createPhysicalBook({ THREE, content, position=[0,0,0], yaw=0,
  makeCanvas=()=>document.createElement('canvas') }) {
  validateContent(content);
  const data=buildBookGeometry();
  const geometry=new THREE.BufferGeometry();
  geometry.setAttribute('position',new THREE.BufferAttribute(data.position,3));
  geometry.setAttribute('normal',new THREE.BufferAttribute(data.normal,3));
  geometry.setAttribute('uv',new THREE.BufferAttribute(data.uv,2));
  geometry.computeBoundingBox();geometry.computeBoundingSphere();
  const textures={};
  for(const mode of ['color','control','bump']){
    const texture=new THREE.CanvasTexture(paintBookAtlas(makeCanvas(),content,mode));
    if(mode==='color') texture.colorSpace=THREE.SRGBColorSpace;
    texture.anisotropy=4;texture.name='Jippity '+mode+' atlas';textures[mode]=texture;
  }
  const material=new THREE.MeshStandardMaterial({
    map:textures.color,roughnessMap:textures.control,metalnessMap:textures.control,
    bumpMap:textures.bump,bumpScale:.00024,roughness:1,metalness:1
  });
  material.name='Jippity cloth, foil, paper and silk';
  const object=new THREE.Mesh(geometry,material);
  object.name='Jippity — '+content.title;
  object.position.fromArray(position);object.rotation.y=yaw;
  object.castShadow=true;object.receiveShadow=true;
  object.updateMatrix();object.matrixAutoUpdate=false;
  // Nothing animates or updates textures in the frame loop.
  const pixels=Object.values(TEXTURE_SIZES).reduce((sum,size)=>sum+size*size,0);
  let disposed=false;
  return { object,
    budget:Object.freeze({triangles:data.triangles,vertices:data.position.length/3,
      drawCalls:1,geometryBytes:data.position.byteLength+data.normal.byteLength+data.uv.byteLength,
      texturePixels:pixels,textureBaseRGBABytes:pixels*4,
      textureWithFullMipRGBABytes:Math.round(pixels*4*4/3),
      note:'Static geometry/texture accounting; drawCalls excludes shadow and optional host prepass. No frame-rate or GPU-memory measurement.'}),
    dispose(){
      if(disposed)return;disposed=true;object.removeFromParent();
      geometry.dispose();material.dispose();Object.values(textures).forEach(t=>t.dispose());
      // Release backing canvases held by the texture image references.
      Object.values(textures).forEach(t=>{t.image=null;});
    }
  };
}
