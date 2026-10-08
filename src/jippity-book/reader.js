import { createReadingState } from './reader-state.js';
import { validateContent } from './content-validation.js';

export const HISTORY_KEY='jippityBoundBook';
let sequence=0;
const editing=target=>Boolean(target?.closest?.('input, textarea, select, [contenteditable], [role="textbox"]'));
function motif(doc) {
  const svg=doc.createElementNS('http://www.w3.org/2000/svg','svg');
  svg.setAttribute('viewBox','-145 -110 290 220');svg.setAttribute('aria-hidden','true');
  svg.setAttribute('class','jb-motif');
  for(let r=0;r<9;r++){
    const path=doc.createElementNS('http://www.w3.org/2000/svg','path');let d='';
    for(let k=0;k<=120;k++){const t=k*Math.PI*2/120,a=32+r*8.1+Math.sin(3*t+r*.16)*8+Math.cos(2*t)*4;
      d+=(k?'L':'M')+(Math.cos(t)*a*1.19).toFixed(2)+' '+(Math.sin(t)*a*.80).toFixed(2)+' ';}
    path.setAttribute('d',d+'Z');svg.append(path);
  }
  return svg;
}
export function createBookReader({document:doc,window:win,content,look,setPaused,releaseMovement,returnFocus,onError=()=>{}}) {
  validateContent(content);
  const state=createReadingState(content.pages.length),session=content.id+':'+(++sequence);
  const removers=[];let pendingBack=false,backTimer=null,animation=null,previousFocus=null,historyBase=null;
  const el=(tag,className,text)=>{const n=doc.createElement(tag);if(className)n.className=className;if(text!==undefined)n.textContent=text;return n;};
  const dialog=el('dialog','jb-reader');dialog.setAttribute('aria-label',content.title);
  const shell=el('div','jb-shell'),toolbar=el('header','jb-toolbar'),identity=el('div','jb-identity',content.series);
  const closeButton=el('button','jb-close','Back to library');closeButton.type='button';
  closeButton.setAttribute('aria-label','Close '+content.title+' and return to the library');
  const closeGlyph=el('span','jb-close-glyph','×');closeGlyph.setAttribute('aria-hidden','true');closeButton.append(closeGlyph);
  toolbar.append(identity,closeButton);
  const binding=el('div','jb-binding'),spread=el('div','jb-spread');
  spread.setAttribute('aria-label','Open book');binding.append(spread);
  const footer=el('footer','jb-navigation'),prev=el('button','jb-page-button','← Previous'),next=el('button','jb-page-button','Next →');
  prev.type=next.type='button';prev.setAttribute('aria-label','Previous two pages');next.setAttribute('aria-label','Next two pages');
  const navCenter=el('div','jb-navigation-center'),select=el('select','jb-contents');
  select.setAttribute('aria-label','Choose a pair of pages');
  for(let i=0;i<state.count;i++){const option=el('option','',String(i+1).padStart(2,'0')+' / '+content.pages[i*2].title.replace(/\n/g,' '));option.value=String(i);select.append(option);}
  const status=el('p','jb-status');status.setAttribute('role','status');status.setAttribute('aria-live','polite');status.setAttribute('aria-atomic','true');
  navCenter.append(select,status);footer.append(prev,navCenter,next);
  const instructions=el('p','jb-keyboard-note','← → turn pages · Esc returns to the library');
  shell.append(toolbar,binding,footer,instructions);dialog.append(shell);doc.body.append(dialog);
  const on=(target,event,listener)=>{target.addEventListener(event,listener);removers.push(()=>target.removeEventListener(event,listener));};
  const own=()=>win.history.state?.[HISTORY_KEY]?.session===session;
  const reduced=()=>Boolean(win.matchMedia?.('(prefers-reduced-motion: reduce)').matches);
  function sourceLink(source,full=false){
    const a=el('a',full?'jb-source-link':'jb-citation',full?source.title:'['+(content.sources.indexOf(source)+1)+']');
    a.href=source.href;a.target='_blank';a.rel='noopener noreferrer';a.referrerPolicy='no-referrer';
    a.setAttribute('aria-label',source.title+' — opens PDF in a new tab');return a;
  }
  function page(index) {
    const data=content.pages[index],paper=el('article','jb-paper '+(index%2?'jb-paper-right':'jb-paper-left'));
    if(!data){paper.setAttribute('aria-label','Blank endpaper');paper.append(el('p','jb-colophon',content.signature));return paper;}
    const running=el('div','jb-running-head',index===0?content.edition:content.title);
    const body=el('div','jb-page-body'+(data.kind==='title'?' jb-title-page':''));
    const eyebrow=el('p','jb-eyebrow',data.eyebrow),heading=el('h2','jb-heading',data.title);
    body.append(eyebrow,heading);
    if(data.kind==='title')body.append(motif(doc));
    data.paragraphs.forEach(text=>body.append(el('p','jb-paragraph',text)));
    if(data.kind==='sources'){
      const list=el('ol','jb-sources');
      for(const id of data.sourceIds||[]){
        const source=content.sources.find(s=>s.id===id),li=el('li','');
        li.append(el('p','jb-source-authors',source.authors),sourceLink(source,true),el('p','jb-source-detail',source.detail));list.append(li);
      }
      body.append(list);
    }else if(data.sourceIds?.length){
      const citations=el('p','jb-citations');
      citations.append(el('span','','Sources '));
      data.sourceIds.forEach(id=>citations.append(sourceLink(content.sources.find(s=>s.id===id))));
      body.append(citations);
    }
    if(data.note)body.append(el('p','jb-margin-note',data.note));
    const folio=el('div','jb-folio');folio.append(el('span','',index===0?content.signature:content.series),el('span','',String(index+1).padStart(2,'0')));
    paper.append(running,body,folio);return paper;
  }
  function render(direction=0) {
    animation?.cancel();animation=null;
    spread.replaceChildren(page(state.spread*2),page(state.spread*2+1));
    const first=state.spread*2+1,last=Math.min(first+1,content.pages.length);
    status.textContent='Pages '+first+'–'+last+' of '+content.pages.length;
    select.value=String(state.spread);prev.disabled=state.spread===0;next.disabled=state.spread===state.count-1;
    dialog.scrollTop=0;
    if(direction&&!reduced()&&spread.animate)animation=spread.animate([
      {opacity:.35,transform:'translateX('+(direction*10)+'px)'},
      {opacity:1,transform:'translateX(0)'}
    ],{duration:180,easing:'cubic-bezier(.2,.65,.3,1)'});
  }
  function savePage(){
    if(!own())return;
    try{win.history.replaceState({...win.history.state,[HISTORY_KEY]:{session,book:content.id,spread:state.spread}},'',win.location.href);}catch(error){onError(error);}
  }
  function open(pushHistory=true,index=state.spread) {
    if(state.disposed||pendingBack)return false;
    if(state.isOpen){go(index);return true;}
    previousFocus=doc.activeElement;
    state.open(index);
    try{
      releaseMovement();look.pause();setPaused(true);
      render();dialog.showModal();closeButton.focus({preventScroll:true});
    }catch(error){
      state.close();if(dialog.open)dialog.close();
      try{releaseMovement();look.resume();}finally{setPaused(false);}
      onError(error);return false;
    }
    if(pushHistory)try{
      historyBase=win.history.state;
      const base=historyBase&&typeof historyBase==='object'?historyBase:{};
      win.history.pushState({...base,[HISTORY_KEY]:{session,book:content.id,spread:state.spread}},'',win.location.href);
    }catch(error){onError(error);}
    return true;
  }
  function hide(){
    if(!state.close())return false;
    animation?.cancel();animation=null;
    if(dialog.open)dialog.close();
    try{releaseMovement();look.resume();}finally{setPaused(false);}
    const focus=returnFocus?.isConnected!==false&&returnFocus?.focus?returnFocus:previousFocus;
    if(focus?.isConnected!==false)focus?.focus?.({preventScroll:true});
    return true;
  }
  function releaseBackGuard(){
    pendingBack=false;
    if(backTimer!==null)win.clearTimeout(backTimer);
    backTimer=null;
  }
  function close(){
    if(!state.isOpen)return false;
    const owns=own();
    hide();
    if(owns){
      pendingBack=true;
      // This guard is released by popstate. If the host suppresses traversal,
      // controls are already resumed; bounded fallback also releases reopen.
      backTimer=win.setTimeout(()=>{
        if(own())try{win.history.replaceState(historyBase,'',win.location.href);}catch(error){onError(error);}
        releaseBackGuard();
      },1200);
      try{win.history.back();}catch(error){
        if(own())try{win.history.replaceState(historyBase,'',win.location.href);}catch(replaceError){onError(replaceError);}
        releaseBackGuard();onError(error);
      }
    }
    return true;
  }
  function go(index){
    const old=state.spread;
    if(!state.go(index))return false;
    render(Math.sign(state.spread-old));savePage();return true;
  }
  on(closeButton,'click',close);on(prev,'click',()=>go(state.spread-1));on(next,'click',()=>go(state.spread+1));
  on(select,'change',()=>go(Number(select.value)));
  on(dialog,'cancel',event=>{event.preventDefault();close();});
  // A queued close event from a previous open cycle cannot close a new cycle.
  on(dialog,'close',()=>{if(!dialog.open&&state.isOpen)close();});
  on(dialog,'keydown',event=>{
    if(event.altKey||event.ctrlKey||event.metaKey||editing(event.target))return;
    let index;
    if(event.key==='ArrowRight'||event.key==='PageDown')index=state.spread+1;
    else if(event.key==='ArrowLeft'||event.key==='PageUp')index=state.spread-1;
    else if(event.key==='Home')index=0;
    else if(event.key==='End')index=state.count-1;
    else return;
    event.preventDefault();go(index);
  });
  on(win,'popstate',event=>{
    releaseBackGuard();
    const mark=event.state?.[HISTORY_KEY];
    if(mark?.session===session&&mark.book===content.id){
      if(state.isOpen)go(mark.spread);else open(false,mark.spread);
    }else hide();
  });
  return {
    get isOpen(){return state.isOpen;},get pendingBack(){return pendingBack;},get spread(){return state.spread;},
    open:()=>open(true),close,go,element:dialog,
    dispose(){
      if(state.disposed)return;
      releaseBackGuard();removers.forEach(fn=>fn());hide();state.dispose();animation?.cancel();
      if(own())try{win.history.replaceState(historyBase,'',win.location.href);}catch(error){onError(error);}
      dialog.remove();
    }
  };
}
