# Library room and book maintenance

Verified against main `f47874c78844936ee048cf45b81cf3827f5b35b7` on 9 October
2026. A text-only download of the published HTML and both compiled asset hashes
matched that commit's `BUILD.json`. This guide describes the source and this
proposed book adapter; it does not certify a rendered walk-through.

## The space

Coordinates are metres: **x east, z south, y up**. North is negative z. The main
interior is x `[-7,7]`, z `[-10,9]`, with floor y `0`, ceiling y `10.5` and gallery
floor y `4.2`. `src/build.js` authors the room in local `Frame` transforms, builds
merged material batches, and separately records collision AABBs in `B.solids`.
Visible geometry and coarse movement solids are deliberately different.

| Place | Coordinates and role |
| --- | --- |
| Entrance / hearth view | Feet `[3.4,0,4.3]`, yaw `.78`, pitch `.1`; eye starts at `1.62`. This is viewpoint 1 and R reset. |
| Central reading table | Centre `[-.5,0,1.9]`; top y `.78`; footprint x `[-1.125,.125]`, z `[-.05,3.85]`. Collision top is `.80`. Existing lamps, papers, open book and decorative stacks stay in place. |
| Lower free-standing stacks | Double-sided cases centred x `-2.3`, z `-5` and `-2.4`; tops y `2.325`. Viewpoint 2 stands between them. |
| West alcove | x `[-11.5,-7]`, z `[2.4,7.4]`, ceiling `3.6`; window seat, low cases and small furnishings. Viewpoint 3 is `[-8.2,0,4.9]`. |
| Stairs | x `[4.2,7]`, rise north from z `6.7`; `.175` rise / `.3` tread, with a half-height landing y `2.1`, z `[2.1,3.4]`. Viewpoint 4 is `[5.6,0,8]`. |
| Gallery | North strip x `[-7,7]`, z `[-10,-7]`; east strip x `[4.2,7]`, z `[-7,-1.2]`. Viewpoint 5 feet `[1.2,4.2,-7.6]`. |
| Northwest writing desk | Frame `[-5.6,4.2,-8.85]`; existing paper interaction at `[-5.55,4.999,-8.75]`. Opens the existing neutral Project Library invitation. |
| Home exit | Southeast east-wall anchor `[6.8963,0,7.75]`; E/click, controls link, reader link and Alt+X. Exit/integration owner controls this module. |

The north wall has full-width cases downstairs and upstairs. West cases occupy
the window gaps; east cases run north of the stairs. South cases flank the
entrance area. Two low cases furnish the alcove. `bookcase()` defines shelf
frames: local x along the shelf, y above its top, z negative into the case.
`BookSet.fillSlot()` procedurally fills them using a deterministic seed.
The CPU room has **2,441 authored pieces and 9,813 decorative book instances**.
Those decorative instances are presentation, not content records or picking
targets. Do not scan them every frame or silently turn them into private books.

## Authored asset and content pipeline

Published main used the premium asset only for Shapes & Sound. Welcome used the
earlier box/cover marker, and `src/jippity-book/hillside.js` hard-coded the single
premium table position. This verifies an implementation difference; it does not
establish which model or person authored a book. `PROVENANCE.md` records the
preserved asset delivery and frozen scene lineage.

The new path is:

`catalog.js / public JSON → placements.js → collection.js → existing premium
geometry + atlas → scene`; `placement.js → interaction.js → lazy inspect.js →
existing reader.js` handles selection and reading.

| File | Maintain here |
| --- | --- |
| `src/library-books/welcome.json`, `notebook.json` | Public pages, edition, cover text and sources; schema version 1. |
| `src/jippity-book/content.json` | Existing Shapes & Sound edition. Preserved exactly in this pass. |
| `src/library-books/catalog.js` | Stable content keys, short inspection summary, restrained cloth/ribbon palette and optional `colorSize` (512 or 1024). No coordinates. |
| `src/library-books/placements.js` | Copy IDs, position, yaw/pitch/roll in radians, uniform scale, surface, optional location label and verified shelf support aperture. |
| `src/library-books/collection.js` | One shared geometry; unique color atlas per edition; shared original control/bump atlases; duplicate editions share their material and textures. |
| `src/library-books/placement.js` | Compile transforms once; pick at most four authored copies, not decorative books. |
| `src/library-books/inspect.js` | DOM-only inspection around the preserved spread reader. Created on first use. |
| `src/library-books/hillside.js` | Scene adapter, input arbitration, lazy reader registry, accessible public-book controls list. |
| `src/reading-content.js`, `room-anchors.js`, `reading.js` | Existing desk destination and legacy compatibility layer. Original welcome/drums records remain fallback data; the new adapter intercepts their copy IDs. |

