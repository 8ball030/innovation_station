import * as universal from '../entries/pages/market/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/market/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/market/+page.ts";
export const imports = ["_app/immutable/nodes/3.0f1b2f0e.js","_app/immutable/chunks/api.b700e51a.js","_app/immutable/chunks/scheduler.08130eb6.js","_app/immutable/chunks/index.dcfd4ecf.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.797fb494.js","_app/immutable/chunks/singletons.22ea729c.js","_app/immutable/chunks/stores.e77d4b23.js"];
export const stylesheets = ["_app/immutable/assets/3.c55c4bdc.css","_app/immutable/assets/ProgressBar.4f1e9ba5.css"];
export const fonts = [];
