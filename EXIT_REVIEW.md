# Library exit handoff

This retains the standalone exit worker's review. `INTEGRATION_REVIEW.md`
records the new controls gate and the final 13.7 mm anchor adjustment against
the core trim; those integration details supersede the original placement below.

Implemented in an isolated copy on `codex/entrance-exit`, based on reading-layer
commit `9718bb3fddc9b4988d45fae858bab9c73b6a65b4`. This is a held integration
patch: nothing is published or merged, and no browser, GPU session, native UI,
preview server or performance run was started.

## Placement and design

The actual room has no modeled exterior door. Its four shell walls are closed;
the named entrance viewpoint is `[3.4, 0, 4.3]` by the hearth. The sensible exit
bay is the east wall beside the staircase foot, centered at `[6.91, 0, 7.75]`,
facing west. It sits between the stair end (`z=6.7`) and the south bookcase
(`z=8.6`) and over the existing entrance wainscot. Its approach uses the clear
aisle east of the hearth seating.

The north wall is filled by lower and gallery bookcases. A south-wall exit would
displace the fireplace or shelving. The west alcove is already a complete
window-and-reading composition. The southeast bay gives the exit an ordinary
architectural role without disturbing those focal points or adding a room.

The door uses existing oak, dark wood and brass: shallow recessed panels,
planted mouldings, an oak casing/cornice, a small latch and hinges. The modest
dark plaque reads EXIT / HOME, with a brass rim and a low emissive contribution
for readability in the existing warm light. It adds no lights, shadow casters,
door animation, wall cut or collision solids. All joinery clears existing
geometry; the plaque clears the camera near plane at the closest legal position.
Appearance still needs rendered acceptance in the coordinated QA window.

## Files and integration hooks

- `src/exit-content.js`: public destination, labels, plaque text and instructions.
- `src/exit-anchor.js`: room-specific placement, dimensions, bounds and reach.
- `src/exit-scene.js`: independent geometry and plaque artwork, using room materials.
- `src/exit.js` / `src/exit.css`: interaction and small accessible affordances.
- `src/exit-resources.js`: deduplicated geometry/material/texture/instance/target teardown.
- `tests/exit.test.mjs`: focused CPU tests, including actual room construction.

`src/main.js` is the only existing runtime source changed. Its small hooks add
the exit after room construction, install the controller after the reader,
update its contextual hint at the existing 8 Hz cadence, and share an idempotent
`disposeLibrary` between explicit navigation and non-cached page teardown.
It stops movement/look and the frame loop, disposes controller/reader/listeners,
then releases scene and renderer resources before same-tab `location.assign`.
The full scene is traversed before clearing, including reading-book resources;
calling their former standalone disposal as well would double-dispose them.

For the core owner's current entry/controls changes, preserve the exit imports,
geometry addition, hint update and `beforeLeave: disposeLibrary` callback. Bind
`controls` to the owner's controls content container (currently `.card` inside
`#overlay`) and retain the owner's current room interaction gate. The exit module
itself never requests pointer lock. Merge source hooks into the combined branch
and rebuild there; do not use this branch's built bundle to overwrite the core,
exterior or premium-book work.

The unchanged files include `build.js`, `books.js`, `textures.js`, `look.js`,
`reading.js`, `reading-scene.js`, `reading-content.js`, `room-anchors.js`,
`interaction-core.js`, `frame-loop.js`, `index.html` and the dependency lockfile.
No other checkout or frozen SceneBench file was modified. The exit contains only
the public homepage URL, and makes no private-content requests.

## Interaction and lifecycle

Look at the door within 2.2 m and press E or make a deliberate plain click. A
small prompt appears only while the exit is aimed at and reachable. Dragging to
look, capture transitions, blur and stray clicks cannot trigger navigation.

The controls menu and reading footer each contain a real same-tab exit link.
Alt+X works from the room, a reading panel or focused controls, while text inputs
remain protected. A native focusable link is also revealed on keyboard focus;
the canvas description tells screen-reader users where and how to leave. These
paths do not depend on pointer lock or the nearby interaction gate, so closing a
reader or losing capture does not trap the visitor.

Exit uses `https://pazneria.github.io/` in the same tab and keeps normal browser
history. If Back restores the explicitly disposed document from the page cache,
a one-time `pageshow` handler reloads it to reconstruct the Library. Capture
still needs a fresh gesture. Ordinary cached navigation away uses the existing
core pause/resume behavior. There is no automatic navigation just from walking
up to the door, and Escape continues to open the existing controls.

## CPU verification and limits

30 check groups pass: 11 existing look, 9 existing reading, 10 focused exit.
The exit tests cover destination/same-tab behavior, actual host teardown order,
duplicate cleanup, resource ownership, DOM and listener cleanup, Back rebuild,
Escape/unlock and reader exit alternatives, focus links, typing/repeat guards,
pointer-locked and fallback drag separation, and failure-safe navigation.

Actual room construction with texture stubs verifies every new geometry piece
against existing pieces, byte-identical collision solids, a continuous approach
for the 280 mm player radius, close-camera clearance, downstairs reach and no
activation from upstairs or beyond reach. No rendering occurs in these checks.

The added static geometry is four draw calls and 538 triangles, plus one 512x256
plaque atlas. This is a construction budget, not an FPS claim. The source build
passes with Vite's existing >500 kB advisory. The manifest and 23 source/build
file hashes pass static checks; both `/library/assets/` references resolve to
the generated files, and the Pages marker is present. Production output is
558,079 bytes for this standalone integration against the reading-layer base.

Commands run:

```text
node tests/look.test.mjs
node tests/reading.test.mjs
node tests/exit.test.mjs
node node_modules/vite/bin/vite.js build
node scripts/build-manifest.mjs
node ../exit-static-check.mjs
git diff --check
```

Existing dependencies were copied into this task's isolated `node_modules`;
none were installed or changed in another checkout. No server or session needs
stopping. The copy and patch remain available for integration. Remaining gates
are combined source integration and parent-cleared visual/native QA: doorway
beauty and plaque readability, first-gesture pointer lock, click/drag feel,
Escape/Tab/reader focus, same-tab destination and browser Back on a real browser.
