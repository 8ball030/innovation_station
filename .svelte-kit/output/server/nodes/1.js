

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.b20cd96f.js","_app/immutable/chunks/scheduler.08130eb6.js","_app/immutable/chunks/index.dcfd4ecf.js","_app/immutable/chunks/stores.e77d4b23.js","_app/immutable/chunks/singletons.22ea729c.js"];
export const stylesheets = [];
export const fonts = [];
