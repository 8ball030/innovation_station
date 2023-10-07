import { browser } from "$app/environment";
import { error } from "@sveltejs/kit";
import { fail } from "@sveltejs/kit";

export const prerender = true;

export const base = "http://46.101.6.36:8001";

const cache = new Map();

export async function get(
 fetch: any,
 endpoint: string,
 params?: Record<string, string>
) {
 const q = new URLSearchParams(params);
 const url = `${base}/${endpoint}`;

 let response;

 try {
  response = await fetch(url);
 } catch (e) {
  return { error: true, data: [] };
 } finally {
  console.log("end");
 }

 let data = [];
 data = await response.json();

 return data;
}

export async function post(
 endpoint: string,
 payload: any,
 params?: Record<string, string>
) {
 const url = `${base}/${endpoint}`;

 let response;

 try {
  response = await fetch(url, {
   method: "POST",
   body: JSON.stringify(payload),
   headers: {
    "Content-Type": "application/json",
   },
  });
 } catch (e) {
  console.log(e);
  return fail(500, { msg: "Failed to post" });
  // return { error: true, data: null };
 } finally {
  console.log("end post");
 }

 const json = await response.json();

 return json;
}
