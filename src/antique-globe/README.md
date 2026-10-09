# Orbis Terrarum — Library globe

A static terrestrial globe in hand-tinted vellum, aged brass and polished
walnut. Recognizable coastlines, fine latitude/longitude rules, two compass
roses and restrained serif labels reward a closer look. The turned tripod,
bowed stretchers, brass ferrules, full meridian and graduated horizon ring
give it the construction of a collected scientific instrument.

## Existing location

The original object exists in `src/build.js` under `globe near window B`.
The replacement preserves its frame `W.sub(-5.9, 0, -0.7, 0.3)`, sphere centre
at local `(0, 1, 0)`, radius `0.29`, axial tilt `0.4`, and exact collision call:

```js
f.solid(0.7, 1.3, 0.7, 0, 0.65, 0);
```

Coordinates use X east, Y up, Z south. This is the ground-floor west side of
the main library, beside window B. The geographic prime-meridian hemisphere
faces into the room, and the Atlantic is visible from its southeast side.
The stand's feet are 1 mm above the floor to avoid a coincident floor surface.
The outer meridian rises to 1.3275 m, within the old globe's 1.33 m envelope.

## Integrate

Base: `Pazneria/library` commit
`f47874c78844936ee048cf45b81cf3827f5b35b7` (remote main verified at start).

Use **one** of these routes:

1. Apply the self-contained `globe-source.patch` at that base. It adds this
   module and makes the three narrow edits to existing files.
2. For an artist integration branch, copy this entire `src/antique-globe/`
   directory and apply `integration-only.patch`. This patch contains only
   `src/build.js` and the two existing CPU loader helpers. Review the three
   globe-local hunks in `build.js` if another artist has changed that file.

Do not apply both patches. No edit to `main.js`, lighting, entry view, other
furniture, exit, reading, auth links, homepage handoff, collision data or
deployment bundle is needed. The old `TX.globeTexture` function is left in
place for compatibility but is no longer allocated by `makeMaterials()`.

`makeGlobeMaterials()` returns four room-owned materials. `buildAntiqueGlobe(f,
M)` submits ordinary indexed position/normal/UV geometry to the existing
Builder. Each material becomes one static merged room mesh. The existing
Builder releases source geometries, and the room exit lifecycle releases
the merged geometry, materials and three CanvasTextures.

The six explicit `r()` calls at the integration site preserve the old three
box legs' random UV draws. Keep these calls: they prevent changes to objects
built later in the room. The module itself does not consume the room RNG.

The two CPU helpers resolve the new geometry import from their data-URL
copies of `build.js` and stub its browser-only atlas creation. The separate
globe CPU check exercises atlas generation through a command-recording 2D
context and validates the actual geometry with Three r170.

## Resource accounting

| Resource | Globe replacement | Change from old globe |
| --- | ---: | ---: |
| Triangles | 14,548 | +12,528 |
| Indexed vertices | 9,818 | +8,591 |
| Typed geometry arrays | 401,464 bytes | +350,080 bytes |
| Static meshes / main-pass draws when visible | 4 | +3 room draws |
| Materials | 4 | +3 room materials |
| Textures | 3 | +2 textures |
| RGBA8 textures, full mip chains | 13,281,972 bytes / 12.67 MiB | +12,582,920 bytes / 12.00 MiB |

The sphere is 64 by 40 segments (4,992 triangles). The 37 construction pieces
are merged into four meshes, using 16-bit index buffers. Zero-area triangles
are removed before batching. No transparency, custom shader, light, listener,
animation, spin loop, fetch, render target, dynamic texture update or additional
per-frame work is added.

The parchment map is 2048×1024, walnut is 256×512, and the engraved scale atlas
is 1024×256. All use mipmaps and anisotropy 4. RGBA values are construction
estimates, not measured GPU allocations. Canvas backing stores add 9,961,472
bytes at RGBA8; two temporary ImageData arrays total 8,912,896 bytes during
map/wood generation and are then eligible for collection. Driver overhead,
browser object overhead and font caches are not included.

The optional existing depth prepass would add up to four globe draws; it is
off by default. The globe contributes up to four shadow draws per rendered
shadow pass, depending on culling. The room's existing static shadow-update
policy is unchanged. No frame-rate or GPU-performance claim is made.

## Validation and limits

The handoff's `cpu-report.json` contains exact per-material triangle, vertex,
array and texture counts. CPU checks verified finite attributes, unit normals,
valid indices, consistent winding, no zero-area triangles, four successful
material merges, deterministic texture pixels/drawing commands, and one-time
disposal of all 11 new final geometry/material/texture resources.

Against the requested base, all 132 collision boxes and all 2,435 non-globe
geometry pieces' index/position/normal/UV bytes are unchanged. Lights, window
descriptors, decorative book streams and shelf slots are unchanged. The new
globe has zero triangle contacts with other existing collision solids.

All 13 commands in `npm test` passed. The production Vite build passed into
an isolated check directory, with the existing >500 kB chunk advisory.
Tracked `docs/` and `BUILD.json` were untouched. No browser, server, native UI,
GPU or performance tests were run. Lighting appearance, glyph rasterization
and beauty/legibility at normal and close viewing distances still require
the separate visual integration review. No visual quality score is claimed.

To repeat the checks using available matching dependencies:

```sh
node globe-handoff/cpu-check.mjs
npm test
node node_modules/vite/bin/vite.js build --outDir globe-handoff/build-check --emptyOutDir
```

Do not publish the check output. Run the repository's normal deployment build
only in the later integration workflow. See `PROVENANCE.md` for asset rights
and `globe-handoff/WORK_LOG.md` for actual timing and process cleanup.
