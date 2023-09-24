import { browser } from "$app/environment";
import { error } from "@sveltejs/kit";

export const base = "http://46.101.6.36:8001";

const cache = new Map();

export async function get(
 fetch: typeof globalThis.fetch,
 endpoint: string,
 params?: Record<string, string>
) {
 const q = new URLSearchParams(params);
 const url = `${base}/${endpoint}`;

 if (cache.has(url)) {
  return cache.get(url);
 }

 const response = await fetch(url);

 let data = [];

 if (!response.ok) {
  console.log("error");
  console.log(response.status);
 } else {
  data = await response.json();
  if (browser) {
   cache.set(url, data);
  }
 }

 return data;
}
