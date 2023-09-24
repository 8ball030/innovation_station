import * as api from "$lib/api";

export const prerender = true
export async function load({ fetch }) {
 const data = (await api.get(fetch, "agent")) as Promise<any>;

 return data;
}
