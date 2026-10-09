# Combined Library art and hinged exit

This focused derivative starts at the tested hinged-exit head `49eda536ca1bab6fc79c84f946112ca119d6e45d`, based on live main `f47874c78844936ee048cf45b81cf3827f5b35b7`. It combines the four delivered art candidates without modifying their modules. The older checkouts, original handoffs, frozen scenes and live site remain preserved. No deployment occurred.

## Integration boundaries

`src/build.js` contains the five import additions and target-local replacement hooks: five default wingbacks, the upstairs desk carcass/inkwell, only the main reading-table rug, and the globe by window B. Original furniture frames, colliders, lamps, paper, props and decorative books remain. The hooks retain exactly 14 RNG draws per replaced chair, 20 for the desk and six for the globe; the rug consumes none. The hinged doorway, landing and navigation code remain byte-identical to the tested base.

The artist modules under `src/reading-chairs`, `src/upstairs-desk`, `src/reading-rug` and `src/antique-globe` are byte-exact deliveries. Their own documentation records their isolated validation scope; this document records subsequent combined validation. The globe's public-domain Natural Earth coastline provenance and artist-authored texture/geometry notes are retained.

The two CPU scene loaders resolve the new imports and stub browser-only globe atlas/image creation. The combined test additionally executes the actual globe pixel/drawing program with a command-only CPU canvas and exercises its CanvasTextures through the existing scene teardown. It does not rasterize fonts, decode images or create WebGL.

The separate Sol book handoff is now integrated through one adapter import in `src/main.js`; all original premium book modules and legacy desk/private content remain exact. The art preservation/accounting checks remain active, with that import as the sole accepted host byte difference. `tests/library-books.test.mjs` checks all three copies against this carved room and the final artist geometry. See `RELEASE_REVIEW.md`, `ROOM_GUIDE.md` and `BOOKS_REVIEW.md` for the combined book behavior and maintenance boundaries.

## Actual combined accounting

| Replacement | Triangles | Material batches | Potential shadow batches | RGBA8 mip-chain bytes |
|---|---:|---:|---:|---:|
| Five wingbacks | 55,280 | 5 | 3 | 1,398,096 |
| Upstairs writing desk | 7,376 | 6 | 6 | 786,432 |
| Reading-table rug | 3,652 | 2 | 0 | 13,981,016 |
| Antique globe | 14,548 | 4 | 4 | 13,281,972 |
| Replacement total | 80,856 | 17 | 13 | 29,447,516 |

Net additions over the hinged-exit room: **74,542 triangles, 16 opaque material batches, 12 potential shadow batches and 28,748,464 texture mip-chain bytes (about 27.42 MiB)**. The old globe's dedicated material/texture is removed; other old shared room materials remain in use.

The static room Builder changes from 55,302 to 129,844 triangles and 28 to 44 merged meshes. These counts exclude separately rendered decorative book instances, premium books, exterior, exit assembly and other host effects. They are CPU construction counts, not measured renderer submissions, GPU allocations or frame-rate results. Shadow culling/pass multiplicity, decoded image copies, canvas backing stores and driver overhead are additional. No new light, animation callback or renderer-quality change is added.

Final production output including the book adapter totals **1,794,711 bytes**, versus 624,325 at the hinged-exit base. The main JS is 741,071 bytes; the two emitted rug PNGs total 1,026,403 bytes and exactly match the source PNGs. The existing Vite large-chunk advisory remains.

## Verification and next QA

All 16 normal CPU/mock-DOM test commands pass, including the five-group combined-art suite, the reusable-book placement/history suite and the retained hinged-exit, trim, input, reader, exterior and handoff suites. The normal Vite production build passes. All 60 source entries and six build entries match their manifest sizes/SHA-256 values.

On the actual carved room, 2,291 non-target geometry pieces have exact position/normal/UV/index bytes. Exactly 154 old target pieces are replaced by 445 new pieces. All 134 room collision volumes, 4,711 room RNG draws, decorative book matrices/colors/variants, light/window descriptors and shelf slots remain exact. The paint guard and actual door sweep/walk-through checks pass with the new art. Builder staging geometry and all merged/shared resources dispose once through existing ownership.

Original handoff hashes:

- Chair source patch: `2b66b6d078b4167bbbe56ea0ce9e7bbcba819151b856a3ab3b5725501b73c37e`.
- Desk archive: `1897f621e3be47f79d3bccbc4675d5b4da8cbeca1c38137b891beb8f664dab49`.
- Rug archive: `96eab711f04b42ae191a159e0c80bba3498bf7cdf26d9eb07952b4ca2759fd69`.
- Globe archive: `66211b3df9447b118a744d568d159afd88df74de8bbec5c6eccd5499b6925b9d`.

No browser, server, native UI or GPU session ran. Library visual QA waits for the parent-controlled graphics slot after Lab and Arcade. Review normal/close-distance coherence, upholstery and desk lighting, rug edge/foot contacts and oblique yarn aliasing, globe engraving/label legibility and shadow appearance, hinge/opening/native exit/Back, texture decode and startup behavior. The homepage preview image predates this art; inspect its transition into the same preserved entrance view before deciding whether to recapture it.

The substantial geometry and texture increase is the main performance risk, especially on constrained graphics/memory. Procedural globe atlas construction may also affect startup; its actual rendered/browser cost is unmeasured. Fine stitches, grain, rug weave and engraved rules may alias at moving or oblique views. Do not claim smooth performance or visual acceptance until the sequential pass establishes it. Preserve the delivered assets for review before making any targeted revision.

The integration worktree and byte-exact handoff copies are retained for the sequential visual pass. No browser/server process was started or stopped, and existing preview/server ownership was untouched.
