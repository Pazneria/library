/** Reuse the accepted factory/material ownership; replace two unuploaded buffers.
 * Revert the host import to ../folio-refined/folio-chair.mjs for the live shape.
 */
import {createFolioChair as createAccepted} from '../folio-refined/folio-chair.mjs';
import {buildFolioData,auditFolio,FOLIO_VERSION} from './folio-core.mjs';
export {DESIGN,FOLIO_VERSION,buildFolioData,auditFolio} from './folio-core.mjs';
export function createFolioChair(THREE,options={}){
  const data=buildFolioData(),report=auditFolio(data);
  if(!report.passed)throw new Error('Rounded Folio structural check failed: '+report.errors.join('; '));
  const asset=createAccepted(THREE,options);
  try{
    for(let i=0;i<2;i++){
      const mesh=asset.root.children[i],geo=mesh.geometry,b=data.batches[i];
      geo.setAttribute('position',new THREE.BufferAttribute(new Float32Array(b.positions),3));
      geo.setAttribute('normal',new THREE.BufferAttribute(new Float32Array(b.normals),3));
      geo.setAttribute('uv',new THREE.BufferAttribute(new Float32Array(b.uvs),2));
      geo.setIndex(new THREE.BufferAttribute(new Uint16Array(b.indices),1));
      geo.computeBoundingBox();geo.computeBoundingSphere();mesh.userData.parts=b.parts;
    }
    asset.contract.version=FOLIO_VERSION;asset.report=report;
    asset.root.userData.folio.version=FOLIO_VERSION;asset.root.userData.folio.performance=report.counts;
  }catch(error){asset.dispose();throw error;}
  return asset;
}
export default createFolioChair;
