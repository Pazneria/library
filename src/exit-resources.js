// Teardown for an explicit exit. No WebGL context, network, or DOM is needed
// by this function, so shared texture and target ownership can be CPU tested.
export function disposeLibraryResources({ scene, renderer, environmentTarget, materials = [], extraMaterials = [] }) {
  const geometries = new Set(), allMaterials = new Set([...materials, ...extraMaterials]);
  const textures = new Set(), targets = new Set(), instances = new Set();
  const collectTexture = value => {
    if (value?.isTexture) textures.add(value);
    else if (Array.isArray(value)) value.forEach(collectTexture);
  };
  scene.traverse(object => {
    if (object.geometry) geometries.add(object.geometry);
    for (const material of [].concat(object.material || [])) allMaterials.add(material);
    if (object.isInstancedMesh) instances.add(object);
    for (const target of [object.shadow?.map, object.shadow?.mapPass]) if (target) targets.add(target);
  });
  if (environmentTarget) targets.add(environmentTarget);
  collectTexture(scene.environment); collectTexture(scene.background);
  for (const material of allMaterials) {
    for (const value of Object.values(material)) collectTexture(value);
    for (const uniform of Object.values(material.uniforms || {})) collectTexture(uniform.value);
  }
  // A render target owns its textures. Dispose it once, without double disposal.
  for (const target of targets) {
    for (const texture of target.textures || [target.texture]) textures.delete(texture);
  }
  scene.environment = null;
  scene.overrideMaterial = null;
  for (const instance of instances) instance.dispose();
  for (const geometry of geometries) geometry.dispose();
  for (const material of allMaterials) material.dispose();
  for (const texture of textures) {
    texture.dispose();
    // Disposed rooms can remain in browser history; drop generated canvas refs.
    if (texture.isCanvasTexture) texture.image = null;
  }
  for (const target of targets) target.dispose();
  // Three r170 renderer.dispose owns its render lists, programs and bindings.
  renderer.dispose();
  scene.clear();
}
