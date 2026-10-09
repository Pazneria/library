# Rounded front armrest ends — unpublished candidate

This variant rounds only the terminal 27 mm of the accepted Folio armrests.
The broad armrest body retains all positions through station 22 and the original
normals through station 21. The shared join ring and curved end grain have
continuous normals. Six curved latitudes replace the final two tapered stations
and flat cut; a critical latitude preserves the exact frontmost coordinate.

`folio-core.mjs` imports the live accepted data builder, replaces only the two
arm tips and their finish cuts, and compacts the two affected material batches.
Every other part remains exact. The accepted source stays byte-exact in
`../folio-refined/`. Its textures and material settings are reused unchanged.

`folio-chair.mjs` reuses the accepted factory and its existing resource ownership.
Before any upload, it replaces only the longitudinal/end-grain geometry buffers
on the same geometry objects. Disposal remains idempotent for all 16 resources.
Revert the one import in `../hillside.js` to `./folio-refined/folio-chair.mjs` to
recover the currently published shape.

Bounds, sitting/hand anchors, collision proxies, placement and controls remain
exact. The candidate has 19,704 triangles (+384), five batches, five geometries,
five materials, six textures and 531,472 typed geometry bytes (+8,448). Texture
backing/mip construction counts are unchanged; these are not GPU measurements.

`tests/folio-armrests.test.mjs` checks actual typed bounds, exact non-arm parts,
body preservation, seam normals, contract/material/texture preservation, source
scope and once-only disposal. The prior 24 suites also pass.

The candidate is held for shape review. CPU reference views are honest software
renders of the buffers and accepted texture data; an actual offscreen WebGL pass
requires a fresh parent graphics allocation. No desktop window is opened or
focused, and the unrelated port 5418 server remains protected.
