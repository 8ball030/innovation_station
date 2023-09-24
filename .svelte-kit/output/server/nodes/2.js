

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.0b15a326.js","_app/immutable/chunks/scheduler.08130eb6.js","_app/immutable/chunks/index.dcfd4ecf.js","_app/immutable/chunks/LinkButton.ce190434.js"];
export const stylesheets = ["_app/immutable/assets/2.29d97e7c.css","_app/immutable/assets/LinkButton.00b16663.css"];
export const fonts = [];
