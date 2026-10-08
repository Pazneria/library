# Core, exit and frozen exterior integration

This isolated working copy starts from core PR3 commit
`6d0e838403499635b14cade63cc48e890291f775` and applies the completed exit worker's
source-only patch, SHA256 `eb80d77c8fe0a3b5723b31bf8b40aca41a138fc9879f269f5e31751625e3d55c`.
The original core, reading and exit checkouts remain preserved. No merge,
publication, preview server or browser/GPU/native input session is involved.
The next local commit also includes the completed, frozen exterior source;
the earlier core-plus-exit commit and handoff receipt remain preserved.

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

The premium book is not integrated here and its active workspace has not been
inspected. Its modules remain the PR2/core versions for later coordination.
Apply its completed source work in this copy, preserve all control and exit
hooks, then rebuild the complete branch before the parent's joint native and
visual review. Do not publish this intermediate output separately.

If the premium book's eventual component owns animation/listener/timer work,
its non-scene shutdown must also run in `disposeLibrary` before scene resource
disposal. Keep one owner for GPU disposal to avoid releasing shared objects twice.

## Frozen exterior integration

The frozen exterior commit is `7b1d4c873ae04ff8fa3701da6275412147917171`, delivered
from the separate October 8 task 17. All nine entries in its existing hash
receipt match, including the original source patch and archive. The three
`src/exterior/` modules and exterior test are copied byte-for-byte; the entrant
checkout, archive, evidence and receipts remain unchanged.

Applying only `exterior-source-only.patch` to the core-plus-exit source needed
one import conflict resolved by retaining both sets of imports. Only the old
sky/terrain/cone-tree block is replaced with `createExterior({ sunDirection:
sunDir })` and `scene.add(exterior.group)`. Code outside that hook matches the
previous combined commit `6331682` exactly after line-ending normalization.
Core architecture, input, camera, lighting, render scale, reader and exit
behavior remain preserved. The analytic hillside is checked against the old
function on 7,505 samples. The exterior creates no collision solids.

The frozen construction inventory is 51,700 exterior triangles, an upper bound
of 14 draw submissions, three materials and 87,380 texture bytes with mipmaps.
The previous backdrop used 107,560 triangles and three submissions. The added
draw submissions are a tradeoff; these are CPU scene counts, not GPU timing.
No animation, per-frame update, lights or exterior shadow work are added.

Full host cleanup traverses the attached exterior and releases its real shared
geometry/materials, shader texture and instance buffers once. It intentionally
does not also call `exterior.dispose()` because the host already owns scene GPU
disposal. The frozen module's standalone disposal test also passes unchanged.
The recursive public-source check includes nested exterior modules and retains
the privacy boundary. All seven combined CPU suites and the rebuilt static
output are recorded in the combined handoff receipt.

The parent still holds the graphics slot. No browser/GPU/native input or new
preview is used for this integration. GLSL compilation, rendered appearance,
trim/door near-plane inspection and native performance remain untested.
