import * as THREE from 'three';

// One small authored plate sheet. All copy is fictional, public sample content.
export function createStudyAtlas(makeCanvas = () => document.createElement('canvas')) {
  const canvas=makeCanvas();canvas.width=1024;canvas.height=1024;
  const c=canvas.getContext('2d');
  c.fillStyle='#d4c4a5';c.fillRect(0,0,1024,1024);
  function panel(x,y,w,h,bg) { c.save();c.beginPath();c.rect(x,y,w,h);c.clip();c.translate(x,y);c.fillStyle=bg;c.fillRect(0,0,w,h); }
  function text(value,x,y,size=24,color='#3d4942',font='Georgia') { c.fillStyle=color;c.font=`${size}px ${font}`;c.fillText(value,x,y); }
  // Cabinetmaker's small brass plate, almost invisible until approached.
  panel(0,0,512,128,'#3b382d');c.strokeStyle='#a89155';c.lineWidth=2;c.strokeRect(12,12,488,104);
  text('MARGINALIA',97,61,35,'#d9c589');text('a little room beyond the books',86,91,18,'#c5b990');c.restore();
  // A single loose public sheet on the desk. No simulated private activity.
  panel(512,0,512,512,'#e5d8b9');text('THE QUIET HOURS',40,61,29);text('A room for unfinished thoughts.',40,114,24);
  c.strokeStyle='#b9a988';c.beginPath();c.moveTo(40,140);c.lineTo(470,140);c.stroke();
  ['Leave a question on the page.','Follow it further than you planned.','Let the light change while you read.','','There is no hurry here.'].forEach((s,i)=>text(s,40,194+i*39,22));
  text('Jippity',346,436,31,'#48625a','cursive');text('PUBLIC SAMPLE  /  01',40,477,15,'#7d785f','sans-serif');c.restore();
  // Botanical specimen drawing: a ginkgo fan, a reason for the brass leaf latch.
  panel(0,128,512,384,'#d3ceb5');text('GINKGO BILOBA',34,41,20);c.strokeStyle='#536450';c.lineWidth=3;
  c.beginPath();c.moveTo(260,324);c.quadraticCurveTo(242,230,251,167);c.stroke();
  c.fillStyle='#8a9066';c.beginPath();c.moveTo(251,244);c.bezierCurveTo(118,191,62,82,143,92);c.bezierCurveTo(208,63,245,125,251,143);c.bezierCurveTo(290,78,351,59,404,101);c.bezierCurveTo(454,167,356,211,251,244);c.fill();
  c.strokeStyle='#596f59';c.lineWidth=1.3;for(let i=0;i<17;i++){const a=-2.9+i*.155;c.beginPath();c.moveTo(251,244);c.quadraticCurveTo(250+Math.cos(a)*100,150,251+Math.cos(a)*161,145+Math.sin(a)*60);c.stroke();}
  text('a leaf kept between two pages',33,360,19,'#697461','Georgia');c.restore();
  // Garden glass: layered quiet hills, an etched seed-head silhouette. A painted
  // view in a deep light well, not a new expensive landscape or an HDR download.
  panel(0,512,512,512,'#aabbb0');const sky=c.createLinearGradient(0,0,0,512);sky.addColorStop(0,'#809f9d');sky.addColorStop(.55,'#c9ccb3');sky.addColorStop(1,'#d9c896');c.fillStyle=sky;c.fillRect(0,0,512,512);
  // Fine horizontal cloud strokes and six receding washes suggest distance
  // without pretending the small theatrical window is a navigable exterior.
  for(let k=0;k<12;k++){c.strokeStyle=`rgba(227,223,189,${.055+k%3*.015})`;c.lineWidth=3+k%4;c.beginPath();c.moveTo(-20,95+k*13);c.bezierCurveTo(150,75+k*15,350,123+k*12,540,92+k*14);c.stroke();}
  for(let k=0;k<6;k++){c.fillStyle=['#a5b3a2','#99ad9c','#8fa693','#819c85','#718d75','#5f7c66'][k];c.beginPath();c.moveTo(0,512);for(let x=0;x<=512;x+=5)c.lineTo(x,286+k*30+Math.sin(x*.010+k*1.7)*20+Math.cos(x*.024+k)*7);c.lineTo(512,512);c.fill();}
  c.strokeStyle='#445f50';c.lineWidth=1.15;
  for(let i=0;i<11;i++){
    const x=12+i*48,y=387+(i*29%63),lean=Math.sin(i*2.1)*15;
    c.beginPath();c.moveTo(x+lean,529);c.quadraticCurveTo(x+lean*.4,465,x,y+18);c.stroke();
    for(let j=0;j<9;j++){
      const a=-Math.PI+j*Math.PI/8,tx=x+Math.cos(a)*(17+i%3*3),ty=y+Math.sin(a)*8;
      c.beginPath();c.moveTo(x,y+18);c.quadraticCurveTo(x+(tx-x)*.6,y+5,tx,ty);c.stroke();
      for(let n=0;n<3;n++){c.beginPath();c.arc(tx+(n-1)*2,ty-(n%2)*2,.8,0,Math.PI*2);c.fillStyle='#526b57';c.fill();}
    }
    c.beginPath();c.moveTo(x+lean*.3,472);c.quadraticCurveTo(x-17,457,x-23,443);c.moveTo(x+lean*.2,457);c.quadraticCurveTo(x+18,441,x+23,430);c.stroke();
  }
  c.restore();
  // Tiny framed contour study. Warm paper, ink, a single gold path.
  panel(512,512,512,512,'#d4c5a6');text('THE LONG WAY HOME',35,55,24);
  for(let j=0;j<16;j++){c.strokeStyle=j%3===0?'#7b8870':'#a5a68a';c.lineWidth=j%3===0?2:1;c.beginPath();for(let x=-30;x<550;x+=5)c.lineTo(x,115+j*22+Math.sin(x*.019+j*.22)*20+Math.cos(x*.036+j*.08)*13);c.stroke();}
  c.strokeStyle='#946c32';c.lineWidth=4;c.beginPath();c.moveTo(84,446);c.bezierCurveTo(330,366,170,265,396,154);c.stroke();text('an imagined walk',35,487,19);c.restore();
  const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=2;
  return texture;
}
export const PLATES={name:[0,.875,.5,.125],note:[.5,.5,.5,.5],leaf:[0,.5,.5,.375],garden:[0,0,.5,.5],map:[.5,0,.5,.5]};
