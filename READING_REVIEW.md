# First shelf: review and verification

This records PR2's reading foundation. `CORE_REVIEW.md` supersedes its entry,
return-focus, trim and look-test details for the core follow-up derivative.

This layer was prepared as a draft under a browser/GPU hold. The source review
and checks below use CPU construction and mock DOM/API events, not a rendered
walkthrough or native input. No frame-rate improvement is claimed.

## Experience and boundary

Two small closed books sit in clear space on the existing central table. The
welcome page introduces the room; **Shapes & sound** explains the ideal
isospectral/homophonic drum result and links the two primary papers. The existing
paper on the upper northwest writing desk opens a neutral invitation and one
link to the authenticated Project Library.

The desk is navigation only. The public code openly contains its destination
URL. No private response, project question, personal note, token, client password,
private cache, automatic request or substitute authentication is present. This
work does not inspect or change the private site's gate, audience or storage.

Public labels, cover text/colors, paragraphs and links are in
`src/reading-content.js`. `src/room-anchors.js` contains only IDs, kinds,
coordinates, orientation and interaction bounds. Replacing that adapter can move
the same content into another winning building.

## CPU evidence

- Eleven look check groups cover the existing FPS controls plus reader pause,
  fresh recapture, late pending capture cancellation and listener disposal.
- Nine reading check groups exercise real modules: ray reach/wall occlusion,
  actual room approaches and decorative-book/furniture clearance, content schema
  and request/storage absence, modal keyboard/history/focus transitions, external
  destination links, independent frame pause reasons, disposal and replacement
  room anchors. Network calls observed by the reader test: zero.
- Actual room construction uses stubbed textures without a WebGL renderer.
  All three anchors are reachable from plausible standing approaches. The desk
  is out of reach from downstairs; both new book bodies clear existing objects.
- The renderer/lighting/terrain setup, movement/collision functions, and base
  `build.js`, `books.js`, `textures.js` are checked against the published base.
- Added marker construction: two draw calls, 28 triangles, one 512×384 texture,
  no lights or shadow casters. Picking examines three targets and the existing
  collision boxes at most eight times per simulation second, not every
  decorative book on every frame.
- Vite build and `/library/` static asset routing checks pass. `BUILD.json`
  records source and output hashes; `.nojekyll` survives rebuilds through
  `public/`. The existing >500 kB bundle advisory remains.

## Lifecycle review

Opening a page clears movement, releases/cancels capture and stops scene frames.
Escape, the return buttons and browser Back close it; Forward can reopen the
public page. History stores only a public content ID. Returning to controls
requires a fresh click/Enter; text controls and modal focus cannot move the
player. Visibility, focus and page lifecycle have independent pause reasons,
and resume resets the frame timestamp. Normal page close removes added
listeners and disposes the instance buffers, geometry, materials and texture.
The initial frozen background uses the authored entrance camera.

## Checks still held

Parent clearance is required before any browser/GPU QA or publication of this
draft. Verify native pointer-lock/dialog/history behavior, keyboard focus,
physical cover/prompt readability, exact visual occlusion by small props,
desktop/narrow layout and subjective performance in a single coordinated
session. The existing base preview and live main were left alone.
