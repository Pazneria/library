# Library

A walkable Hillside Library at the proposed GitHub Pages destination
`https://pazneria.github.io/library/`. This is the separate optimized scene with
the owner-requested wood/paint separation and FPS mouse-look fixes.

The frozen Lab benchmark and previous optimized copy remain separate. This repo
contains one scene's source and compact production build, not the benchmark
catalogue, archives, dependencies, screenshots or private project data.

## Controls

Click to capture the mouse; Esc releases it and opens controls. Mouse input
changes camera rotation directly, with no look interpolation or inertia. Raw
input is requested where supported; ordinary pointer lock and left-drag are
fallbacks. Mouse sensitivity defaults to 0.0026 radians/count and can be adjusted
from 40–220%. Pitch stops just short of vertical. Unlocking, changing focus or
hiding the tab clears movement input and requires a fresh click to capture.

WASD/arrows walk, Shift walks faster, C crouches, 1–5 select viewpoints, R
resets, F shows frame stats, P changes render scale and H hides hints. Walking,
stairs and collision behavior are unchanged. The current scene uses desktop
keyboard and mouse controls; touch controls have not been added.

## Build and preview

The lockfile retains Three 0.170.0 and Vite 5.4.21. With Node and dependencies:

```sh
npm ci
npm test
npm run build
npm run preview
```

Build output is tracked in `docs/`. Vite's `/library/` base makes asset paths
work under the shared GitHub Pages hostname. A local Vite preview uses
`http://127.0.0.1:5418/library/`; choose another free port when the owner's
existing preview is running.

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

The lower alcove lintel and adjoining beam ends project 4 cm past the paint.
Shared window-frame faces use 12 mm clearance; the doorway jamb bottoms and
hidden bench back are separated from adjacent paint. Materials, lighting,
textures, books and collision solids are preserved.

Bounded CPU comparison against the prior optimized source found 66 exposed
near-coplanar wood/paint pairs before and zero after. It verified 39 focused
wood changes, exact other geometry/book/light/window streams, unchanged
collision solids and an identical 6,000-step movement trace. Those comparisons
require the separately preserved original and are recorded in `PROVENANCE.md`.
Portable look tests exercise the actual module with mock DOM/pointer-lock
events. They cover sensitivity, pitch, direct camera updates, fallback,
focus/visibility, pending Escape cancellation and independence from simulated
render cadence.

The production build passed with Vite's existing >500 kB chunk advisory.
Hardware mouse feel, native pointer-lock behavior, visual acceptance and an FPS
benchmark remain untested. No claim of higher frame rate is made.

Project books, notes and a private study are future work, not implemented
features of this scene.
