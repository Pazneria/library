import * as THREE from 'three';
import { STUDY } from './layout.js';

// Clip the authored triangles, retaining their normals/UVs. Only the measured
// north wall and two shelf bays are touched; no builder RNG is rerun or reseeded.
function clip(geometry, axis, value, keepGreater) {
  const names = ['position','normal','uv'], arrays = names.map(()=>[]);
  const index = geometry.index, count = index?.count ?? geometry.attributes.position.count;
  const read = i => names.map(name => {
    const a=geometry.attributes[name]; return Array.from({length:a.itemSize},(_,k)=>a.array[i*a.itemSize+k]);
  });
  const component = {x:0,y:1,z:2}[axis], sign=keepGreater?1:-1;
  for(let i=0;i<count;i+=3) {
    let vertices=[0,1,2].map(k=>read(index?index.getX(i+k):i+k));
    const output=[];
    for(let j=0;j<vertices.length;j++) {
      const a=vertices[j], b=vertices[(j+1)%vertices.length], da=(a[0][component]-value)*sign, db=(b[0][component]-value)*sign;
      if(da>=0) output.push(a);
      if((da>=0)!==(db>=0)) { const t=da/(da-db); output.push(a.map((v,n)=>v.map((q,k)=>q+(b[n][k]-q)*t))); }
    }
    for(let j=1;j<output.length-1;j++) for(const vertex of [output[0],output[j],output[j+1]]) vertex.forEach((a,k)=>arrays[k].push(...a));
  }
  const result = new THREE.BufferGeometry();
  names.forEach((name,i)=>result.setAttribute(name,new THREE.Float32BufferAttribute(arrays[i],i===2?2:3)));
  result.setIndex(Array.from({length:arrays[0].length/3},(_,i)=>i));
  return result;
}
function between(g, x0, x1) { const a=clip(g,'x',x0,true), b=clip(a,'x',x1,false); a.dispose(); return b; }
function push(map, material, g) { if(!g.attributes.position.count) { g.dispose(); return; } if(!map.has(material)) map.set(material,[]); map.get(material).push(g); }
export function carveStudy(lib, books, materials, movingBuilder, movingBooks) {
  const cut=STUDY.cut, result=new Map(), report={wallPieces:0,shelfPieces:0,movingBooks:0};
  const toLocal=new THREE.Matrix4().makeScale(STUDY.width/(cut.x1-cut.x0),1,1)
    .multiply(new THREE.Matrix4().makeTranslation(-cut.x0,0,-STUDY.hinge.z));
  for(const [material, geometries] of lib.B.batches) for(const g of geometries) {
    g.computeBoundingBox(); const b=g.boundingBox;
    const isWall=material===materials.plaster && Math.abs(b.min.z+10.5)<.00001 && Math.abs(b.max.z+10)<.00001 && b.min.y===0 && b.max.y>10;
    const isShelf=b.min.z>=-10.001&&b.max.z<=-9.499&&b.min.y>=-.001&&b.max.y<=3.501&&b.max.x>cut.x0&&b.min.x<cut.x1;
    if(!isWall&&!isShelf) { push(result,material,g); continue; }
    push(result,material,clip(g,'x',cut.x0,false));
    push(result,material,clip(g,'x',cut.x1,true));
    const middle=between(g,cut.x0,cut.x1);
    if(isWall) { push(result,material,clip(middle,'y',cut.y1,true)); middle.dispose(); report.wallPieces++; }
    else { middle.applyMatrix4(toLocal); movingBuilder.add(material,middle); report.shelfPieces++; }
    g.dispose();
  }
  if(report.wallPieces!==1 || report.shelfPieces<20) throw new Error('Secret study baseline changed: remeasure north-wall opening.');
  lib.B.batches=result;
  const kept=[];
  for(const s of lib.B.solids) {
    const wall=Math.abs(s.z0+10.5)<1e-6&&Math.abs(s.z1+10)<1e-6&&s.y1>10;
    const shelf=Math.abs(s.z0+10)<1e-6&&Math.abs(s.z1+9.6)<1e-6&&s.y1<3.6&&s.x0===-7&&s.x1===7;
    if(!wall&&!shelf) { kept.push(s); continue; }
    kept.push({...s,x1:cut.x0},{...s,x0:cut.x1});
    if(wall) kept.push({...s,x0:cut.x0,x1:cut.x1,y0:cut.y1});
  }
  lib.B.solids=kept;
  const mats=[],cols=[],vars=[];
  for(let i=0;i<books.mats.length;i++) {
    const m=books.mats[i], p=new THREE.Vector3().setFromMatrixPosition(m);
    if(p.x>cut.x0&&p.x<cut.x1&&p.z<-9.50&&p.z>-10&&p.y<3.5) {
      movingBooks.mats.push(m.clone().premultiply(toLocal));movingBooks.cols.push(books.cols[i]);movingBooks.vars.push(books.vars[i]);report.movingBooks++;
    } else { mats.push(m);cols.push(books.cols[i]);vars.push(books.vars[i]); }
  }
  books.mats=mats;books.cols=cols;books.vars=vars;
  return report;
}
