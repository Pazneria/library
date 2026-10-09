# Hinged Library exit

Focused branch from live main `f47874c78844936ee048cf45b81cf3827f5b35b7`. The previous handoff branch, frozen benchmark, optimized archives and live site are preserved.

## Behavior

Approaching the southeast oak exit on the lower floor opens it outward on its brass hinge axis. The panelled leaf and latch move as a rigid assembly; the casing, EXIT/HOME plaque and hinge barrels stay fixed. Analytic critically damped motion uses the existing frame loop, starts gently, reverses smoothly and adds no timer or scheduler. It holds open while the visitor is near or occupies the swept area, and closes after they retreat clear. If a swing would contact a visitor inspecting/backtracking beside it, the leaf safely stalls until they move clear.

The east-wall bay is now a real 1.36 m × 2.46 m opening, including the formerly blocking wainscot. A supported stone landing and small brass sill cross the 0.5 m wall thickness. The leaf has a rotating rectangle/circle collision test; it blocks when closed and still blocks beside the open passage. Walking outward across x=7.62 within the player-safe opening returns to the existing public homepage in the same tab. Reverse crossings, merely approaching/opening, gallery height, side-wall positions, teleports and movement already outside do not navigate. Navigation remains idempotent and runs last in the host frame, after which the existing host cleanup stops input/frames and disposes scene resources.

E, a deliberate scene click or the contextual button opens the closed door; another deliberate use once passable leaves. Opening never queues an automatic delayed exit. The real controls/reader/keyboard homepage links and Alt+X remain immediate accessible fallbacks. Existing typing/repeat/drag/capture guards and browser Back reconstruction remain intact. No automatic pointer capture was added.

## Geometry and preservation

The rear-edge hinge pivot is world `(6.89595,0,8.4)`; the leaf rotates outward through 90°. The old 0.70 depth adjustment is baked into leaf geometry rather than scaling its rotating parent. CPU sweep samples at every degree verify clearance against the actual carved wall, stair, south bookcase and fixed casing. Jamb wood retains a 12 mm gap from paint.

The optional `buildLibrary` portal replaces exactly the original east-wall volume and two wainscot volumes with seven split volumes. Each split reuses the old volume's two random UV offsets, preserving RNG consumption. Every other room position/normal/UV/index buffer and authored book stream is byte-identical in CPU construction. The full transformed-triangle paint guard also passes on the production carved room.

The exit assembly is eight material batches and 598 triangles, versus the previous static exit's four batches and 538 triangles. The shell split adds 48 triangles. The 512×256 plaque texture, room materials, lighting, quality settings, entry camera, mouse look, frozen book/exterior and private links are preserved. These are construction counts, not performance claims. The door continues the exit's existing non-shadow-casting behavior.

## Verification and remaining QA

Focused CPU tests cover analytic cadence, opening/closing/occupancy, rotated collision, threshold direction/height/side/teleport guards, E/click/manual navigation, one-shot teardown, actual movement across the supported landing and backtracking. Existing CPU suites, build and manifest checks are required before PR delivery. The exact homepage inline bridge remains unchanged.

No browser, server or GPU session is used for this phase. Parent-controlled sequential visual/native QA remains required: hinge/latch appearance and clearances in motion, doorway lighting/landing, approach speed and pause/resume, E/click/drag feel, actual threshold navigation and browser Back, and unchanged homepage entry/reading/controls behavior. Parent coordinates publication; this branch does not deploy.
