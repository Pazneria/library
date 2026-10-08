# Combined Library review

This isolated working copy starts from core PR3 commit
`6d0e838403499635b14cade63cc48e890291f775` and applies the completed exit worker's
source-only patch, SHA256 `eb80d77c8fe0a3b5723b31bf8b40aca41a138fc9879f269f5e31751625e3d55c`.
The original core, reading and exit checkouts remain preserved. No merge,
publication, preview server or browser/GPU/native input session is involved.
The final review branch also includes the completed frozen exterior and premium
book. Earlier core-plus-exit and exterior integration commits and receipts remain
preserved. The PR proposes the complete source with its matching static build.

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

The composite premium/legacy reader's disposal runs in `disposeLibrary` before
scene resource disposal. It stops reader animation, clears its bounded history
timer and removes DOM/input/history listeners. GPU disposal stays with the host;
the physical component's standalone disposer is not called a second time.
The host now also clears disposed CanvasTexture image references so generated
atlases are not retained by a room waiting in browser history.

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
previous combined commit `6331682` exactly after line-ending normalization at
the preserved exterior integration commit `90be695`.
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
The recursive public-source check includes nested exterior/book modules and
retains the privacy boundary. All eleven combined CPU suites and the rebuilt
static output are recorded in the final handoff receipt.

## Frozen premium book

Task 16's completed snapshot and content-addressed archive are preserved:
`194229d49b23f4b37cf0d4d7bf9186b90093dc6eeeef8a709da59033f779b29a`.
All 38 frozen file hashes and the timing/hash receipt were verified. Eleven
runtime files in `src/jippity-book/` match the frozen delivery byte-for-byte.
The supplied five test files are copied under `tests/premium-book/`; only their
relative runtime import prefixes change, with every assertion preserved.

Only the three documented `main.js` hooks change from `90be695`: import the
adapter, construct via `addHillsideBooks`, and install via `installHillsideReading`
with the existing camera/solids and all existing reader arguments. Thirty prior
source/test files remain byte exact. No movement, collision, lighting, scale,
trim, exit geometry, exterior art or private-entry content is changed.

The adapter filters out the old table-drums marker and old drum-reader target.
Actual combined construction finds one welcome book and one premium book,
without overlap against each other or the 2,441 room pieces. The premium book
is 466 triangles and one main draw call; the two readable books together are
480 triangles and three main draws, a net increase of 452 triangles/one draw.
Generated atlas storage estimates 5,505,024 base RGBA bytes and 7,340,032 with
full mipmaps. Shadow updates and optional prepass costs are additional.

The new combined test exercises the actual core look, premium adapter, legacy
reader and exit together with mock DOM/history. Deliberate scene capture, direct
mouse counts, premium click-to-read, canvas focus return without recapture,
welcome/desk modal exclusivity, private entrance link, exit during premium
reading, timer/listener disposal and one-time GPU resource disposal all pass.
The standalone reader/room/adapter checks also pass against copied runtime.

Six editable pages form three spreads. Page controls, Escape and browser
Back/Forward use the existing host pause/capture hooks; no request, credentials,
private data or persistence API is added. Source links remain deliberate HTTPS
links. CPU mocks do not establish native focus, history, accessibility or feel.

The parent still holds the graphics slot. No browser/GPU/native input or new
preview is used for this integration. GLSL compilation, rendered appearance,
trim/door near-plane inspection and native performance remain untested.
