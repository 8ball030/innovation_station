import { g as get } from "../../../chunks/api.js";
const ssr = false;
async function load({ fetch }) {
  const data = await get(fetch, "agent");
  return data;
}
export {
  load,
  ssr
};
