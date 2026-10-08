export function createReadingState(pageCount) {
  if(!Number.isInteger(pageCount)||pageCount<1||pageCount>40)throw new RangeError('Invalid page count.');
  const count=Math.ceil(pageCount/2);
  let phase='closed',spread=0;
  const clamp=n=>Math.max(0,Math.min(count-1,Number.isFinite(n)?Math.trunc(n):0));
  return {
    get isOpen(){return phase==='open';},get disposed(){return phase==='disposed';},
    get spread(){return spread;},get count(){return count;},
    open(index=spread){if(phase==='disposed')return false;spread=clamp(index);phase='open';return true;},
    go(index){if(phase!=='open')return false;const next=clamp(index);if(next===spread)return false;spread=next;return true;},
    close(){if(phase!=='open')return false;phase='closed';return true;},
    dispose(){phase='disposed';}
  };
}
