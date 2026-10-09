# Provenance

The procedural globe, stand, material recipes, parchment grain, compass roses,
lettering layout, scales and cartouche were authored for this task. The object
is an original antique-inspired design, not a reproduction attributed to a
historical maker. The map uses modern coastlines with antique art direction.
No AI image generator, external model, downloaded raster image, font file,
subagent or additional model was used.

`land.js` derives from Natural Earth's public-domain 1:110m land polygons:

- Source: <https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_land.geojson>
- Terms: <https://www.naturalearthdata.com/about/terms-of-use/>
- Retrieved: 2026-10-09 UTC.
- Raw SHA-256: `9e0729ee253ca7d7a5c4ae9395fb1902264c5377c52e224d13dd85010e2835d9`.
- Transformation: discard feature properties; retain 127 polygons / 5,143
  coordinate pairs; round coordinates to 0.001 degree; export as local JS data.
- The raw snapshot and reproducible conversion script are in
  `globe-handoff/reference/ne_110m_land.geojson` and
  `globe-handoff/prepare-coastlines.mjs` in the handoff.

Natural Earth states that its raster and vector map data are in the public
domain. Credit: Made with Natural Earth. The source's generalization is
appropriate to a decorative globe; this is not a navigation instrument.

Runtime dependencies remain the repository's Three 0.170.0 and Vite 5.4.21.
Existing installed copies were copied into the isolated clone for validation;
no package installer or lifecycle installation script was run. No lockfile
or dependency declaration changed. Existing dependencies retain their licenses.

Text uses the local `Georgia`, `Times New Roman`, `serif` font stack. No font is
downloaded or bundled. Procedural geometry and texture drawing commands are
deterministic; final glyph rasterization can vary by host font availability.
