// Extend the frozen CPU fixture for the new component's scoped DOM queries.
// This remains a mock DOM: it cannot certify native layout or dialog behavior.
export function addQueries(h) {
  const prototype=Object.getPrototypeOf(h.canvas);
  prototype.querySelector=function(selector){
    const className=selector.startsWith('.')?selector.slice(1):null;
    const visit=node=>{
      for(const child of node.children||[]){
        if(className?child.className.split(' ').includes(className):child.tagName?.toLowerCase()===selector)return child;
        const result=visit(child);if(result)return result;
      }
      return null;
    };
    return visit(this);
  };
  return h;
}
