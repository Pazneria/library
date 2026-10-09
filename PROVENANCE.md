# Provenance and validation

This scene derives from the optimized Claude Hillside Library prepared in
task 15, then fixed separately in task 48. It does not replace the frozen
[Lab benchmark entry](https://pazneria.github.io/lab/walkable-3d/entries/hillside-library-opus/).

- Previous optimized archive SHA256:
  `31bd3e44ffe21bc6188ee2326673e71dada9c412add094dfae6547ec31abe6e3`.
- Fixed standalone archive SHA256:
  `dcc6b6393685cc9e38a4623d3618d597d1ff059cdfd2c45a5e87efc13cf8f54d`.
- Previous optimized files and the frozen benchmark files matched their
  preserved manifests after the fix; neither source tree was modified.
- Exactly 39 wood-piece position/UV streams changed. All other geometry,
  book instances, textures/material sources, lights, window volumes and
  collision solids were preserved.
- CPU wood/paint face audit: 1,412 wood pieces, 37 paint pieces, 66 exposed
  near-coplanar pairs before, zero after. One concealed clock/mantel contact
  remains; no visible face was exempted.
- Identical 6,000-step movement trace SHA256:
  `1511d64895cea41c37db1c4b03a3c6f52d5bd2f0853b72683e7d44bec91cf37c`.

The initial base publication preserved `index.html` and all five source modules
byte-for-byte from the fixed derivative. Its hosting changes were the Vite
base/output directory, portable look-test script and documentation.

The first-reading-layer PR2 derivative adds two small static table books and an
interaction on the existing desk paper. At PR2 head `9718bb3`, `build.js`,
`books.js` and `textures.js` remained byte-identical to the published base.
Walking/collision functions and
rendering quality/lighting are preserved. New scheduling pauses scene frames
while reading, hidden or blurred. The added marker budget is two draw calls,
28 triangles and one 512×384 canvas atlas, with no new lights or shadow casters.
This is a construction budget, not a measured frame-rate claim. `docs/` is
rebuilt from the matching source; `public/.nojekyll` makes the marker reproducible.

The isolated core follow-up starts at PR2 head `9718bb3fddc9b4988d45fae858bab9c73b6a65b4`.
It removes the entry card and its opacity transition, returns UI focus to the
canvas, preserves walking before capture and requests capture only from a
deliberate click/Enter gesture. The authored camera is initialized before the
first compile/draw. This addresses concrete transition sources; the owner's
reported visual glitch has not been reproduced and is not diagnosed as screen tearing.

The expanded CPU audit tests all transformed wood triangles against actual
paint volumes, including opposite-facing contact and rotated/curved wood.
All 183 intersecting piece pairs are eliminated; architectural trim maintains
12 mm clearance. Source piece count remains 2,441, with 382 focused piece changes
and 96 added triangles for split window stools/reveals. UV random draws are
preserved, as are all decorative book matrices/colors/variants, paint/shell
geometry, collision solids, light/window definitions and exterior/render setup.
The same 6,000-step movement trace remains exact. Public reading content,
book component and anchors remain byte-identical to PR2 for parallel art work.

Geometry comparisons used stubbed textures and CPU construction; the texture
and book source files were separately compared byte-for-byte. Look tests use
mock events against the actual look module. There was no new GPU session,
rendered screenshot, native input automation or frame-rate measurement.

Raw input behavior follows the
[Pointer Lock specification](https://w3c.github.io/pointerlock/).
Owner acceptance still needs native browser testing when the test window is
available.

The combined integration retains core commit `6d0e838` and local core-plus-exit
commit `6331682`, then applies the frozen exterior source delivery from task 17,
commit `7b1d4c873ae04ff8fa3701da6275412147917171`. Original source patch SHA256:
`dcab1a81614faef34824aa3db56c069956ad7db7247fa304a94bc2a34f8cde30`;
original source/build archive SHA256:
`78527a1d6c3f2b0ea5768fba7f4345f2a2f89614b083e5600a90f40e21d4f1ef`.
All nine original delivery entries and the clean frozen commit were verified.
The three exterior modules and their test are preserved byte-for-byte. Only
the old backdrop hook is replaced; core and exit runtime code outside it is
unchanged. The shared scene cleanup releases exterior resources once.
That intermediate commit is preserved as `90be695e896491295dbc09632978e699dae83805`.
The final combined branch adds the completed task-16 premium book snapshot.
Its original archive SHA256 is
`194229d49b23f4b37cf0d4d7bf9186b90093dc6eeeef8a709da59033f779b29a`;
manifest SHA256 is
`abfa7e92dc8dda8ffcc7bffcd4cf09f1ac3ba42e65c705ba30c676ecf2fa87ce`.
All 38 file hashes and the original read-only archive verify. The eleven copied
runtime files are byte exact; only the three documented host hooks are added.
The old table-drums marker is filtered out, preserving the welcome and private
desk. Host scene cleanup additionally drops disposed generated canvas references.
The originals, frozen proofs, archive, timing and hash receipt remain unchanged.

All eleven combined CPU suites (73 listed groups/checks plus the complete trim
SAT audit) and the matching production build pass. This includes actual shared
book resource disposal and mocked composite look/reader/exit behavior. The final
draft then receives the owner's real-stage loading host. Twelve CPU suites now
pass (80 listed checks plus trim SAT), with all 47 prior source/test files outside
the documented `main.js` loading hooks unchanged. The parent assigned a separate
exclusive graphics slot for bounded headless native/rendered review; matched
baseline counters/timings and screenshots are separate from frozen art evidence.
No physical presented-FPS claim, merge or publication occurs. CPU software proof
images remain part of the separate frozen
delivery and were not copied into the runtime or treated as browser screenshots.
