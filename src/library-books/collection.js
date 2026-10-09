import { createPhysicalBook } from '../jippity-book/book.js';
import { paintBookAtlas, PALETTE } from '../jippity-book/atlas.js';
import { validateContent } from '../jippity-book/content-validation.js';
import { compilePlacements } from './placement.js';

function colorAtlas(makeCanvas,content,palette,size=1024) {
  const canvas=makeCanvas(),context=canvas.getContext('2d');
  const mapped=new Map(Object.entries(palette).map(([key,color])=>[PALETTE[key],color]));
  const proxy=new Proxy(context,{
    get(target,key){if(key==='scale')return (x,y)=>target.scale(x*size/1024,y*size/1024);
      const value=target[key];return typeof value==='function'?value.bind(target):value;},
    set(target,key,value){target[key]=(key==='fillStyle'||key==='strokeStyle')&&mapped.has(value)?mapped.get(value):value;return true;}
  });
  // Only the color layer changes. Geometry, foil mask, cloth bump and UVs are
  // exactly the existing authored asset; no material shader is replaced.
  paintBookAtlas({set width(v){canvas.width=size;},set height(v){canvas.height=size;},getContext:()=>proxy},content,'color');
  return canvas;
}
export function createBookCollection({THREE,catalog,placements,makeCanvas=()=>document.createElement('canvas')}) {
  const compiled=compilePlacements(placements,catalog),resources=new Set(),byEdition=new Map(),books=[];
  let seed=null,disposed=false;
  try {
    for(const placement of compiled){
      const entry=catalog[placement.contentId];validateContent(entry.content);
      if(!byEdition.has(placement.contentId)){
        if(!seed){
          seed=createPhysicalBook({THREE,content:entry.content,makeCanvas});
          for(const resource of [seed.object.geometry,seed.object.material,...['map','roughnessMap','bumpMap'].map(k=>seed.object.material[k])])resources.add(resource);
          const color=seed.object.material.map;
          if(Object.keys(entry.palette||{}).length||(entry.colorSize??1024)!==1024)color.image=colorAtlas(makeCanvas,entry.content,entry.palette||{},entry.colorSize);
          byEdition.set(placement.contentId,seed.object.material);
        }else{
          const texture=new THREE.CanvasTexture(colorAtlas(makeCanvas,entry.content,entry.palette||{},entry.colorSize));
          texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=4;texture.name=entry.content.title+' color atlas';
          const material=seed.object.material.clone();material.map=texture;
          resources.add(material);resources.add(texture);byEdition.set(placement.contentId,material);
        }
      }
      const object=new THREE.Mesh(seed.object.geometry,byEdition.get(placement.contentId));
      object.name='Jippity - '+entry.content.title;object.matrix.copy(placement.matrix);object.matrixAutoUpdate=false;
      object.castShadow=object.receiveShadow=true;
      books.push({object,placement,content:entry.content});
    }
  }catch(error){for(const resource of resources){resource.dispose();if(resource.isCanvasTexture)resource.image=null;}throw error;}
  // Drop the unattached construction mesh; shared resources belong to collection
  // or the host's deduplicated scene disposal, never both.
  const pixels=[...byEdition.values()].reduce((sum,material)=>sum+material.map.image.width**2,0)+(seed?512**2+256**2:0);
  const budget=Object.freeze({books:books.length,editions:byEdition.size,triangles:books.length*466,drawCalls:books.length,
    texturePixels:pixels,textureWithFullMipRGBABytes:Math.round(pixels*4*4/3),
    geometryBytes:seed?.budget.geometryBytes||0,note:'CPU construction accounting; excludes shadows/prepass and measures neither GPU allocation nor frame rate.'});
  return {books,placements:compiled,objects:books.map(b=>b.object),budget,
    dispose(){if(disposed)return;disposed=true;for(const book of books)book.object.removeFromParent();for(const resource of resources){resource.dispose();if(resource.isCanvasTexture)resource.image=null;}}
  };
}
