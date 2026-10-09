// Original pattern and CPU-only texture baker. Node built-ins; no canvas, browser,
// renderer, image service, downloaded reference art, or third-party rasterizer.
import { deflateSync } from 'node:zlib';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const W = 1024, H = 2048, AA = 2;
const RW = W * AA, RH = H * AA, SX = RW / 680, SY = RH / 1080;
const pixels = new Uint8Array(RW * RH * 3);
const P = {
  field: '#87463b', fieldLight: '#9b5b49', red: '#6e382f',
  indigo: '#304448', deep: '#26383a', sage: '#738174',
  straw: '#c0a574', pale: '#d1bb90', gold: '#aa8552',
};
const rgb = hex => [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16));
const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));

function polygon(points, color) {
  const c = rgb(color), pts = points.map(([x, y]) => [x * SX, y * SY]);
  const ymin = Math.max(0, Math.floor(Math.min(...pts.map(p => p[1]))));
  const ymax = Math.min(RH - 1, Math.ceil(Math.max(...pts.map(p => p[1]))));
  for (let y = ymin; y <= ymax; y++) {
    const scan = y + 0.5, intersections = [];
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i], b = pts[(i + 1) % pts.length];
      if ((a[1] <= scan && b[1] > scan) || (b[1] <= scan && a[1] > scan)) {
        intersections.push(a[0] + (scan - a[1]) * (b[0] - a[0]) / (b[1] - a[1]));
      }
    }
    intersections.sort((a, b) => a - b);
    for (let i = 0; i + 1 < intersections.length; i += 2) {
      const xmin = Math.max(0, Math.ceil(intersections[i] - 0.5));
      const xmax = Math.min(RW - 1, Math.floor(intersections[i + 1] - 0.5));
      for (let x = xmin; x <= xmax; x++) {
        const k = (y * RW + x) * 3;
        pixels[k] = c[0]; pixels[k + 1] = c[1]; pixels[k + 2] = c[2];
      }
    }
  }
}
function rect(x, y, w, h, color) { polygon([[x,y],[x+w,y],[x+w,y+h],[x,y+h]], color); }
function ellipse(x, y, rx, ry, color, rotation = 0) {
  const points = [];
  for (let i = 0; i < 24; i++) {
    const a = i * Math.PI / 12, px = Math.cos(a) * rx, py = Math.sin(a) * ry;
    points.push([x + px * Math.cos(rotation) - py * Math.sin(rotation), y + px * Math.sin(rotation) + py * Math.cos(rotation)]);
  }
  polygon(points, color);
}
function line(points, width, color) {
  for (let i = 1; i < points.length; i++) {
    const a = points[i-1], b = points[i], dx = b[0]-a[0], dy = b[1]-a[1];
    const length = Math.hypot(dx, dy);
    if (!length) continue;
    const nx = -dy / length * width / 2, ny = dx / length * width / 2;
    polygon([[a[0]+nx,a[1]+ny],[b[0]+nx,b[1]+ny],[b[0]-nx,b[1]-ny],[a[0]-nx,a[1]-ny]], color);
  }
  for (const p of points) ellipse(p[0], p[1], width / 2, width / 2, color);
}
function bezier(a, b, c, d, width, color) {
  const pts = [];
  for (let i = 0; i <= 20; i++) {
    const t = i / 20, q = 1-t;
    pts.push([q*q*q*a[0]+3*q*q*t*b[0]+3*q*t*t*c[0]+t*t*t*d[0], q*q*q*a[1]+3*q*q*t*b[1]+3*q*t*t*c[1]+t*t*t*d[1]]);
  }
  line(pts, width, color);
}
function leaf(x, y, length, width, angle, color) {
  const cs = Math.cos(angle), sn = Math.sin(angle);
  const shape = [[0,0],[length*.25,-width*.75],[length*.68,-width*.55],[length,0],[length*.65,width*.4],[length*.24,width*.5]];
  polygon(shape.map(([a,b])=>[x+a*cs-b*sn,y+a*sn+b*cs]), color);
  line([[x+length*.18*cs,y+length*.18*sn],[x+length*.76*cs,y+length*.76*sn]], .85, P.gold);
}
function flower(x, y, size, color = P.straw, angle = 0) {
  for (let i = 0; i < 8; i++) {
    const a = angle + i * Math.PI / 4;
    ellipse(x + Math.cos(a)*size*.51, y + Math.sin(a)*size*.51, size*.43, size*.2, color, a);
  }
  ellipse(x,y,size*.3,size*.3,P.red);
  ellipse(x,y,size*.14,size*.14,P.pale);
}
function palmette(x, y, s, angle, light = P.straw) {
  const tr = (a,b)=>[x+(a*Math.cos(angle)-b*Math.sin(angle))*s,y+(a*Math.sin(angle)+b*Math.cos(angle))*s];
  for (const sign of [-1,1]) {
    for (let i = 0; i < 3; i++) {
      const p=tr(sign*(2+i*3),-1-i*2);
      leaf(...p, s*(15-i*2), s*5.2, angle - Math.PI/2 + sign*(.27+i*.39), light);
    }
  }
  const p=tr(0,1); leaf(...p, s*22, s*7.5, angle-Math.PI/2, light);
  const center=tr(0,-7); ellipse(...center,s*3.5,s*5,P.red,angle);
  const tip=tr(0,-9); ellipse(...tip,s*1.3,s*2.6,P.pale,angle);
}

