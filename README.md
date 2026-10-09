# Library

A walkable Hillside Library at the GitHub Pages destination
`https://pazneria.github.io/library/`. This is the separate optimized scene with
the owner-requested wood/paint separation and FPS mouse-look fixes.

The frozen Lab benchmark and previous optimized copy remain separate. This repo
contains one scene's source and compact production build, not the benchmark
catalogue, archives, dependencies, screenshots or private project data.

Published main includes public reading, a bound Shapes & Sound book, a Home exit
and layered meadow/broadleaf woodland around the window views. This book pass
extends the existing bound asset to the welcome and a public shelf notebook.
See [ROOM_GUIDE.md](ROOM_GUIDE.md) for room coordinates, the reusable content and
placement pipeline, integration boundaries and pending rendered QA.
[INTEGRATION_REVIEW.md](INTEGRATION_REVIEW.md) records the earlier integration;
[EXTERIOR.md](EXTERIOR.md) explains the scenery tradeoffs.

## Controls

Startup uses a dark neutral Library screen with four real construction stages.
It fades only after the initial authored view is drawn; reduced motion hides it
immediately. Errors offer an accessible Try again button, including a failed
module download. Navigation cancels unfinished loading and releases its resources.

Walking is available on arrival, before mouse capture. There is no introductory
screen to dismiss. Click clear scene space to focus it and capture the mouse; Esc
releases it and opens a compact controls dialog. Mouse input
changes camera rotation directly, with no look interpolation or inertia. Raw
input is requested where supported; ordinary pointer lock and left-drag are
fallbacks. Mouse sensitivity defaults to 0.0026 radians/count and can be adjusted
from 40–220%. Pitch stops just short of vertical. Unlocking, changing focus or
hiding the tab clears movement input and requires a fresh click to capture.

WASD/arrows walk, Shift walks faster, C crouches, 1–5 select viewpoints, R
resets, F shows frame stats, P changes render scale and H hides hints. Walking,
stairs and collision behavior are unchanged. The current scene uses desktop
keyboard and mouse controls; touch controls have not been added.

## First shelf

One walnut and umber-leather **Folio** chair faces the west windows at the east
edge of the reading alcove. In Controls, choose **Find the Folio chair**, then
**Return to room**. Aim at it and press **E**, or deliberately click after
focusing the scene. Mouse look stays active while seated. **E**, **Escape**, or
**Stand up** returns to clear standing ground. Reduced motion skips settlement.
The existing alcove chairs and room art remain in place. See
[the sitting integration](src/reading-seat/README.md) for ownership and checks.

The central table holds a moss-green bound welcome book and a petrol-cloth
**Shapes & Sound** book, both using the existing foil, page-edge and ribbon asset.
A small oxblood **A Working Notebook** lies on the north shelf downstairs.
Approach, look at an item and press **E**, or deliberately click it.
A small prompt appears within 2.2 m and is blocked by the room's collision
walls/furniture. The upper northwest writing desk uses its existing paper as
a discreet **Project Library** entrance.

Inspection opens a quiet detail view, releases mouse capture and pauses the
scene. Read this book opens its pages; Book details returns without losing the
current spread. Controls also offers a keyboard-accessible Public books list.
Shapes & Sound presents six pages as three spreads; Previous/Next,
the spread selector, Left/Right, Page Up/Down and Home/End turn pages. Reduced
motion skips reader animation, and narrow layouts stack the pages in order.
Escape, the reader's return button, or browser Back closes it. Focus returns to
the scene canvas; a fresh click/Enter resumes mouse capture. Background tabs,
blurred windows and open reading pages do not keep scheduling scene frames.
Closing the page tears down the added listeners, frame loop and book resources.

The find explains ideal isospectral drumheads and the stronger homophonic
point-strike example, with two primary papers linked. It makes no claim that
arbitrary real rooms or recordings sound identical. Jippity's presence is the
small book signature and the selected reading, with no simulated chat/activity.

`src/library-books/catalog.js` and its public JSON editions hold the welcome and
notebook; `src/jippity-book/content.json` retains Shapes & Sound.
`src/library-books/placements.js` holds their independent copy transforms.
`src/reading-content.js` and `src/room-anchors.js` retain the existing desk
destination and legacy compatibility records. Stable IDs let another building
replace placements without rewriting pages.

The desk creates only a user-activated link to the existing authenticated
Project Library. Public source inspection reveals its destination, not private
notes or decisions. The public scene requests, embeds and stores no private
response; it has no private-content cache, local password or substitute auth.
The existing workspace's server-side gate, audience and storage are unchanged.

