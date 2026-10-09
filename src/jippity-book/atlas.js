import { ATLAS } from './geometry.js';

export const PALETTE = Object.freeze({ cloth:'#173c40', foil:'#d6b16a', paper:'#eee4cc', ink:'#263f3b', ribbon:'#79374c' });
export const TEXTURE_SIZES = Object.freeze({ color:1024, control:512, bump:256 });
// The same vector drawing supplies colour and foil/roughness masks. No downloads.
export function paintBookAtlas(canvas, content, mode='color') {
  const size=TEXTURE_SIZES[mode];
  canvas.width=canvas.height=size;
  const c=canvas.getContext('2d');
  if(!c) throw new Error('Jippity book requires a 2D canvas context.');
  c.save(); c.scale(size/1024,size/1024);
  const color=mode==='color', bump=mode==='bump';
  const cloth=color?PALETTE.cloth:bump?'#808080':'rgb(0,212,0)';
  const foil=color?PALETTE.foil:bump?'#777777':'rgb(0,100,220)';
  c.fillStyle=cloth;c.fillRect(0,0,1024,1024);
  if(color||bump) {
    c.lineWidth=.6;
    for(let x=0;x<1024;x+=3){
      c.strokeStyle=color?(x%2?'rgba(210,230,204,.045)':'rgba(0,0,0,.05)'):(x%2?'#888':'#777');
      c.beginPath();c.moveTo(x,0);c.lineTo(x+.7,1024);c.stroke();
    }
    for(let y=0;y<1024;y+=4){
      c.strokeStyle=color?'rgba(225,235,211,.025)':'#848484';
      c.beginPath();c.moveTo(0,y);c.lineTo(1024,y+.5);c.stroke();
    }
  }
  const [x,y,w,h]=ATLAS.cover;
  c.strokeStyle=foil;c.fillStyle=foil;
  c.lineWidth=1.3;c.strokeRect(x+28,y+30,w-56,h-60);
  c.lineWidth=.65;c.strokeRect(x+35,y+37,w-70,h-74);
  // Small corner tools: quiet geometry, rather than ornamental stock imagery.
  for(const [cx,cy,sx,sy] of [[x+45,y+47,1,1],[x+w-45,y+47,-1,1],[x+45,y+h-47,1,-1],[x+w-45,y+h-47,-1,-1]]){
    c.beginPath();c.moveTo(cx,cy+12*sy);c.lineTo(cx,cy);c.lineTo(cx+12*sx,cy);c.stroke();
  }
  c.textAlign='center';c.textBaseline='middle';
  function text(value,yy,maxSize,maxWidth, family='Georgia') {
    let fontSize=maxSize;
    c.font=fontSize+'px '+family;
    while(c.measureText(value).width>maxWidth&&fontSize>12){fontSize--;c.font=fontSize+'px '+family;}
    c.fillText(value,x+w/2,yy);
  }
  text(content.series.toUpperCase(),y+97,16,w-110,'Arial');
  c.lineWidth=.8;c.beginPath();c.moveTo(x+250,y+131);c.lineTo(x+390,y+131);c.stroke();
  content.cover.lines.forEach((line,i)=>text(line,y+215+i*83,67,w-98));
  text(content.subtitle,y+385,19,w-115);
  // Abstract nested curves suggest vibration; deliberately not a theorem figure.
  c.save();c.translate(x+w/2,y+570);
  for(let ring=0;ring<9;ring++){
    c.beginPath();
    for(let k=0;k<=160;k++){
      const t=k*Math.PI*2/160;
      const r=32+ring*8.1+Math.sin(3*t+ring*.16)*8+Math.cos(2*t)*4;
      const xx=Math.cos(t)*r*1.19,yy=Math.sin(t)*r*.80;
      k?c.lineTo(xx,yy):c.moveTo(xx,yy);
    }
    c.closePath();c.lineWidth=ring===8?1.5:.85;c.stroke();
  }
  c.beginPath();c.arc(0,0,2.8,0,Math.PI*2);c.fill();c.restore();
  text(content.cover.note,y+750,12.5,w-90,'Arial');
  text(content.cover.imprint,y+806,21,w-90);
  text(content.edition.toUpperCase(),y+842,10,w-90,'Arial');
  // Spine text runs head to tail with the volume lying flat on the table.
  const [sx,sy,sw,sh]=ATLAS.spine;
  c.save();c.translate(sx+sw/2,sy+sh/2);c.rotate(Math.PI/2);
  c.font='26px Georgia';c.fillText(content.cover.spine,0,0,sh*.70);
  c.font='12px Arial';c.fillText(content.cover.imprint,-sh*.36,0);c.restore();
  c.lineWidth=2;
  for(const yy of [sy+61,sy+sh-61]){c.beginPath();c.moveTo(sx+14,yy);c.lineTo(sx+sw-14,yy);c.stroke();}
  const [px,py,pw,ph]=ATLAS.paper;
  c.fillStyle=color?PALETTE.paper:bump?'#808080':'rgb(0,241,0)';c.fillRect(px,py,pw,ph);
  if(color||bump)for(let j=0;j<65;j++){
    const yy=py+4+j*(ph-8)/65;
    c.strokeStyle=color?(j%7===0?'rgba(111,88,49,.28)':'rgba(132,107,66,.12)'):(j%7===0?'#6b6b6b':'#777777');
    c.lineWidth=j%7===0?1.6:.7;c.beginPath();c.moveTo(px,yy);c.bezierCurveTo(px+pw*.3,yy+.7,px+pw*.7,yy-.4,px+pw,yy+.3);c.stroke();
  }
  const [ex,ey,ew,eh]=ATLAS.end;
  c.fillStyle=color?'#d9d4b9':bump?'#808080':'rgb(0,226,0)';c.fillRect(ex,ey,ew,eh);
  if(color){
    c.strokeStyle='#a4b0a1';c.lineWidth=.8;
    for(let j=0;j<18;j++){c.beginPath();c.moveTo(ex,ey+j*16);c.lineTo(ex+ew,ey+j*16+ew*.34);c.stroke();}
  }
  const [rx,ry,rw,rh]=ATLAS.ribbon;
  c.fillStyle=color?PALETTE.ribbon:bump?'#808080':'rgb(0,135,20)';c.fillRect(rx,ry,rw,rh);
  if(color){c.strokeStyle='rgba(242,171,168,.15)';c.lineWidth=1;for(let j=0;j<rw;j+=4){c.beginPath();c.moveTo(rx+j,ry);c.lineTo(rx+j,ry+rh);c.stroke();}}
  c.restore();
  return canvas;
}
