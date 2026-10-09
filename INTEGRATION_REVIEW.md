# Combined Library review

This isolated working copy starts from core PR3 commit
`6d0e838403499635b14cade63cc48e890291f775` and applies the completed exit worker's
source-only patch, SHA256 `eb80d77c8fe0a3b5723b31bf8b40aca41a138fc9879f269f5e31751625e3d55c`.
The original core, reading and exit checkouts remain preserved. Source integration
used CPU checks; final review also uses a bounded headless browser after the parent
assigned the exclusive graphics slot. No merge, publication or persistent preview
server is involved, and foreground input is untouched.
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
retains the privacy boundary. All twelve combined CPU suites and the rebuilt
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

## Loading and entry transition

The host has a dark neutral `#111318` loading cover, a small Library label, four
subtle stage segments and a live status. Stages yield for paint before actual
graphics setup, room construction, scenery and final view preparation. There is
no simulated percentage, introductory prose or required Enter button. The first
authored camera draw precedes the 180 ms cover fade; canvas opacity is unchanged.
Reduced motion removes the fade. Keyboard movement is ready after loading, and
mouse capture still requires a deliberate scene gesture.

Module-download and WebGL/startup failures show a plain error and Try again.
Partial startup cancellation and disposal release paint tasks and constructed
resources; a cached partial startup reloads. Loaded cached pages retain the
existing focus/page pause behavior. Full exit disposes the loader with its scene.
All 47 prior source/test files outside `main.js` remain exact, including every
frozen book and exterior module. The host additions are `loading.js`, loading
markup/styles/error bootstrap and staged startup/cleanup hooks.

## Native/rendered scope

One background Chromium at a time uses the existing installed test runtime,
1280x800 CSS/drawing-buffer resolution and DPR/render ratio 1, with the same
Intel/ANGLE D3D11 renderer, tone mapping and 4096 sun shadow map as published
baseline `b940eb5`. Native entry walking, deliberate pointer lock, direct mouse
counts, controls focus, three spreads, Escape, Back/Forward, the welcome/private
desk link and same-tab Home cleanup are checked without foreground input.
Loading failure/retry, reduced motion and navigation cancellation receive
separate cases in the same bounded browser process.

Screenshots cover authored views, nearby alcove beam/trim, the book, narrow reader,
woodland through three windows and the exit's closest-camera margin. Physical
display tearing and subjective mouse feel cannot be certified by headless images.
Cached-Back behavior is CPU-tested; the receipt states whether the browser
actually used its page cache. Private destinations are never opened.

Matched-view renderer counts and callback timings are evidence, not presented
FPS. Draw-plus-`gl.finish` JS wall times depend on driver synchronization semantics
and are not GPU timer measurements. The small cold/warm sample is not a laptop
performance guarantee. The final receipt records cleanup and explicit release of
the graphics slot; no other preview/server ownership changes.

The final laptop sample uses Intel Graphics through ANGLE D3D11. Baseline versus
combined main-pass calls across the five matched authored views are
`32/43`, `29/38`, `29/39`, `29/39` and `34/50`. New scenery, book and exit increase
submissions. One cold pair reached the public debug API in 2.24 s / 2.34 s.
The 90 recorded callback intervals had p95 7.4 ms / 16.6 ms and no sample over
33 ms; these short headless scheduling samples do not establish presented FPS.
Warm app callback p95 was 0.8 ms in both. No performance improvement is claimed.

All normal native cases passed and 22 scene/reader screenshots were hashed.
The browser actually restored the Library from its page cache, then the explicit
exit reconstruction hook reloaded it. Entry capture left camera, canvas size and
canvas image exact. Module failure/retry and unavailable-WebGL/reduced-motion
cases pass. Cancellation uses an explicitly dispatched browser `pagehide` to
inspect state before subsequent navigation destroys the reporting channel; it
does not claim a trusted-navigation event trace. Earlier harness failures and
the production script-ID fix remain recorded in the separate raw evidence.
