// Scheduling only; preserves the existing simulation and render functions.
export function createFrameLoop({ tick, request, cancel, now }) {
  const reasons = new Set();
  let frameId = null, disposed = false, last = null;
  function schedule() {
    if (!disposed && !reasons.size && frameId === null) frameId = request(frame);
  }
  function frame(time) {
    frameId = null;
    if (disposed || reasons.size) return;
    const seconds = last === null ? 0 : Math.max(0, (time - last) / 1000);
    last = time;
    tick(time, seconds);
    schedule();
  }
  return {
    start() { last = now(); schedule(); },
    setPaused(reason, paused) {
      if (paused) reasons.add(reason); else reasons.delete(reason);
      if (reasons.size && frameId !== null) { cancel(frameId); frameId = null; }
      last = null; schedule();
    },
    get paused() { return disposed || reasons.size > 0; },
    dispose() { disposed = true; if (frameId !== null) cancel(frameId); frameId = null; }
  };
}