// A seven-band frame, with the large vine band at a constant physical width.
rect(0,0,680,1080,P.red);
const bands = [[3,P.gold],[7,P.deep],[12,P.straw],[15,P.red],[22,P.gold],[25,P.indigo],[66,P.gold],[69,P.red],[75,P.straw],[78,P.red],[84,P.field]];
for (const [inset,col] of bands) rect(inset,inset,680-2*inset,1080-2*inset,col);
// Paired diagonal yarn wraps read as binding, without additional geometry.
for (let y=8;y<1072;y+=8) for (const x of [9,671]) line([[x-1.2,y],[x+1.2,y+3.6]],1.1,P.gold);
for (let x=8;x<672;x+=8) for (const y of [9,1071]) line([[x,y-1.2],[x+3.6,y+1.2]],1.1,P.gold);
// Meander guards with little stitch diamonds.
for (let y=26;y<1054;y+=14) for (const x of [18.5,661.5,72.5,607.5]) polygon([[x,y-2.1],[x+1.9,y],[x,y+2.1],[x-1.9,y]],P.pale);
for (let x=27;x<653;x+=14) for (const y of [18.5,1061.5,72.5,1007.5]) polygon([[x,y-1.9],[x+2.1,y],[x,y+1.9],[x-2.1,y]],P.pale);

// Mirrored climbing vine on the long edges; measured motifs, generous ground.
for (const side of [-1,1]) {
  const x=side<0?45.5:634.5;
  for (let k=0;k<15;k++) {
    const y=81+k*65.5;
    bezier([x,y-32],[x+side*14,y-13],[x-side*14,y+13],[x,y+33],2.1,P.gold);
    const a=side*Math.PI/2+(k%2?Math.PI:0);
    if (k%2===0) palmette(x,y+5,.71,a,P.straw);
    else flower(x,y,9.7,P.fieldLight,.2);
    leaf(x,y+24,9,3.8,side<0?-.6:Math.PI+.6,P.sage);
  }
}
for (const end of [-1,1]) {
  const y=end<0?45.5:1034.5;
  for (let k=0;k<9;k++) {
    const x=82+k*64.5;
    bezier([x-33,y],[x-15,y+end*12],[x+15,y-end*12],[x+33,y],2.1,P.gold);
    if (k%2===0) palmette(x,y+end*5,.71,end<0?0:Math.PI,P.straw);
    else flower(x,y,9.7,P.fieldLight,.2);
    leaf(x+25,y,9,3.8,end<0?-.8:.8,P.sage);
  }
}
for (const x of [45.5,634.5]) for (const y of [45.5,1034.5]) flower(x,y,13.5,P.straw,Math.PI/8);

