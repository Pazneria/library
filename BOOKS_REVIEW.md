# Reusable books: focused review

Base: verified public main `f47874c78844936ee048cf45b81cf3827f5b35b7`.
This is a proposed source/build patch; nothing was merged or deployed.

The welcome book was still the simple marker while Shapes & Sound used the
premium cloth/foil/page-edge asset. The new adapter reuses that existing asset
for both table books and a small public notebook on a real shelf. Its public
edition JSON, independent copy transforms and short inspection summaries are
editable without changing geometry or reader code. The desk's authenticated
destination and neutral invitation remain exact.

## Review priorities and evidence

The requested weights guide acceptance; no score or formal comparison is claimed.

| Priority | Implemented and checked | Still needs the coordinated graphics slot |
| --- | --- | --- |
| 35% coherent physical books | Original premium geometry arrays are exact; every copy shares that geometry and its masks. Moss welcome, petrol reading and oxblood notebook use the same cloth/foil/ribbon drawing. Actual room/decorative-book bounds are clear. | Cover texture/palette quality, contact shadows, shelf composition and title readability from standing approaches. |
| 25% smooth readable interaction | Lazy inspect → Read → Book details/Return; spreads retained; deliberate click/drag/E arbitration; Escape, history, scene focus and no recapture. Actual core look/reader/desk/exit mock integration passes. | Native modal focus, pointer lock, Back/Forward, narrow scrolling and subjective pacing. |
| 25% reuse and room understanding | Separate public editions/copies; rotated/scaled replacement-room picking; duplicate-edition resource sharing; four-copy cap; precise room guide and one host import boundary. | Combined artist geometry and final placement review. |
| 15% performance/accessibility | Three main draws, shared geometry/masks, 512 color for the smaller shelf book, lazy detail DOM, no book animation/new light, controls catalog, native buttons/select, labels, focus styles and inherited reduced motion. Once-only host/standalone disposal passes. | Matched renderer counters, shader compilation, actual allocation/timing, keyboard/screen-reader and forced-colors QA. |

`npm test` passes all 14 CPU suites. The new suite checks clearance against
2,441 authored room-piece bounds and 9,813 decorative-book bounds, the exact
shelf support height and direct sightline, normalized oriented picking, support
aperture limits, reach/wall blocking, edition schema, lazy DOM, controls catalog,
reverse-order reader history and teardown. The combined suite uses the new
adapter with the real look, legacy desk and exit modules. Existing premium
snapshot suites continue testing the unchanged original modules.

`npm run build` passes with the existing >500 kB Vite chunk advisory. No dependency
was downloaded or installed: existing Three 0.170.0 / Vite 5.4.21 / esbuild 0.21.5
dependencies were copied to the isolated workspace for CPU checks. No browser,
preview server, native UI/input, GPU session, screenshot or frame-rate test ran.

The final static build is 631,452 bytes across four files, versus 621,215 bytes
on verified main: **+10,237 bytes**. The adapter passes only the asset's six
required Three exports through its constructor bridge, retaining tree shaking.
This is a build-size comparison, not a runtime speed claim.

Book construction: **3 draws / 1,398 submitted triangles / 44,736 shared geometry
bytes / 14,330,539 estimated RGBA bytes with full mipmaps**. Published main's
reading layer was 3 draws / 480 triangles / 7,864,320 estimated texture bytes.
The extra texture accounting is about 6.17 MiB; two additional books cast static
shadows. Draw counts exclude shadows/prepass and memory figures are accounting,
not measurements. Color detail for the `.62` shelf copy is 512; table editions
retain 1024. No performance improvement is claimed.

## Integration and publication

Apply the source patch to the integration owner's checkout. If its main import
has moved, retain all owner hooks and change only the book adapter import to
`./library-books/hillside.js`. Merge the additive catalog section with any
controls work by preserving both. Keep host `reading.dispose()` before scene
resource disposal; never add collection disposal to that same path.

All original book asset modules, shell/furniture/decoration, collision, anchors,
look/loading/entry, exit and exterior are unchanged. Chairs, rug, globe and
upstairs desk artist modules are outside this patch. Recheck notebook placement
against the integrated room, then run the CPU suites and rebuild `docs/` and
`BUILD.json`. The supplied build is review evidence for this exact isolated
source; it must not replace a build of the final integrated source.

After parent graphics clearance, review the three standing approaches in
`tests/library-books.test.mjs`, inspect/read/return and controls catalog with
keyboard and mouse, actual narrow/forced-colors/reduced-motion behavior, native
history, desk destination link presence without opening private data, Home exit
and cached Back cleanup, and matched-view renderer counters. Only then prepare
the combined publication request. Do not modify frozen originals or old proofs.