The southeast oak door returns to the homepage in the same tab through E or
a deliberate click. Home links in the controls/legacy reader and Alt+X provide
additional access. Leaving stops the frame loop and input, disposes both reader
types, and releases shared scene resources once. Generated canvas references
are dropped. A cached Back restoration reconstructs the disposed scene.

## Marginalia study

The ordinary Library route includes Jippity's quiet study with public sample
content only. Open Controls and choose **Find the hidden study**, then **Return
to room**. This places you at the north bookcase, two bays right of the notebook.
Aim at its brass ornament and press **E**, or deliberately click it: the latch
pulls and tilts, then the bookcase swings inward. Walk through the opening.
The doorway is continuous geometry, with collision protection throughout its arc.

Inside, aim at the desk's loose page and press **E** to read the public note.
Escape returns to the study. The inside brass pull closes/reopens the case;
**Return to Library** provides a keyboard-accessible fallback. The entrance is
theatrical, not authentication; the existing authenticated Project Library desk
destination and all private records remain separate and unchanged.

The reviewed brass latch is retained. The separate experimental book polish and
ginkgo latch are not part of this release. `?jippityStudy=0` is an explicit
diagnostic opt-out; no query is required to find or enter the study normally.

## Build and preview

The lockfile retains Three 0.170.0 and Vite 5.4.21. With Node and dependencies:

```sh
npm ci
npm test
node tests/exterior.test.mjs
npm run build
npm run preview
```

Build output is tracked in `docs/`. Vite's `/library/` base makes asset paths
work under the shared GitHub Pages hostname. A local Vite preview uses
`http://127.0.0.1:5418/library/`; choose another free port when the owner's
existing preview is running.

The build script also refreshes `BUILD.json`; `public/.nojekyll` is copied into
`docs/` on each build so the Pages marker survives Vite's output cleanup.

## Hosting

Publish `main` from `/docs` using the existing GitHub Pages project convention.
The homepage repository links to `/library/`; it should advertise the route
only after the scene is published and its assets have been verified.
No runtime backend, private storage, credential or Site audience change is
part of this base scene.

After a source edit, build and commit the matching `docs/` output in the same
pull request. Keep dependencies, the benchmark originals and local receipts out
of the deployed directory.

## Fixes and verification

The core follow-up places the entire alcove lintel outside the painted wall,
ends alcove beams before the wall and below the ceiling, and clears window
casings/reveals, cornices, rotated truss braces, gallery ends and stair edges.
Architectural wood keeps 12 mm of physical clearance from paint. Materials,
lighting, textures, decorative books and collision solids are preserved.

Bounded CPU comparison against the prior optimized source found 66 exposed
near-coplanar wood/paint pairs before and zero after. It verified 39 focused
wood changes, exact other geometry/book/light/window streams, unchanged
collision solids and an identical 6,000-step movement trace. Those comparisons
require the separately preserved original and are recorded in `PROVENANCE.md`.
That earlier audit examined same-normal axis-aligned near-coplanar faces only.
The follow-up tests every transformed wood triangle against all 37 painted
volumes using SAT: 183 intersecting piece pairs before, zero afterward, with
no intersecting wood exempted. Flush concealed furniture backs are outside the
12 mm architectural-clearance claim. See `CORE_REVIEW.md`.

Portable look tests exercise the actual module with mock DOM/pointer-lock
events. They cover sensitivity, pitch, direct camera updates, fallback,
focus/visibility, pending Escape cancellation and independence from simulated
render cadence.

The earlier twelve combined CPU suites and production build passed with Vite's
existing >500 kB chunk advisory. The premium physical book is 466 triangles and
one main draw call, adding 452 triangles and one main draw call over the replaced
marker. Three generated atlases estimate 7,340,032 RGBA bytes with full mipmaps;
this is construction accounting, not a measured GPU allocation.
Background headless Chromium checks exercise native pointer lock, dialog focus,
history, spreads and Home navigation on the laptop's Intel/ANGLE renderer.
Captured book, scenery and trim views are available in the separate handoff
evidence. Hardware mouse feel, physical display tearing and presented frame rate
remain owner checks. No claim of higher frame rate is made.

The current book pass runs fourteen CPU suites and uses three physical-book
draws, 1,398 submitted triangles and 14,330,539 estimated RGBA texture bytes with
full mipmaps. It shares geometry/masks, creates reader detail DOM lazily and has
an explicit four-copy ceiling. These are construction counts, not performance
measurements; native/visual QA awaits the parent graphics slot.

The shelf notebook is a public project-book sample. Personal notes stay in the
existing authenticated Project Library; the desk offers navigation only.
