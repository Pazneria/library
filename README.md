# Library

A walkable Hillside Library at the GitHub Pages destination
`https://pazneria.github.io/library/`. This is the separate optimized scene with
the owner-requested wood/paint separation and FPS mouse-look fixes.

The frozen Lab benchmark and previous optimized copy remain separate. This repo
contains one scene's source and compact production build, not the benchmark
catalogue, archives, dependencies, screenshots or private project data.

This combined review branch adds public reading, a bound Shapes & Sound book,
a Home exit and layered meadow/broadleaf woodland around the window views.
See [INTEGRATION_REVIEW.md](INTEGRATION_REVIEW.md) for the combined checks and
pending native/visual QA, and [EXTERIOR.md](EXTERIOR.md) for scenery tradeoffs.
It remains a draft; the earlier import/fix receipts describe the published base.

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

The central table holds a moss-green welcome book and a petrol-cloth bound
**Shapes & Sound** book with foil, ivory page edges and a plum bookmark.
Approach, look at an item and press **E**, or deliberately click it.
A small prompt appears within 2.2 m and is blocked by the room's collision
walls/furniture. The upper northwest writing desk uses its existing paper as
a discreet **Project Library** entrance.

Reading opens a paper-colored modal, releases mouse capture and pauses the
scene. Shapes & Sound presents six pages as three spreads; Previous/Next,
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

`src/reading-content.js` holds the welcome text and private destination link;
`src/jippity-book/content.json` holds the editable premium book text and sources.
`src/room-anchors.js` holds this building's three coordinates/interaction bounds.
Stable content IDs let a future building replace the room adapter.

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

All twelve combined CPU suites and the production build passed with Vite's
existing >500 kB chunk advisory. The premium physical book is 466 triangles and
one main draw call, adding 452 triangles and one main draw call over the replaced
marker. Three generated atlases estimate 7,340,032 RGBA bytes with full mipmaps;
this is construction accounting, not a measured GPU allocation.
Background headless Chromium checks exercise native pointer lock, dialog focus,
history, spreads and Home navigation on the laptop's Intel/ANGLE renderer.
Captured book, scenery and trim views are available in the separate handoff
evidence. Hardware mouse feel, physical display tearing and presented frame rate
remain owner checks. No claim of higher frame rate is made.

Project shelves and a physical private study remain future work. Personal
notes stay in the existing authenticated Project Library; the desk offers
navigation only.
