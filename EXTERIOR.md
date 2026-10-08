# Hillside exterior integration

This branch replaces only the production sky/terrain/cone-tree backdrop. It is
based on `b940eb5330568092b780ddc2820edd9134df7cd9` in `Pazneria/library`.
The original sunset and westward hillside remain the setting for the library.
Six broad oaks and four slender birches frame the reading windows; low meadow
tufts, shrubs and sandstone outcrops sit below the sills. Nine woodland islands
lead into the valley, with a low central grove visible through the reading bay.
The palette is warm olive, sage, straw and sandstone, without seasonal props.

## Source and integration

- `src/exterior/layout.js`: deterministic planting, building clearance, view
  corridor, and the production hillside's unchanged analytic height function.
- `src/exterior/assets.js`: reusable procedural meshes, the generated ground
  texture, and an opaque daylight material. No downloads or runtime CDN.
- `src/exterior/index.js`: scene construction, static inventory, and disposal.
- `tests/exterior.test.mjs`: bounded CPU geometry, sightline and resource checks.

The only application hook is:

```js
import { createExterior } from './exterior/index.js';
// After the existing sunDir is created, replacing the old backdrop block:
const exterior = createExterior({ sunDirection: sunDir });
scene.add(exterior.group);
```

`createExterior` returns `{ group, layout, budget, dispose }`. It has no update
method or frame-loop work. `dispose()` removes the group and frees only its own
geometry, material, texture and instance buffers. The group is authored in world
coordinates and should keep its identity transform. Its static inventory is also
available at `scene.getObjectByName('hillside-exterior').userData.exteriorBudget`.

To combine this with the controls/trim or interactive-book work, copy the three
exterior modules and replace only the old backdrop block in the owner's current
`main.js`. Keep their surrounding code. Rebuild the final combined sources; do
not combine generated JavaScript bundles by hand.

## Resource budget

These are CPU scene-graph counts, including the sky, with every exterior batch
submitted once. They are not measured GPU costs, frame times or FPS estimates.

| Resource | Production backdrop | New exterior | Difference |
| --- | ---: | ---: | ---: |
| Submitted triangles, all batches | 107,560 | 51,700 | -55,860 (-51.9%) |
| Draw submissions, upper bound | 3 | 14 | +11 |
| Materials | 3 | 3 | 0 |
| Unique geometries | 3 | 9 | +6 |
| Geometry + instance buffer bytes | 2,807,792 | 711,580 | -2,096,212 |
| Exterior textures | 0 | 1 | +1 |
| Texture bytes, base / with mipmaps | 0 / 0 | 65,536 / 87,380 | +65,536 / +87,380 |

Buffers count typed geometry/index/instance arrays, without driver overhead or
JavaScript objects. Texture storage assumes RGBA8 with a full mip chain. The
single 128x128 grain texture is generated once, has anisotropy capped at four,
and uses the host's existing `uniforms.map` startup upload hook.

| Layer | Triangles | Draws |
| --- | ---: | ---: |
| Existing sunset dome | 960 | 1 |
| Continuous terrain, finer near the library | 17,280 | 1 |
| 10 foreground trees | 5,816 | 2 |
| 126 middle-distance trees | 11,340 | 2 |
| 194 distant trees | 10,864 | 2 |
| 280 meadow tufts | 4,480 | 4 |
| 12 shrubs + 12 stones | 960 | 2 |

Foreground trees use 660/464-triangle shared templates; middle trees use 90,
and distant trees use 56. Grass detail is confined to four small beds within
about 42 m of the library. Tree detail tiers are placed at construction time,
so they cannot pop or thrash as the player moves. Four north/south woodland
batches and four grass batches have computed bounds and ordinary frustum
culling. The farthest planting ends within about 780 m. Terrain covers the
original extents with one connected nonuniform grid, without overlapping skirts.

All added scenery is opaque. There are no alpha foliage cards, shadow casters,
shadow receivers, added lights, wind animation, runtime mesh rebuilds, or render
scale changes. Vegetation lighting and haze are evaluated per vertex with a
small daylight shader, independently of the interior's point lights. The extra
draw calls are an explicit tradeoff; actual responsiveness still needs GPU QA.

## Verification and limits

Run `node tests/exterior.test.mjs`, `npm test`, and `npm run build` with the
locked dependencies. Preserve `docs/.nojekyll` when refreshing the build output.
No install, browser, preview server, native UI, GPU session or heavy CPU benchmark
was used for this attempt. Matching installed Three 0.170.0 / Vite 5.4.21 packages
were reused from the prior production workspace.

Checks passed for finite geometry, resource caps, exact per-instance clearance,
culling bounds, deterministic placement, texture setup, and disposal. Eight rays
from actual window centres stay clear for 120 m. These centre rays do not prove
every possible sightline. A CPU source audit verified all code outside the
exterior hook unchanged, including render scale, lighting, navigation, controls,
building, trim and books. The height function matched on 7,505 samples. The 132
collision solids and seven registered shaft volumes were unchanged. Scenery
adds no walkable ground and does not enlarge the current walkable boundaries.

Two bounded CPU probe pairs were used only to inspect composition from the
production reading-alcove pose: two 640x400 images per pair, each pair under one
second of command wall time. They omit interior occlusion, window bars,
antialiasing and fine texture sampling; they are not production screenshots.
No visual acceptance, native movement test, WebGL shader compilation, frame-time
measurement or performance score is claimed. The owner should inspect the west
bay, tall windows, south gallery windows and entry viewpoint at the unchanged
render scale, then check actual draw/frame costs in a coordinated GPU session.

The production build passes with Vite's existing >500 kB chunk advisory.
The frozen benchmark, source production checkout and preview on port 5418 were
not modified. This is an isolated integration patch, not a publication.
