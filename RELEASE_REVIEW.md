# Combined Library draft release

This candidate combines the hinged oak exit, four independently delivered art replacements and the reusable public-book layer. It starts from live main `f47874c78844936ee048cf45b81cf3827f5b35b7`, retains the tested hinge head `49eda536ca1bab6fc79c84f946112ca119d6e45d` and art-stage commit `20416718348737eea892c487be3a6233c61b3cfe`, and integrates Sol's source snapshot `7f324227429ac0217039cd82c7c3951d02403f69`.

Approaching the oak door swings its rigid leaf/latch outward. A carved wall opening, supported landing and rotating collider permit safe walk-through departure to the homepage. E/click opens a closed leaf without queuing navigation; a later deliberate use or outward threshold crossing leaves once. Retreat and doorway occupancy keep it safe. Fixed trim, existing accessible Home links and Back cleanup remain.

The five wingbacks, upstairs writing desk, main reading-table rug and globe use their exact delivered modules. Original placement frames, props, lamps, colliders, books, light/window definitions and RNG consumption remain. Only those art targets and the exit opening change room geometry. The three premium public books now share the existing authored geometry and control/bump atlases: Shapes & Sound, a moss-cloth welcome volume and a small oxblood public notebook in a verified north-shelf gap.

Public edition data and copy transforms are separate. E/deliberate click opens lazy book inspection, Read opens the preserved spread reader, and details/return retains the visitor and page. Controls offers the same books through native buttons without aiming or teleporting. The shelf picking allowance matches one measured case/front aperture and retains reach, side/back and other-occluder blocking. The desk's authenticated destination and neutral invitation remain byte-exact; no private content was fetched or bundled and no backend/auth/permissions change is made.

## Integration and preservation

The book source patch applied unchanged except its package test list conflicted with the additive art/hinge tests. All checks are retained in a 16-command list. Only one existing runtime line changes for books: the adapter import in `src/main.js`. The hinged-exit frame/cleanup/navigation code and all four artist modules remain exact. Existing `src/jippity-book/**`, legacy reader, private link, entry/look/loading, exterior, lockfile and canonical homepage bridge are preserved.

Tests were adapted only at their integration boundaries: book placement uses the production carved room, its evidence reports the actual piece count, and the art host guard permits precisely that adapter import. No artist or new book runtime module is rewritten. Original handoff patches/archives, their hashes, frozen originals and historical receipts remain preserved outside the checkout.

Maintenance guidance is in `ROOM_GUIDE.md`; book design/evidence is in `BOOKS_REVIEW.md`; detailed art budgets/provenance are in `ART_INTEGRATION_REVIEW.md`; hinge details are in `SWING_EXIT_REVIEW.md`. The first two retain the book author's base-specific record. This document records the final combined verification.

## CPU and build evidence

All **16 normal CPU/mock-DOM suites pass**. The three actual book volumes clear **2,736 integrated authored geometry pieces and 9,813 decorative-book bounds**; notebook support is exactly 2 mm above a real shelf and all three standing approaches select their intended copy. Wall/reach/front-aperture limits, shared asset/mask preservation, duplicate-edition sharing, four-copy cap, lazy DOM, deliberate input, accessible catalog, inspect/read/return, multi-reader history and once-only teardown pass on CPU.

Combined art preservation retains 2,291 non-target primitive buffers, all 134 room collision volumes, all 4,711 room RNG draws, decorative book streams, lights, windows and shelf slots. The trim guard and degree-sampled hinge clearances, fast walk-through at 20/60/144 Hz, backtracking and once-only threshold navigation still pass. Host scene teardown remains the single attached-resource owner; reading DOM/listeners dispose before deduplicated geometry/material/texture cleanup.

The production Vite build passes with the existing large-chunk advisory. All **60 source entries and six build entries** match `BUILD.json`. Final output is **1,794,711 bytes**, including 741,071 bytes of JS, 12,098 bytes of CSS and 1,026,403 bytes of byte-exact rug PNGs. This adds 9,924 build bytes to the tested art/exit stage. No package was installed.

## Resource accounting and outstanding review

Art adds 74,542 net triangles, 16 opaque material batches, up to 12 shadow batches and 28,748,464 estimated RGBA8 mip-chain bytes (about 27.42 MiB) over the hinged-exit base. The static room Builder is 129,844 triangles / 44 material batches; it excludes other host objects and passes.

The new public-book layer remains **three main draws**, with 1,398 submitted triangles, 44,736 shared geometry bytes and 14,330,539 estimated RGBA texture bytes with mipmaps. Relative to the old reading layer it adds 918 triangles and approximately 6.17 MiB of texture accounting, plus two static shadow casters. Art and book texture deltas together are approximately **33.58 MiB**, excluding decoded-image/canvas copies, driver overhead and unchanged scene resources. These are CPU construction estimates, not observed renderer submissions, allocations or frame-rate measurements.

Graphics/native QA remains outstanding. Arcade currently owns the exclusive slot; Library starts only after parent confirms cleanup. Review all art at normal and close distances under unchanged lighting, book covers and notebook discoverability, rug edge/feet/oblique weave, globe glyphs and shadow appearance, startup image decode/atlas work, actual dialog focus and pointer lock, history, narrow/forced-colors/reduced-motion behavior, desk link presence without private fetches, hinge collision/threshold exit/Back, and homepage-entry transition. The existing entrance image predates the furniture changes; decide on recapture only after viewing the final room.

The increased static geometry, shadow submissions and texture memory are concrete performance risks, especially on constrained graphics. Fine detail can alias during movement, and procedural atlas construction can affect startup. No visual acceptance, quality score or speed improvement is claimed. The candidate is a draft for this remaining sequential pass; nothing is merged or deployed. No browser, server, native UI or GPU session was started, and existing server ownership is untouched.