The premium origin is the **lower board**, unlike the earlier marker's centre.
Its cover is `.34 × .47 m`, thickness `.064 m`, plus the ribbon to local z `.284`.
Local +y is the cover normal; local -x is the spine; local -z is the cover head.
Use full-size volumes on tables and a measured scale on shelves. Rotation is
Three's XYZ Euler order. Always include the ribbon when checking clearance.

| Active copy | Content key | Bottom-board position | Orientation / scale |
| --- | --- | --- | --- |
| `table-drums` | `drums` | `[-.87,.782,2.35]` | yaw `-.18`, scale `1` |
| `table-welcome` | `welcome` | `[-.35,.782,3.53]` | yaw `.12`, scale `1` |
| `north-shelf-notebook` | `notebook` | `[1.54,1.330682,-9.782]` | flat, scale `.62` |

The notebook lies 2 mm above a real third-shelf top at y `1.328681707`, in the
north-wall bay x `[1.42,2.313333]`. CPU bounds clear existing books and furniture;
the direct standing sightline from `[1.54,1.62,-8.8]` is also clear. The case's
coarse collision solid encloses its open shelves, so this copy has one explicit
front-aperture exception. It matches that exact case and requires a ray entering
its open front. Changed support bounds, side/back approaches, other solids and
the 2.2 m reach still block selection. Re-measure this data when moving a copy;
do not extend the exception to walls or a whole room.

## Interaction and ownership

E, a deliberate scene click, or the visible native hint button inspects a nearby
copy. Read this book opens the bound spread; Book details returns to inspection
without losing the current spread. Return to table/shelf, Escape and Back close
it. Forward restores the existing reader state. Nothing moves the physical book
or visitor. Controls → Public books gives the same editions a keyboard and
screen-reader route without aiming or teleporting.

The preserved reader supplies native modal focus, page selector, Previous/Next,
Left/Right, Page Up/Down, Home/End, source links, narrow page stacking, reduced
motion and focus outlines. Inspection uses system fonts and DOM text, adds no
scene animation or texture, and focuses its Read button. Closing returns focus
to the canvas and requires a fresh click/Enter for mouse capture.

`main.js` picks hints at 8 Hz. Its existing frame loop pauses for reading,
controls, blur, hidden tabs and page lifecycle. Book history contains public
edition/session/spread identifiers only. The adapter reconciles multiple lazy
readers so a history transition cannot unpause another open volume.

Host cleanup calls `reading.dispose()` before deduplicated scene disposal. The
host owns attached GPU resources; **do not also call collection.dispose()** there.
The collection's standalone disposer is for independent consumers. Both paths
are CPU-tested to release shared resources once and drop generated canvases.

## Updating and integration

To add a public reading or project sample, add one schema-valid JSON edition and
catalog entry, then a copy placement. Keep concise pages and source IDs that
resolve within that edition. Four copies is the explicit ceiling; raise it only
with a reviewed resource budget. Multiple copies of one content key share assets.
A replacement room can supply another placement array without changing pages.

Public sample notes are the only notebook data in this patch. Personal answers,
project notes and decisions remain in the existing authenticated destination.
The desk link is unchanged. There are no backend, access, authentication,
permissions or private-content request/cache changes.

Integration changes **one import in `src/main.js`**, from
`./jippity-book/hillside.js` to `./library-books/hillside.js`. Existing factory
calls and lifecycle hooks remain intact. All original `src/jippity-book/` files,
`build.js`, `books.js`, `textures.js`, anchors, entry/look/loading, exit and
exterior are preserved. Chair, rug, globe and upstairs-desk artists can deliver
their modules independently; recheck this notebook's shelf clearance after
combining geometry. The hinged-exit owner should retain the shared cleanup order.

Run `npm test` (14 CPU suites) and `npm run build`. The source-only patch is
intended for the integration owner; rebuild tracked `docs/` and `BUILD.json`
after combining artists. Obtain the parent's graphics slot before browser,
native input or rendered QA. Keep frozen originals and old evidence unchanged.

Current book construction is 3 main draws, 1,398 submitted triangles, 44,736
shared geometry bytes and **14,330,539 estimated RGBA bytes with full mipmaps**
for two 1024 table color atlases, one 512 shelf color atlas and shared 512/256
masks. The smaller shelf copy retains the same geometry and artwork at a lower
color resolution. Against published main's
book layer: same main draws, +918 triangles, about +6.17 MiB texture accounting
and two additional static shadow casters. No new lights or per-frame updates.
These counts exclude optional prepass/shadow submissions and are not measured
GPU memory, shader compilation, timing or frame rate. Visual craft, shelf
discoverability and native focus/history remain pending coordinated review.
