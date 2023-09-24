import * as universal from '../entries/pages/studio/_page.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/studio/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/studio/+page.ts";
export const imports = ["_app/immutable/nodes/4.91242f60.js","_app/immutable/chunks/api.b700e51a.js","_app/immutable/chunks/scheduler.08130eb6.js","_app/immutable/chunks/index.dcfd4ecf.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.797fb494.js","_app/immutable/chunks/singletons.22ea729c.js","_app/immutable/chunks/stores.e77d4b23.js"];
export const stylesheets = ["_app/immutable/assets/ProgressBar.4f1e9ba5.css"];
export const fonts = [];
