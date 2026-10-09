import assert from 'node:assert/strict';
// Preserve the old exact-host guarantee after removing only the enumerated,
// reviewed study hooks. Missing or additional changes still fail the comparison.
export function withoutStudyHooks(source) {
  const newline=source.includes('\r\n')?'\r\n':'\n';let s=source;
  const hooks=[
    ["// Public Marginalia study is available on the ordinary Library route.\n// Explicit diagnostic opt-out skips its module, scene, textures and listeners.\nconst studyModule = new URLSearchParams(window.location.search).get('jippityStudy') !== '0'\n  ? await import('./secret-study/index.js') : null;\nif (studyModule && partialDisposed) throw Object.assign(new Error('Study loading cancelled'), { name: 'AbortError' });\nconst study = studyModule?.prepareStudy({ lib, books, materials: M, scene });\n",''],
    ['study?.attachBooks(bookMesh.material.map);\n',''],
    ['...exitGeometry.solids, ...(study?.solids || [])','...exitGeometry.solids'],
    ['  if (study?.door.blocks(x, z, feet, h, r)) return true;\n',''],
    ['reading?.isOpen || study?.isOpen || loop?.paused','reading?.isOpen || loop?.paused'],
    ["  setPaused: paused => {\n    loop?.setPaused('reading', paused);\n    if (paused && study?.isOpen) { study.closeNote(); look.pause(); }\n  }", "  setPaused: paused => loop?.setPaused('reading', paused)"],
    ["study?.install({ document, window, canvas, camera, player: P, solids, look, releaseMovement,\n  controls: overlay.querySelector('.card'), toast,\n  canInteract: () => !libraryDisposed && !reading.isOpen && !look.menuOpen && !loop?.paused && document.hasFocus(),\n  setPaused: paused => loop?.setPaused('study-note', paused),\n});\n",''],
    ['  if (study?.update(dt, P.pos)) renderer.shadowMap.needsUpdate = true;\n',''],
    ['exit?.dispose(); study?.dispose(); reading.dispose();','exit?.dispose(); reading.dispose();'],
    ['scene, camera, study, books: bookMesh','scene, camera, books: bookMesh'],
  ];
  for(const [added,original]of hooks){const exact=added.replaceAll('\n',newline);assert.equal(s.split(exact).length,2,'Expected exactly one reviewed study hook');s=s.replace(exact,original.replaceAll('\n',newline));}
  return s;
}
