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

The host copy preserves `index.html` and all five source modules byte-for-byte
from the fixed derivative. Hosting changes are the Vite base/output directory,
portable look-test script and documentation. `docs/` is rebuilt from that source.

Geometry comparisons used stubbed textures and CPU construction; the texture
and book source files were separately compared byte-for-byte. Look tests use
mock events against the actual look module. There was no new GPU session,
rendered screenshot, native input automation or frame-rate measurement.

Raw input behavior follows the
[Pointer Lock specification](https://w3c.github.io/pointerlock/).
Owner acceptance still needs native browser testing when the test window is
available.