// Scalloped indigo spandrels echo the central medallion, tied into field vines.
for (const sx of [-1,1]) for (const sy of [-1,1]) {
  const ox=sx<0?85:595, oy=sy<0?85:995;
  const shape=[[0,0],[144,0],[133,16],[114,21],[105,41],[80,47],[70,70],[47,80],[41,105],[21,114],[16,133],[0,144]];
  polygon(shape.map(([a,b])=>[ox-sx*a,oy-sy*b]),P.straw);
  polygon(shape.map(([a,b])=>[ox-sx*a*.947,oy-sy*b*.947]),P.indigo);
  const tx=ox-sx*40, ty=oy-sy*40;
  flower(tx,ty,17,P.fieldLight,Math.PI/8);
  for (let k=0;k<3;k++) {
    leaf(ox-sx*(21+k*23),oy-sy*18,23,8,sy>0?-Math.PI/2:Math.PI/2,P.sage);
    leaf(ox-sx*18,oy-sy*(21+k*23),23,8,sx>0?Math.PI:0,P.sage);
  }
}

// Field: articulated stems and alternating rosettes/palmettes, not a noisy fill.
for (const side of [-1,1]) {
  const x=340+side*181;
  for (let k=0;k<7;k++) {
    const y=242+k*98;
    bezier([x,y-49],[x-side*43,y-17],[x+side*43,y+17],[x,y+49],2.6,P.gold);
    const dir=k%2===0?side:-side;
    leaf(x,y-27,24,8,dir>0?-.7:Math.PI+.7,P.sage);
    leaf(x,y+28,22,7,dir>0?.8:Math.PI-.8,P.straw);
    if(k%2===0) flower(x,y,17,P.straw,.1);
    else palmette(x,y+9,.95,0,P.indigo);
    // Small quiet companions on the inward side of each vine.
    flower(x-side*59,y+43,6.6,P.gold);
  }
}

function medallion(rx,ry,color) {
  const pts=[];
  for(let i=0;i<192;i++) {
    const a=i*Math.PI/96;
    const f=1+.045*Math.cos(a*8)+.014*Math.cos(a*16);
    pts.push([340+Math.cos(a)*rx*f,540+Math.sin(a)*ry*f]);
  }
  polygon(pts,color);
}
// Compact enough to leave the field quiet; table obscures much of the center.
for (const [rx,ry,col] of [[112,201,P.deep],[107,195,P.straw],[99,184,P.indigo],[86,167,P.gold],[81,160,P.red],[71,148,P.fieldLight]]) medallion(rx,ry,col);
for (const end of [-1,1]) {
  const y=540+end*224;
  palmette(340,y-end*7,1.32,end>0?0:Math.PI,P.straw);
  line([[340,540+end*197],[340,y-end*9]],3,P.gold);
  flower(340,540+end*96,16,P.indigo);
  for (const side of [-1,1]) {
    bezier([340,540+end*26],[340+side*46,540+end*47],[340+side*42,540+end*75],[340+side*14,540+end*95],2.4,P.straw);
    leaf(340+side*25,540+end*57,24,8,side>0?-.4:Math.PI+.4,P.sage);
  }
}
flower(340,540,34,P.straw,Math.PI/8);
flower(340,540,17,P.indigo,0);
ellipse(340,540,5,7,P.pale);
// Sparse, intentionally asymmetric dye flecks are tied to yarn rows below,
// rather than random RGB noise pasted over the ornamental drawing.

