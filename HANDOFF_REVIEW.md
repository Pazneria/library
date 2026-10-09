# Homepage entry preview handoff

This branch starts from live Library main `4a9b6aad25c2291470da9e9ad219472f3ae3d173`. It consumes the approved homepage entry preview without changing room artwork, movement, mouse look, quality settings, reading, exterior or exit behavior.

## Pinned shared contract

- Homepage commit: `715d292a94ddda4f92eaf3c67b3f18edb073ed47`.
- Contract: `Pazneria/pazneria.github.io/docs/room-handoff.md` at that commit.
- Canonical inline source: `assets/js/room-handoff.js`, Git blob `846960bd15c10cfb1bcf835173022bc42bcdbd19`. Its exact bytes are inserted after the charset/viewport metadata and before styles/runtime. The CPU test verifies the Git blob hash of the inline copy.
- Transport remains the canonical same-tab, same-origin, single-use `sessionStorage` key `pazneria.room-handoff.v1` with a 15-second validity window and exact image/path allowlist. No alternate transport or shared-script download is introduced.
- The Library image stays at homepage-origin `/assets/images/rooms/library-entry.jpg`; it is not copied or regenerated. Capture metadata: 1707 × 923, 237295 bytes, SHA256 `d8892413d57035d3c8164eeb5325ef774316a76b1acf52ba608302ee609737b8`.

## Destination behavior

A valid incoming record paints the shared image cover early and hides the Library's normal loading indicator. The existing initialization builds essential scene content, compiles/uploads its textures and draws the default hearth view before calling the shared `ready()`. Player feet stay `(3.4,0,4.3)`, camera `(3.4,1.62,4.3)`, yaw `.78`, pitch `.1`, zero velocity, Euler `YXZ`, vertical FOV 70, near `.05`, far 2500, current viewport aspect.

The existing paused-loop input checks gate walking, looking, controls and reading while the shared cover is active. A `MutationObserver` waits for actual cover removal, including the canonical 160 ms fade or immediate reduced-motion removal, before releasing the handoff pause. Focus returns to the canvas only when the document is visible and focused. Back restoration clears the handoff pause; pagehide/disposal disconnect reveal observation.

The canonical bridge retains Home/Cancel, keyboard focus handling, an 8-second Retry/Home recovery, one-shot consumption, forced-colors fallback and Back cleanup. Initialization and module-load failures call its `fail()` and expose the Library's existing error/Retry interface. Invalid/missing tokens, storage denial, direct links and absent homepage deployment retain ordinary Library entry without a network dependency on the shared script. JavaScript-disabled entry retains the existing message.

## Verification and publication

CPU checks exercise the real inline bridge (not a duplicate fixture), validity and one-shot behavior, head installation, delayed body/retry, reduced motion, accessibility changes, failure/Back cleanup, loader/focus release, and the authored camera pose. The existing CPU suite and Vite production build must pass before PR delivery.

No browser, server or GPU session is part of this branch's verification. Combined homepage-to-Library visual QA is still required: cached/uncached image decode, first essential rendered frame, desktop/portrait crop and HUD alignment, fade/input timing, keyboard Cancel/Retry, failure and Back. The cover cannot guarantee uninterrupted physical pixels across document navigation. Parent coordinates combined QA and publication; this branch is a draft and must not deploy independently.
