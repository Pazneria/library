/** Folio editable finish refinement; original snapshot is kept in ../folio/.
 * Original module SHA256: 53006c52f457d0dd41f86ee7182a888b9c304cc631d0a692368ffed1dd71a639.
 * The host supplies THREE. No renderer, scene, controls, fonts or network fetches.
 */
import {buildFolioData,buildFolioTextures,auditFolio,FOLIO_VERSION} from './folio-core.mjs';
export {DESIGN,FOLIO_VERSION,buildFolioData,auditFolio} from './folio-core.mjs';
export function createFolioChair(THREE,{anisotropy=4,castShadow=false,receiveShadow=false}={}){
  if(!THREE?.BufferGeometry||!THREE?.MeshStandardMaterial||!THREE?.DataTexture)throw new TypeError('Supply the host Three.js namespace');
  const data=buildFolioData(),report=auditFolio(data);
  if(!report.passed)throw new Error('Folio structural check failed: '+report.errors.join('; '));
  const maps=buildFolioTextures(),ownedTextures=[],ownedMaterials=[],ownedGeometries=[];
  const root=new THREE.Group();root.name='Folio — walnut and umber leather';
  const makeTexture=(map,height=false)=>{
    const tex=new THREE.DataTexture(height?map.heightData:map.color,map.width,map.height,THREE.RGBAFormat,THREE.UnsignedByteType);
    tex.name='Folio owned '+(height?'bump':'colour');
    tex.wrapS=tex.wrapT=THREE.RepeatWrapping;tex.minFilter=THREE.LinearMipmapLinearFilter;tex.magFilter=THREE.LinearFilter;
    tex.generateMipmaps=true;tex.flipY=false;tex.anisotropy=Math.max(1,Math.floor(anisotropy));
    if(!height&&THREE.SRGBColorSpace)tex.colorSpace=THREE.SRGBColorSpace;
    tex.needsUpdate=true;ownedTextures.push(tex);return tex;
  };
  let disposed=false;
  try{
    const walnutMap=makeTexture(maps.walnut),walnutBump=makeTexture(maps.walnut,true),
      endMap=makeTexture(maps.endgrain),endBump=makeTexture(maps.endgrain,true),
      leatherMap=makeTexture(maps.leather),leatherBump=makeTexture(maps.leather,true);
    const specs={
      walnut:{map:walnutMap,bumpMap:walnutBump,roughnessMap:walnutBump,bumpScale:.00008,roughness:.55,metalness:0},
      endgrain:{map:endMap,bumpMap:endBump,roughnessMap:endBump,bumpScale:.00005,roughness:.72,metalness:0},
      leather:{map:leatherMap,bumpMap:leatherBump,roughnessMap:leatherBump,bumpScale:.00090,roughness:.92,metalness:0},
      welt:{map:leatherMap,bumpMap:leatherBump,roughnessMap:leatherBump,bumpScale:.00045,color:0xaaaaaa,roughness:.92,metalness:0},
      thread:{color:0x7d563b,roughness:.74,metalness:0}
    },materials={};
    for(const [name,spec] of Object.entries(specs)){const m=new THREE.MeshStandardMaterial(spec);m.name='Folio '+name;materials[name]=m;ownedMaterials.push(m);}
    for(const b of data.batches){
      const geo=new THREE.BufferGeometry();geo.name=b.name;
      ownedGeometries.push(geo);
      geo.setAttribute('position',new THREE.BufferAttribute(new Float32Array(b.positions),3));
      geo.setAttribute('normal',new THREE.BufferAttribute(new Float32Array(b.normals),3));
      geo.setAttribute('uv',new THREE.BufferAttribute(new Float32Array(b.uvs),2));
      geo.setIndex(new THREE.BufferAttribute(new Uint16Array(b.indices),1));geo.computeBoundingBox();geo.computeBoundingSphere();
      const mesh=new THREE.Mesh(geo,materials[b.material]);mesh.name=b.name;
      mesh.castShadow=castShadow;mesh.receiveShadow=receiveShadow;
      mesh.userData.parts=b.parts;root.add(mesh);
    }
    root.userData.folio={version:FOLIO_VERSION,contract:data.contract,performance:report.counts};
  }catch(error){ownedGeometries.forEach(g=>g.dispose());ownedMaterials.forEach(m=>m.dispose());ownedTextures.forEach(t=>t.dispose());throw error;}
  const dispose=()=>{
    if(disposed)return;disposed=true;
    root.removeFromParent();
    ownedGeometries.forEach(g=>g.dispose());ownedMaterials.forEach(m=>m.dispose());ownedTextures.forEach(t=>t.dispose());
    root.clear();
  };
  return {root,anchors:data.contract.anchors,bounds:data.contract.bounds,collision:data.contract.collision,
    contract:data.contract,report,dispose,get disposed(){return disposed;}};
}
export default createFolioChair;