function hash(x,y,seed=731) {
  let a=Math.imul(x+seed,374761393)^Math.imul(y+17,668265263);
  a=Math.imul(a^(a>>>13),1274126177);
  return ((a^(a>>>16))>>>0)/4294967296;
}
function smooth(t) { return t*t*(3-2*t); }
function noise(x,y) {
  const ix=Math.floor(x),iy=Math.floor(y),fx=smooth(x-ix),fy=smooth(y-iy);
  const a=hash(ix,iy)*(1-fx)+hash(ix+1,iy)*fx;
  const b=hash(ix,iy+1)*(1-fx)+hash(ix+1,iy+1)*fx;
  return a*(1-fy)+b*fy;
}
const albedo = new Uint8Array(W*H*4);
for(let y=0;y<H;y++) for(let x=0;x<W;x++) {
  const i=(y*W+x)*4, sum=[0,0,0];
  for(let dy=0;dy<AA;dy++) for(let dx=0;dx<AA;dx++) {
    const j=((y*AA+dy)*RW+x*AA+dx)*3;
    for(let c=0;c<3;c++) sum[c]+=pixels[j+c];
  }
  const u=x/(W-1),v=y/(H-1);
  const abrash=.965+.063*noise(u*3.3,v*23)+.024*Math.sin(v*31+noise(u*2,v*9));
  const weft=Math.sin(y*Math.PI*.5+.11*Math.sin(x*.06));
  const warp=Math.cos(x*Math.PI*.5)*.55;
  const row=(hash(0,Math.floor(y/3))-.5)*.012;
  const weave=1+.013*weft+.008*warp+row;
  const edge=Math.min(u,1-u,v*.6296,(1-v)*.6296);
  const edgeDark=1-.08*Math.exp(-edge*220);
  const age=clamp(noise(u*7+23,v*11)-.50,0,.4)*.13;
  for(let c=0;c<3;c++) albedo[i+c]=clamp(Math.round(sum[c]/(AA*AA)*abrash*weave*edgeDark*(1-age)+[154,125,93][c]*age),0,255);
  albedo[i+3]=255;
}
const DW=512,DH=1024,detail=new Uint8Array(DW*DH*4);
for(let y=0;y<DH;y++) for(let x=0;x<DW;x++) {
  const i=(y*DW+x)*4,u=x/(DW-1),v=y/(DH-1);
  // A low-contrast basket weave. Mips average it to a quiet, flat nap at distance.
  const warp=Math.sin(x*Math.PI/1.5),weft=Math.cos(y*Math.PI/1.5);
  const yarn=warp*.58+weft*.42;
  const nap=noise(u*31,v*57);
  const edge=Math.min(u,1-u,v*.6296,(1-v)*.6296);
  detail[i]=clamp(Math.round(132+20*yarn+11*(nap-.5)-8*Math.exp(-edge*190)),0,255);
  detail[i+1]=clamp(Math.round(235+7*(nap-.5)+3*yarn),216,247);
  detail[i+2]=0; detail[i+3]=255;
}

// Small PNG encoder: explicit sRGB metadata only on the colour map.
const table=new Uint32Array(256);
for(let n=0;n<256;n++){let c=n;for(let k=0;k<8;k++)c=c&1?0xedb88320^(c>>>1):c>>>1;table[n]=c>>>0;}
function crc(data){let c=0xffffffff;for(const b of data)c=table[(c^b)&255]^(c>>>8);return(c^0xffffffff)>>>0;}
function chunk(name,data){const type=Buffer.from(name),out=Buffer.alloc(data.length+12);out.writeUInt32BE(data.length);type.copy(out,4);data.copy(out,8);out.writeUInt32BE(crc(Buffer.concat([type,data])),out.length-4);return out;}
export function png(width,height,data,srgb=false){
  const ihdr=Buffer.alloc(13);ihdr.writeUInt32BE(width,0);ihdr.writeUInt32BE(height,4);ihdr[8]=8;ihdr[9]=6;
  const raw=Buffer.alloc(height*(width*4+1));
  for(let y=0;y<height;y++)Buffer.from(data.buffer,data.byteOffset+y*width*4,width*4).copy(raw,y*(width*4+1)+1);
  return Buffer.concat([Buffer.from([137,80,78,71,13,10,26,10]),chunk('IHDR',ihdr),...(srgb?[chunk('sRGB',Buffer.from([0]))]:[]),chunk('IDAT',deflateSync(raw,{level:9})),chunk('IEND',Buffer.alloc(0))]);
}
writeFileSync(new URL('./rug-albedo.png',import.meta.url),png(W,H,albedo,true));
writeFileSync(new URL('./rug-detail.png',import.meta.url),png(DW,DH,detail));
console.log(JSON.stringify({baker:'CPU-only original vector pattern + controlled yarn modulation',output:fileURLToPath(new URL('.',import.meta.url)),albedo:[W,H],detail:[DW,DH]},null,2));
