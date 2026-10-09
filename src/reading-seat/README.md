# Folio in the Hillside Library

One refined Folio chair sits at `[-7.35,0,4.9]`, facing the west windows at the
east edge of the reading alcove. Existing furniture, room geometry, books,
Marginalia, lighting and RNG consumption remain unchanged. The earlier original
Folio modules remain in `folio/`; the published asset uses the exact reviewed
`folio-refined/` modules from local candidate
`ee7e277fccfbe95c8a4fabdae0d0e91a64b5a8a1`.

Controls offers **Find the Folio chair**. Select it, then **Return to room**.
Aim at the chair and press **E**, or deliberately click after acquiring scene
focus. Sitting settles over 0.5 seconds. Mouse look stays live and cancels the
authored facing turn if moved. **E**, **Escape**, or the keyboard-accessible
**Stand up** button returns to a supported clear standing anchor. Reduced motion
settles immediately. No avatar, orbit camera, extra frame loop or save data.

`hillside.js` owns the placement and asset mount; `folio-interface.js` converts
the current asset contract; `controller.js` owns only seated camera/translation;
`interaction.js` supplies bounded ray picking and ordinary DOM controls. The
host owns collision, supported ground, frame scheduling, look, modal pauses and
attached resource disposal. Its Controls/book/study-note callbacks acquire their
pause before cancelling seating. A camera/player alignment gate prevents a
just-selected distant view from using the previous frame's chair ray.

Folio adds eight collision proxies, five opaque material batches, 19,320
triangles, 523,024 typed geometry bytes and 6,815,744 texture backing bytes. Six
textures are reused for colour, bump and roughness. The full mip-chain formula is
9,087,656 bytes; this is construction accounting, not measured GPU memory.
Static shadows include the five chair meshes under the existing sun. Materials
and lighting are unchanged from the accepted asset and room.

The existing scene disposer releases the attached five geometries, five
materials and six textures once. Do not also call the asset's standalone
disposer. `releaseReferences()` drops the mounted factory's backing-data
reference after scene teardown. Controls-route and sitting DOM/listeners are
removed before scene resources. Existing cached-history recovery remains owned
by the Library lifecycle.

`npm test` includes all prior 20 suites plus four Folio suites. They check exact
reviewed asset bytes, exact 68 prior source files outside the enumerated main
hooks, actual room envelope/standing clearance, 20/60/144 Hz sitting, free look,
blocked recovery, reduced motion, 36 actual host pause transitions, the stale-ray
guard and once-only host teardown. The separate bounded browser acceptance uses
the tracked production build and actual room lighting. Screenshot and deployment
hash receipts are kept outside `docs/`.

Touch controls and phone hardware, screen-reader output, physical comfort,
VRAM/frame-time measurements and sustained load remain untested. Existing
private desk navigation, server-side access and homepage handoff are unchanged.
