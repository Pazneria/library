import { createBookReader } from '../jippity-book/reader.js';

// A small DOM-only inspection layer around the proven bound-book reader.
// No book is moved, no scene animation runs, and history still contains only
// the public edition ID and spread. Detail DOM is created on first use.
export function createInspectableReader(options,entry,placement) {
  const reader=createBookReader({...options,content:entry.content}),doc=options.document,dialog=reader.element;
  const find=name=>dialog.querySelector('.'+name);
  const el=(tag,name,text)=>{const n=doc.createElement(tag);n.className=name;if(text!==undefined)n.textContent=text;return n;};
  dialog.classList.add('lb-reader');
  dialog.setAttribute('style','--lb-cloth:'+(entry.palette?.cloth||'#173c40'));
  const inspect=el('section','lb-inspect'),cover=el('div','lb-cover');cover.setAttribute('aria-hidden','true');
  cover.append(el('p','lb-cover-series',entry.content.series),el('p','lb-cover-title',entry.content.cover.lines.join('\n')),
    el('p','lb-cover-note',entry.content.cover.note),el('p','lb-cover-imprint',entry.content.cover.imprint));
  const detail=el('div','lb-detail'),location=placement.location||(placement.surface==='shelf'?'On a shelf':'On the reading table');
  const heading=el('h2','lb-title',entry.content.title);heading.tabIndex=-1;
  const read=el('button','lb-read','Read this book');read.type='button';
  detail.append(el('p','lb-location',location),heading,el('p','lb-summary',entry.summary),
    el('p','lb-edition',entry.content.edition+' · '+entry.content.pages.length+' pages'),read,
    el('p','lb-inspect-note','Your place in the room stays the same. Escape returns you to the book.'));
  inspect.append(cover,detail);find('jb-shell').append(inspect);
  const binding=find('jb-binding'),navigation=find('jb-navigation'),instructions=find('jb-keyboard-note');
  const details=el('button','lb-details','Book details');details.type='button';details.hidden=true;
  find('jb-toolbar').append(details);
  const close=find('jb-close');close.textContent='Return to '+placement.surface;
  close.setAttribute('aria-label','Close '+entry.content.title+' and return to the '+placement.surface);
  let inspecting=true;
  function showInspection(focus=true){
    inspecting=true;inspect.hidden=false;binding.hidden=navigation.hidden=instructions.hidden=true;details.hidden=true;
    dialog.scrollTop=0;if(focus)read.focus({preventScroll:true});
  }
  function showReading(){
    inspecting=false;inspect.hidden=true;binding.hidden=navigation.hidden=instructions.hidden=false;details.hidden=false;
    dialog.scrollTop=0;find('jb-contents').focus({preventScroll:true});
  }
  const inspectKeys=event=>{
    if(inspecting&&['ArrowLeft','ArrowRight','PageUp','PageDown','Home','End'].includes(event.key))event.stopImmediatePropagation();
  };
  const detailClick=()=>showInspection();
  read.addEventListener('click',showReading);details.addEventListener('click',detailClick);dialog.addEventListener('keydown',inspectKeys,true);
  showInspection(false);
  return {
    get isOpen(){return reader.isOpen;},get pendingBack(){return reader.pendingBack;},element:dialog,close:reader.close,
    open(){showInspection(false);if(!reader.open())return false;read.focus({preventScroll:true});return true;},
    dispose(){read.removeEventListener('click',showReading);details.removeEventListener('click',detailClick);dialog.removeEventListener('keydown',inspectKeys,true);reader.dispose();}
  };
}
