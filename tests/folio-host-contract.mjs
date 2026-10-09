import assert from 'node:assert/strict';
// Remove only the reviewed Folio integration, retaining the exact older host
// comparisons for art, books and Marginalia. Unexpected main edits still fail.
export function withoutFolioHooks(source) {
  if (!source.includes("'./reading-seat/hillside.js'")) return source;
  const newline=source.includes('\r\n')?'\r\n':'\n';let s=source;
  const hooks=[
    ["import { mountFolioSeat, folioApproach } from './reading-seat/hillside.js';\nimport { installReadingSeat } from './reading-seat/interaction.js';\nimport './reading-seat/seat.css';\n",''],
    ["const folio = mountFolioSeat(scene);\nconst seatOccluders = [...lib.B.solids, ...exitGeometry.solids, ...(study?.solids || [])];\nconst solids = [...seatOccluders, ...folio.solids];", "const solids = [...lib.B.solids, ...exitGeometry.solids, ...(study?.solids || [])];"],
    ['let reading = null, loop = null, seat = null;','let reading = null, loop = null;'],
    ["  setMenuPaused: paused => {\n    loop?.setPaused('controls', paused);\n    if (paused) seat?.cancel();\n  },", "  setMenuPaused: paused => loop?.setPaused('controls', paused),"],
    ["    loop?.setPaused('reading', paused);\n    if (paused) seat?.cancel();", "    loop?.setPaused('reading', paused);"],
    ["  setPaused: paused => {\n    loop?.setPaused('study-note', paused);\n    if (paused) seat?.cancel();\n  },", "  setPaused: paused => loop?.setPaused('study-note', paused),"],
    ["\nseat = installReadingSeat({document,window,canvas,player:P,camera,chair:folio.chair,solids:seatOccluders,\n  canInteract: () => !libraryDisposed && !reading.isOpen && !study?.isOpen && !look.menuOpen && !loop?.paused &&\n    document.visibilityState === 'visible' && document.hasFocus() &&\n    (seat?.ownsMovement || Math.hypot(P.pos.x-camera.position.x,P.pos.z-camera.position.z)<.05),\n  canStandAt: ([x,y,z]) => Math.abs(groundAt(x,z,y)-y)<.01 && !blocked(x,z,y,crouch?1.15:P.height),\n  recoverStanding: () => {setView(0);updatePlayer(0);},releaseMovement,\n  standingEyeHeight: () => crouch?1.0:P.eye,toast\n});\nconst findSeat = document.createElement('button');findSeat.type='button';findSeat.className='seat-find';\nfindSeat.textContent='Find the Folio chair';overlay.querySelector('.card').append(findSeat);\nfunction findFolio() {\n  if (libraryDisposed) return;\n  seat.cancel();releaseMovement();\n  const view=folioApproach(folio.chair,crouch?1.0:P.eye);\n  P.pos.set(...view.position);P.smoothY=P.pos.y;P.vy=0;P.eyeCur=crouch?1.0:P.eye;\n  P.yaw=view.yaw;P.pitch=view.pitch;updatePlayer(0);drawFrame();\n  toast('Folio at the window alcove. Return to room, then press E to sit.');\n}\nfindSeat.addEventListener('click',findFolio);\n",''],
    ['  if (seat?.ownsMovement) seat.update(dt); else updatePlayer(dt);','  updatePlayer(dt);'],
    ['reading.updateHint(); exit.updateHint(); seat?.update(0);','reading.updateHint(); exit.updateHint();'],
    ["  seat?.dispose();findSeat.removeEventListener('click',findFolio);findSeat.remove();\n",''],
    ['  folio.releaseReferences();\n',''],
  ];
  for(const [added,original]of hooks){const exact=added.replaceAll('\n',newline);assert.equal(s.split(exact).length,2,'Expected exactly one reviewed Folio hook');s=s.replace(exact,original.replaceAll('\n',newline));}
  return s;
}
