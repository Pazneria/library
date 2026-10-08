# Core and exit reconciliation

This isolated working copy starts from core PR3 commit
`6d0e838403499635b14cade63cc48e890291f775` and applies the completed exit worker's
source-only patch, SHA256 `eb80d77c8fe0a3b5723b31bf8b40aca41a138fc9879f269f5e31751625e3d55c`.
The original core, reading and exit checkouts remain preserved. No merge,
publication, preview server or browser/GPU/native input session is involved.

The conflicts in `package.json` and `src/main.js` are resolved by retaining all
core tests and the controls-button/menu-pause/canvas-focus hooks, then adding
the exit's tests, scene component, contextual hint and full cleanup callback.
The old `overlay.classList.contains('hide')` exit gate becomes `!look.menuOpen`.
The disposed-library gate protects both look and reader input. The `.card`
inside the native controls dialog remains the exit's controls-link mount.

Actual CPU construction found that the original exit anchor overlapped the
newly proud east-wall moulding. Its anchor x moves from 6.91 to 6.8963, a 13.7 mm
roomward shift; z, artwork, dimensions, materials and collision stay unchanged.
This provides just over 12 mm behind the door and about 50.3 mm between its
frontmost geometry and the closest legal camera, passing the existing 50 mm
near-plane check. This small remaining margin needs explicit rendered QA.
No geometry is removed and the exit remains four draw calls / 538 triangles.

A resource-ownership comment was reworded to avoid a comment-only false positive
in the existing strict public-source privacy check. The test was not weakened
and the disposal function's behavior is unchanged.

The exit's deduplicated scene disposal replaces separate book disposal during
navigation/unload so shared materials, textures, instance buffers and targets
are released once. Cached Back reconstruction and deliberate click/drag
navigation safeguards are retained. These are mock/API and CPU checked only.

The premium book and exterior art are not integrated here. Their source modules
and scene blocks remain the reviewed PR2/core versions for later coordination.
Apply their completed source work in this copy, preserve all control and exit
hooks, then rebuild the complete branch before the parent's joint native and
visual review. Do not publish this intermediate output separately.

If the premium book's eventual component owns animation/listener/timer work,
its non-scene shutdown must also run in `disposeLibrary` before scene resource
disposal. Keep one owner for GPU disposal to avoid releasing shared objects twice.
