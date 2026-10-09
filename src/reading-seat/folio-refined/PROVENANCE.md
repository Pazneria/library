# Editable Folio finish refinement

This candidate is a separate, editable copy of the immutable Folio snapshot
captured on 2026-10-09 at 15:53:46 UTC. The original modules remain intact in
`../folio/`, and the original task26 source is unchanged. The API and resource
ownership contract match the original `createFolioChair` module.

| Original module | SHA256 |
| --- | --- |
| folio-chair.mjs | 53006c52f457d0dd41f86ee7182a888b9c304cc631d0a692368ffed1dd71a639 |
| folio-core.mjs | edccf32862fb2632ab8faa2282357a92126feebe8adfc5c070dfdf13ff3435c8 |

The candidate version is `1.0.0+craft-refinement.1`. Its changes are confined to
the three visual findings from the actual review:

1. Cushion cover normals follow numerical derivatives of the existing shaped
   surface, including its rim. They no longer inherit uneven triangle-area
   weights from the radial fan. Walnut member normals follow the actual taper.
2. Leather uses deterministic irregular pebble grain, shallow bump relief and
   restrained roughness variation. Its deeper umber tone separates it from the
   walnut. Bump height occupies the packed texture's red channel and roughness
   its green channel; both materials reuse the same texture handle.
3. Each exposed walnut end samples a different rotated board section. Growth
   lines are irregular, less contrasty and offset from the pith, replacing the
   repeated concentric pattern. Longitudinal grain and exposed-cut roughness are
   quieter, and taper-aware shading improves the finish at joints. Underlying
   joint geometry is unchanged; no structural construction claim is added.

Every vertex position and index is identical to the original. Bounds, proxy,
sitting anchors, back rake, arm clearance and silhouette are unchanged. The
existing controller/interaction files are unchanged from the prior sitting
commit. `tests/folio-refinement.test.mjs` verifies those facts, normal/winding
checks, packed map reuse, resource counts and idempotent disposal.

Measured chair resources remain 19,320 triangles, 12,722 vertices, five material
batches, five geometries, five materials and six textures. Typed geometry arrays
use 523,024 bytes, and texture backing arrays use 6,815,744 bytes. The full mip
formula remains 9,087,656 bytes; this is not measured VRAM. One local warmed
three-sample texture-construction check had medians of 161.4 ms before and
178.2 ms after. Roughness adds shader sampling; no GPU frame-time claim is made.

The development comparison fixture imports both modules and mounts only one at
a time. Select Original snapshot or Refined candidate; all seven cameras, lights
and exposure stay fixed. The final actual comparison uses a 1600 x 1200 viewport.
The chair's five batches plus floor produce six draws and 19,322 triangles in
ordinary inspection. The renderer tracks six geometries/seven textures before
the sitting grid is first used; after sitting, the cached grid adds one geometry
and one program. These counts belong to the fixture, not a peak memory measure.

Final images, private Library confirmations, CPU resource measurements, cleanup
and a focused draft patch are in the task workspace's `evidence/folio-refinement`.
The offline gallery embeds all before/after images. No asset source, room,
deployment, user save, content privacy or existing furniture was replaced.

The actual Library host remains unwired. Phone/touch, screen-reader behavior,
physical comfort, room lighting/composition and GPU frame-time/memory pressure
still require separate review. Before another GPU session, obtain a fresh
exclusive graphics allocation from the parent and preserve its 5418 server.
