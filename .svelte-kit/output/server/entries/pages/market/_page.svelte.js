import { c as create_ssr_component, f as subscribe, g as createEventDispatcher, e as escape, a as add_attribute, v as validate_component, h as each } from "../../../chunks/ssr.js";
import "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { w as writable } from "../../../chunks/index2.js";
import { p as page } from "../../../chunks/stores.js";
const storeHighlightJs = writable(void 0);
const cBase = "overflow-hidden shadow";
const cHeader = "text-xs text-white/50 uppercase flex justify-between items-center p-2 pl-4";
const cPre = "whitespace-pre-wrap break-all p-4 pt-1";
function languageFormatter(lang) {
  if (lang === "js")
    return "javascript";
  if (lang === "ts")
    return "typescript";
  return lang;
}
const CodeBlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let $storeHighlightJs, $$unsubscribe_storeHighlightJs;
  $$unsubscribe_storeHighlightJs = subscribe(storeHighlightJs, (value) => $storeHighlightJs = value);
  createEventDispatcher();
  let { language = "plaintext" } = $$props;
  let { code = "" } = $$props;
  let { lineNumbers = false } = $$props;
  let { background = "bg-neutral-900/90" } = $$props;
  let { blur = "" } = $$props;
  let { text = "text-sm" } = $$props;
  let { color = "text-white" } = $$props;
  let { rounded = "rounded-container-token" } = $$props;
  let { shadow = "shadow" } = $$props;
  let { button = "btn btn-sm variant-soft !text-white" } = $$props;
  let { buttonLabel = "Copy" } = $$props;
  let { buttonCopied = "👍" } = $$props;
  let formatted = false;
  let displayCode = code;
  if ($$props.language === void 0 && $$bindings.language && language !== void 0)
    $$bindings.language(language);
  if ($$props.code === void 0 && $$bindings.code && code !== void 0)
    $$bindings.code(code);
  if ($$props.lineNumbers === void 0 && $$bindings.lineNumbers && lineNumbers !== void 0)
    $$bindings.lineNumbers(lineNumbers);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.blur === void 0 && $$bindings.blur && blur !== void 0)
    $$bindings.blur(blur);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.button === void 0 && $$bindings.button && button !== void 0)
    $$bindings.button(button);
  if ($$props.buttonLabel === void 0 && $$bindings.buttonLabel && buttonLabel !== void 0)
    $$bindings.buttonLabel(buttonLabel);
  if ($$props.buttonCopied === void 0 && $$bindings.buttonCopied && buttonCopied !== void 0)
    $$bindings.buttonCopied(buttonCopied);
  {
    if ($storeHighlightJs !== void 0) {
      displayCode = $storeHighlightJs.highlight(code, { language }).value.trim();
      formatted = true;
    }
  }
  {
    if (lineNumbers) {
      displayCode = displayCode.replace(/^/gm, () => {
        return '<span class="line"></span>	';
      });
      formatted = true;
    }
  }
  classesBase = `${cBase} ${background} ${blur} ${text} ${color} ${rounded} ${shadow} ${$$props.class ?? ""}`;
  $$unsubscribe_storeHighlightJs();
  return ` ${language && code ? `<div class="${"codeblock " + escape(classesBase, true)}" data-testid="codeblock"> <header class="${"codeblock-header " + escape(cHeader, true)}"> <span class="codeblock-language">${escape(languageFormatter(language))}</span>  <button class="${"codeblock-btn " + escape(button, true)}">${escape(buttonLabel)}</button></header>  <pre class="${"codeblock-pre " + escape(cPre, true)}"><code class="${"codeblock-code language-" + escape(language, true) + " lineNumbers"}">${formatted ? `<!-- HTML_TAG_START -->${displayCode}<!-- HTML_TAG_END -->` : `${escape(code.trim())}`}</code></pre></div>` : ``}`;
});
const nounImg = "/_app/immutable/assets/noun.104abdf8.png";
const Card_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".name.svelte-sk2wmp{color:#34ffd0;font-size:16px;font-weight:500;text-transform:capitalize}.divide.svelte-sk2wmp{border-bottom:0.8px solid #d0bcffb0;margin:0px 8px}.label.svelte-sk2wmp{font-size:12px;padding-right:5px}.value.svelte-sk2wmp{color:white;font-weight:600}.card-container.svelte-sk2wmp{border:1px solid #d0bcff;border-radius:10px;color:rgba(255, 255, 255, 0.5);text-align:left;font-size:14px;font-style:normal;font-weight:400;line-height:150%;letter-spacing:-0.48px}.card-info.svelte-sk2wmp{background:linear-gradient(\n   180deg,\n   #c1abf9 -51.61%,\n   rgba(124, 116, 148, 0.43) 34.84%,\n   rgba(0, 0, 0, 0) 100%\n  );padding:7px}.card-img.svelte-sk2wmp{cursor:pointer;max-height:170px}.card-img.svelte-sk2wmp:hover{filter:hue-rotate(90deg) brightness(60%) grayscale(10%)}.button-buy.svelte-sk2wmp{width:60px;background:#22966b;color:white;padding:2px;font-weight:700;margin:5px;border-radius:5px}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { handleBuy: handleBuy2 } = $$props;
  let { component } = $$props;
  let { showDetails } = $$props;
  if ($$props.handleBuy === void 0 && $$bindings.handleBuy && handleBuy2 !== void 0)
    $$bindings.handleBuy(handleBuy2);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.showDetails === void 0 && $$bindings.showDetails && showDetails !== void 0)
    $$bindings.showDetails(showDetails);
  $$result.css.add(css$1);
  return `<div class="border max-w-full card-container card-hover svelte-sk2wmp"><div><img class="card-img w-full rounded-lg cursor-pointer svelte-sk2wmp" alt=""${add_attribute("src", nounImg, 0)}> <div class="card-info svelte-sk2wmp"><span class="name svelte-sk2wmp">${escape(component.name?.replace(/_/g, " "))}</span> <div class="label svelte-sk2wmp" data-svelte-h="svelte-18t293f">Price: <span class="value svelte-sk2wmp">1 ETH</span></div> <div class="label svelte-sk2wmp">Owner: <span class="value svelte-sk2wmp">${escape(component.author)}</span></div></div></div> <div class="divide svelte-sk2wmp"></div> <button class="button-buy svelte-sk2wmp" data-svelte-h="svelte-ziu2pw">Buy</button> </div>`;
});
const dotsIcon = "/_app/immutable/assets/dotsIcon.f613cc84.svg";
const Details_svelte_svelte_type_style_lang = "";
const css = {
  code: ".details-container.svelte-bpht5w.svelte-bpht5w{background:linear-gradient(\n   180deg,\n   #7a6f96 -51.61%,\n   rgba(52, 48, 64, 0.43) 34.84%,\n   rgba(0, 0, 0, 0) 100%\n  );border:1px solid #d0bcff;border-radius:5px;color:rgba(255, 255, 255, 0.826);height:70vh;min-width:250px;margin-bottom:12px;flex:1}.details-header.svelte-bpht5w.svelte-bpht5w{padding:10px;height:40px;border-bottom:1px solid #d0bcff;justify-content:space-between;display:flex;color:#34ffd0;text-transform:capitalize}.details-header.svelte-bpht5w img.svelte-bpht5w{width:20%}.details-content.svelte-bpht5w.svelte-bpht5w{padding:10px}",
  map: null
};
const Details = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { selectedCp } = $$props;
  if ($$props.selectedCp === void 0 && $$bindings.selectedCp && selectedCp !== void 0)
    $$bindings.selectedCp(selectedCp);
  $$result.css.add(css);
  return `<div class="details-container svelte-bpht5w"><div class="details-header svelte-bpht5w">${escape(selectedCp.name?.replace(/_/g, " "))}<img${add_attribute("src", dotsIcon, 0)} alt="dotsIcon" class="svelte-bpht5w"></div> <div class="details-content svelte-bpht5w"><div class="details-info mb-10"><div class="mb-4">${escape(selectedCp.description)}</div>  <div>Owned by: ${escape(selectedCp.author)}</div> <div>Version: ${escape(selectedCp.version)}</div></div> ${validate_component(CodeBlock, "CodeBlock").$$render(
    $$result,
    {
      language: "ts",
      code: `const skeleton: string = 'awesome';`
    },
    {},
    {}
  )}</div> </div>`;
});
function handleBuy() {
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let bgImage = `
    background-image: url("/bgPage.png");
    background-size: cover;
    background-position: center;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
  `;
  let componentTypes = ["Protocols", "Skills", "Connections", "Contratcs", "Agents", "ervices"];
  componentTypes[0];
  function showDetails(selected) {
    selectedCp = selected;
  }
  let componantsList = Object.values($page.data);
  let list = [
    ...componantsList,
    ...componantsList,
    ...componantsList,
    ...componantsList,
    ...componantsList,
    ...componantsList,
    ...componantsList,
    ...componantsList
  ];
  let selectedCp = componantsList[0];
  $$unsubscribe_page();
  return `<div${add_attribute("style", bgImage, 0)}><div class="h-full mx-auto mt-20 pt-10 mx-10"><div class="mb-4 mx-10"><select class="block py-2.5 px-0 w-56 text-sm text-green-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-100 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">${each(componentTypes, (value) => {
    return `<option${add_attribute("value", value, 0)}>${escape(value)}</option>`;
  })}</select></div> <div class="flex gap-10 mx-10"><div><section class="grid grid-cols-2 md:grid-cols-4 gap-4">${each(list, (component) => {
    return `${validate_component(Card, "Card").$$render($$result, { component, handleBuy, showDetails }, {}, {})}`;
  })}</section></div> ${validate_component(Details, "Details").$$render($$result, { selectedCp }, {}, {})}</div></div></div>`;
});
export {
  Page as default
};
