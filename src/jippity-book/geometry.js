// All coordinates in metres. Pure CPU construction; no Three, DOM or renderer.
export const BOOK_SIZE = Object.freeze({ width: .34, depth: .47, height: .064 });
export const ATLAS = Object.freeze({
  cover: [16, 16, 640, 896], spine: [680, 16, 120, 896],
  paper: [824, 16, 184, 400], end: [824, 448, 184, 256],
  ribbon: [824, 752, 184, 240], cloth: [688, 944, 104, 48]
});
const unit = n => n / 1024;
export function atlasUV(region, u, v) {
  const [x, y, w, h] = ATLAS[region];
  return [unit(x + 2 + u * (w - 4)), 1 - unit(y + 2 + (1 - v) * (h - 4))];
}
export function buildBookGeometry() {
  const position = [], normal = [], uv = [];
  const bounds = { min: [Infinity, Infinity, Infinity], max: [-Infinity, -Infinity, -Infinity] };
  function triangle(a, b, c, tex = [[0,0],[1,0],[1,1]], region = 'cloth') {
    const ab = b.map((x,i) => x-a[i]), ac = c.map((x,i) => x-a[i]);
    const n = [ab[1]*ac[2]-ab[2]*ac[1], ab[2]*ac[0]-ab[0]*ac[2], ab[0]*ac[1]-ab[1]*ac[0]];
    const len = Math.hypot(...n);
    if (len < 1e-12) return;
    const nn = n.map(x => x/len);
    [a,b,c].forEach((p,i) => {
      position.push(...p); normal.push(...nn); uv.push(...atlasUV(region,...tex[i]));
      p.forEach((x,k) => { bounds.min[k] = Math.min(bounds.min[k],x); bounds.max[k] = Math.max(bounds.max[k],x); });
    });
  }
  function quad(a,b,c,d, region = 'cloth', coords = [[0,0],[1,0],[1,1],[0,1]]) {
    triangle(a,b,c,[coords[0],coords[1],coords[2]],region);
    triangle(a,c,d,[coords[0],coords[2],coords[3]],region);
  }
  // Rounded plan and two shallow edge bevels give boards a visible, bound silhouette.
  function board(width, depth, bottom, height, radius, segments, topRegion, sideRegion) {
    const ring = [];
    for(let corner=0;corner<4;corner++) {
      const angle0=corner*Math.PI/2;
      const cx=(corner===0||corner===3?1:-1)*(width/2-radius);
      const cz=(corner<2?1:-1)*(depth/2-radius);
      for(let j=0;j<=segments;j++) {
        const angle=angle0+j*Math.PI/(2*segments);
        ring.push([cx+Math.cos(angle)*radius,cz+Math.sin(angle)*radius]);
      }
    }
    const bevel=Math.min(.0016,height*.24);
    const layers=[[bottom,.0012],[bottom+bevel,0],[bottom+height-bevel,0],[bottom+height,.0012]];
    const points=layers.map(([y,inset])=>ring.map(([x,z])=>[x*(1-inset/(width/2)),y,z*(1-inset/(depth/2))]));
    const count=ring.length;
    for(let k=0;k<layers.length-1;k++) for(let i=0;i<count;i++){
      const j=(i+1)%count;
      quad(points[k][i],points[k+1][i],points[k+1][j],points[k][j],sideRegion,
        [[i/count,(layers[k][0]-bottom)/height],[i/count,(layers[k+1][0]-bottom)/height],
         [j/count,(layers[k+1][0]-bottom)/height],[j/count,(layers[k][0]-bottom)/height]]);
    }
    for(let i=0;i<count;i++) {
      const j=(i+1)%count;
      const top=points[3],bot=points[0];
      const topUV=p=>[p[0]/width+.5,.5-p[2]/depth];
      triangle([0,bottom+height,0],top[j],top[i],[[.5,.5],topUV(top[j]),topUV(top[i])],topRegion);
      triangle([0,bottom,0],bot[i],bot[j],[[.5,.5],[0,0],[1,0]],'cloth');
    }
  }
  board(.34,.47,0,.006,.006,3,'end','cloth');
  // A recessed page block, with softly eased corners and visible layered end grain.
  board(.314,.448,.007,.048,.003,2,'end','paper');
  board(.34,.47,.058,.006,.006,3,'cover','cloth');
  // Rounded spine: a half barrel joins the boards along their left edge.
  const spineX=-.165, cy=.032, r=.031;
  for(let i=0;i<10;i++){
    const a=-Math.PI/2+i*Math.PI/10, b=a+Math.PI/10;
    const p=(angle,z,extra=0)=>[spineX-Math.cos(angle)*(r*.40+extra),cy+Math.sin(angle)*r,z];
    quad(p(a,-.228),p(a,.228),p(b,.228),p(b,-.228),'spine',[[i/10,1],[i/10,0],[(i+1)/10,0],[(i+1)/10,1]]);
    triangle([spineX,cy,-.228],p(a,-.228),p(b,-.228),undefined,'cloth');
    triangle([spineX,cy,.228],p(b,.228),p(a,.228),undefined,'cloth');
  }
  // Four restrained raised binding bands; all share the same atlas/material.
  for(const z of [-.178,-.109,.109,.178]) for(let i=0;i<8;i++){
    const a=-Math.PI/2+i*Math.PI/8,b=a+Math.PI/8;
    const p=(t,zz)=>[spineX-Math.cos(t)*.0144,cy+Math.sin(t)*.0315,zz];
    quad(p(a,z-.0021),p(a,z+.0021),p(b,z+.0021),p(b,z-.0021));
  }
  // Silk bookmark emerges between pages; a forked, slightly draped end.
  const a=[-.064,.042,.198],b=[-.043,.042,.198],c=[-.041,.010,.248],d=[-.062,.010,.248];
  const e=[-.040,.003,.284],f=[-.0505,.003,.277],g=[-.061,.003,.284];
  // Two ribbon spans, then an explicitly triangulated V-notch (no concave fan).
  const ribbonFaces=[[a,d,c],[a,c,b],[d,g,f],[d,f,c],[c,f,e]];
  const ribbonUV=p=>[(p[0]+.065)/.027,(.284-p[2])/.086];
  for(const face of ribbonFaces){
    triangle(...face,face.map(ribbonUV),'ribbon');
    const back=face.map(p=>[p[0],p[1]-.0005,p[2]]).reverse();
    triangle(...back,back.map(ribbonUV),'ribbon');
  }
  return { position:new Float32Array(position),normal:new Float32Array(normal),uv:new Float32Array(uv),bounds,triangles:position.length/9 };
}
