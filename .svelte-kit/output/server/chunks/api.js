import "./index.js";
const base = "http://46.101.6.36:8001";
const cache = /* @__PURE__ */ new Map();
async function get(fetch, endpoint, params) {
  new URLSearchParams(params);
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
  }
  return data;
}
export {
  get as g
};
