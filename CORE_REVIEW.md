# Seamless entry and physical trim review

This is a focused draft stacked on PR2 head `9718bb3`. It does not publish a
new live build or change the preserved `library-reading`, `library-fps`,
previous optimized source or frozen benchmark. No browser/GPU/native input
was used. The parent coordinates the combined book, exterior and exit release.

## Entry and controls

Production's full-screen card intercepted scene clicks. Its enter button could
retain focus after capture; the production keyboard handler ignores buttons.
The card also used an opacity transition. It has been removed, including the
introductory prose, entry button and first-entry instruction bar.

Keyboard walking works immediately in a focused, visible scene. Mouse capture
still requires a real click or Enter on the canvas. The first capture click
cannot also trigger a book. Capture acquisition keeps held walking keys;
unlock/blur/hidden/menu/reading clear them. The canvas receives focus after
capture and after closing a reader/menu, preventing stale button focus.

Esc or the discreet Controls button opens a native focus-trapped dialog that
pauses frames. Native cancel closes it without capture. Return to room closes
it, focuses the canvas and requests capture from that button's user gesture.
The reading modal keeps its Escape/Back/history behavior. A late capture after
pause/Escape is released; focus restoration never requests capture itself.
Look stays direct at 0.0026 radians/count with the same sensitivity and pitch
limits, raw-input retry and client-coordinate drag fallback. Walking speeds,
acceleration, gravity, stairs and collision are unchanged.

The authored entrance camera is established before compile/first draw. Capture
does not resize the canvas, reset the camera, change render scale or cross-fade
an overlay. Frame resume resets its timestamp. These are concrete transition
fixes; the reported visual glitch is still unrendered and unreproduced.

## Physical trim

The earlier audit found same-normal, axis-aligned coplanarity. The new audit
tests every triangle of all 1,412 oak/dark/walnut/gilt pieces against all 37
axis-aligned painted volumes using triangle/box SAT, including rotated braces
and curved wood. It found 183 intersecting piece pairs before and zero after.
An additional expanded-volume check gives all pre-bookcase architectural wood
12 mm clearance. Flush concealed furniture backs are not included in that
clearance claim; no triangle penetrating paint is exempted.

The complete lintel stands outside the main wall. Alcove beam ends stop before
the wall and their tops stop below the ceiling. Window stools have a broad
room-side part and a narrower reveal that fits the opening; casings sit proud.
Cornice profiles, trusses, gallery/rail/stair ends and bookcase cornice ends are
clear of the painted wall. The clock and mantel picture frame sit outside the
chimney plaster. There is no depth-bias, material or resolution workaround.

CPU comparison preserves all collision solids, lighting/window volumes,
decorative book instance streams, texture/material sources, reading content,
room anchors and book component. The source piece count stays 2,441. There are
382 focused geometry changes and 96 extra triangles for eight split sills,
merged into existing material batches. The UV random draw count is retained.
The 6,000-step movement trace matches the prior hash exactly.

## Integration hooks

- Core files: `src/look.js`, entry UI in `index.html`, the controls/reader wiring
  near `releaseMovement()` in `src/main.js`, and trim in `src/build.js`.
- Book component: `src/reading-scene.js` exports `addReadingBooks(scene, anchors,
  content)` and owns returned `dispose()`. That file is unchanged here.
- Book anchors: `src/room-anchors.js`, content IDs `welcome`, `drums`, `desk`;
  anchor IDs `table-welcome`, `table-drums`, `gallery-writing-desk`.
  Public text/links: `src/reading-content.js`. Both files are unchanged here.
- Reader API: `src/reading.js`, `installReading`, unchanged. It receives `look`,
  `releaseMovement`, `setPaused` and canvas `returnFocus` from main.
- Exterior's `terrainH` and sky/terrain/tree construction in `src/main.js` are
  exact here. Exit work should add its own component/anchor and preserve these
  core control hooks and existing collision/reader pause behavior.

## Validation and remaining work

`npm test` runs 13 mock-input look groups, nine reading groups, actual movement
on first entry, and the full geometry/12 mm audit. `tests/compare-core.mjs` is a
one-time handoff comparison against the separately preserved sibling checkout.
Production build, output hashes and a bounded static localhost route check
are included in the handoff receipt. These do not execute browser JavaScript.

Hold the draft for the parent's joint graphics slot. Verify native entry,
pointer-lock/Escape/dialog focus, reading/history and the reported transition
glitch; inspect all trim and the pending premium book/exterior/exit together.
No frame-rate or final visual acceptance claim is made. Existing preview
ownership is unchanged; no new permanent server was started.
