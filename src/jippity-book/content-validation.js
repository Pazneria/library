export function validateContent(book) {
  const text=(s,max)=>typeof s==='string'&&s.trim().length>0&&s.length<=max;
  if(!book||book.schemaVersion!==1||!text(book.id,80)||!text(book.title,120))throw new TypeError('Invalid book identity.');
  if(!text(book.series,80)||!text(book.subtitle,160)||!text(book.signature,120)||!text(book.edition,40))throw new TypeError('Invalid book metadata.');
  if(!book.cover||!Array.isArray(book.cover.lines)||book.cover.lines.length<1||book.cover.lines.length>3||
    !book.cover.lines.every(s=>text(s,40))||!text(book.cover.spine,100)||!text(book.cover.imprint,50)||!text(book.cover.note,100))throw new TypeError('Invalid cover text.');
  if(!Array.isArray(book.pages)||!book.pages.length||book.pages.length>40)throw new TypeError('A book needs 1–40 pages.');
  if(!Array.isArray(book.sources)||book.sources.length>30)throw new TypeError('Invalid sources.');
  const ids=new Set();
  for(const source of book.sources){
    if(!text(source.id,60)||ids.has(source.id)||!text(source.title,240)||!text(source.authors,300)||!text(source.detail,120))throw new TypeError('Invalid source metadata.');
    if(typeof source.href!=='string'||!/^https:\/\/[a-z0-9][a-z0-9.-]*(?::443)?\//i.test(source.href)||/[\s<>"\\]/.test(source.href))throw new TypeError('Sources must use a public HTTPS URL.');
    ids.add(source.id);
  }
  for(const page of book.pages){
    if(!['title','text','sources'].includes(page.kind)||!text(page.title,140)||!text(page.eyebrow,100)||
      !Array.isArray(page.paragraphs)||page.paragraphs.length>8||!page.paragraphs.every(s=>text(s,1800)))throw new TypeError('Invalid page.');
    if(page.note!==undefined&&!text(page.note,500))throw new TypeError('Invalid page note.');
    if(page.sourceIds!==undefined&&(!Array.isArray(page.sourceIds)||page.sourceIds.some(id=>!ids.has(id))))throw new TypeError('Unknown source.');
  }
  return book;
}
