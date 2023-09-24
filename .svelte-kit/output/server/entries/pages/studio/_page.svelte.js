import { i as identity, c as create_ssr_component, f as subscribe, g as createEventDispatcher, s as setContext, e as escape, h as each, j as getContext, k as set_store_value, o as onDestroy, a as add_attribute, b as compute_slots, v as validate_component } from "../../../chunks/ssr.js";
import { p as prefersReducedMotionStore } from "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { w as writable } from "../../../chunks/index2.js";
import { p as page } from "../../../chunks/stores.js";
function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}
const cBase$1 = "space-y-4";
const cHeader$1 = "flex items-center border-t mt-[15px]";
const cHeaderStep = "-mt-[15px] transition-all duration-300";
const cContent$1 = "";
const Stepper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isActive;
  let classesBase;
  let classesHeader;
  let classesHeaderStep;
  let classesBadge;
  let classesContent;
  let $state, $$unsubscribe_state;
  let $prefersReducedMotionStore, $$unsubscribe_prefersReducedMotionStore;
  $$unsubscribe_prefersReducedMotionStore = subscribe(prefersReducedMotionStore, (value) => $prefersReducedMotionStore = value);
  const dispatch = createEventDispatcher();
  let { gap = "gap-4" } = $$props;
  let { stepTerm = "Step" } = $$props;
  let { badge = "variant-filled-surface" } = $$props;
  let { active = "variant-filled" } = $$props;
  let { border = "border-surface-400-500-token" } = $$props;
  let { start = 0 } = $$props;
  let { justify = "justify-between" } = $$props;
  let { buttonBack = "variant-ghost" } = $$props;
  let { buttonBackType = "button" } = $$props;
  let { buttonBackLabel = "&larr; Back" } = $$props;
  let { buttonNext = "variant-filled" } = $$props;
  let { buttonNextType = "button" } = $$props;
  let { buttonNextLabel = "Next &rarr;" } = $$props;
  let { buttonComplete = "variant-filled-primary" } = $$props;
  let { buttonCompleteType = "button" } = $$props;
  let { buttonCompleteLabel = "Complete" } = $$props;
  let { regionHeader = "" } = $$props;
  let { regionContent = "" } = $$props;
  let { transitions = !$prefersReducedMotionStore } = $$props;
  let { transitionIn = fade } = $$props;
  let { transitionInParams = { duration: 100 } } = $$props;
  let { transitionOut = fade } = $$props;
  let { transitionOutParams = { duration: 100 } } = $$props;
  let state = writable({ current: start, total: 0 });
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  setContext("state", state);
  setContext("dispatchParent", dispatch);
  setContext("stepTerm", stepTerm);
  setContext("gap", gap);
  setContext("justify", justify);
  setContext("buttonBack", buttonBack);
  setContext("buttonBackType", buttonBackType);
  setContext("buttonBackLabel", buttonBackLabel);
  setContext("buttonNext", buttonNext);
  setContext("buttonNextType", buttonNextType);
  setContext("buttonNextLabel", buttonNextLabel);
  setContext("buttonComplete", buttonComplete);
  setContext("buttonCompleteType", buttonCompleteType);
  setContext("buttonCompleteLabel", buttonCompleteLabel);
  setContext("transitions", transitions);
  setContext("transitionIn", transitionIn);
  setContext("transitionInParams", transitionInParams);
  setContext("transitionOut", transitionOut);
  setContext("transitionOutParams", transitionOutParams);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  if ($$props.stepTerm === void 0 && $$bindings.stepTerm && stepTerm !== void 0)
    $$bindings.stepTerm(stepTerm);
  if ($$props.badge === void 0 && $$bindings.badge && badge !== void 0)
    $$bindings.badge(badge);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.start === void 0 && $$bindings.start && start !== void 0)
    $$bindings.start(start);
  if ($$props.justify === void 0 && $$bindings.justify && justify !== void 0)
    $$bindings.justify(justify);
  if ($$props.buttonBack === void 0 && $$bindings.buttonBack && buttonBack !== void 0)
    $$bindings.buttonBack(buttonBack);
  if ($$props.buttonBackType === void 0 && $$bindings.buttonBackType && buttonBackType !== void 0)
    $$bindings.buttonBackType(buttonBackType);
  if ($$props.buttonBackLabel === void 0 && $$bindings.buttonBackLabel && buttonBackLabel !== void 0)
    $$bindings.buttonBackLabel(buttonBackLabel);
  if ($$props.buttonNext === void 0 && $$bindings.buttonNext && buttonNext !== void 0)
    $$bindings.buttonNext(buttonNext);
  if ($$props.buttonNextType === void 0 && $$bindings.buttonNextType && buttonNextType !== void 0)
    $$bindings.buttonNextType(buttonNextType);
  if ($$props.buttonNextLabel === void 0 && $$bindings.buttonNextLabel && buttonNextLabel !== void 0)
    $$bindings.buttonNextLabel(buttonNextLabel);
  if ($$props.buttonComplete === void 0 && $$bindings.buttonComplete && buttonComplete !== void 0)
    $$bindings.buttonComplete(buttonComplete);
  if ($$props.buttonCompleteType === void 0 && $$bindings.buttonCompleteType && buttonCompleteType !== void 0)
    $$bindings.buttonCompleteType(buttonCompleteType);
  if ($$props.buttonCompleteLabel === void 0 && $$bindings.buttonCompleteLabel && buttonCompleteLabel !== void 0)
    $$bindings.buttonCompleteLabel(buttonCompleteLabel);
  if ($$props.regionHeader === void 0 && $$bindings.regionHeader && regionHeader !== void 0)
    $$bindings.regionHeader(regionHeader);
  if ($$props.regionContent === void 0 && $$bindings.regionContent && regionContent !== void 0)
    $$bindings.regionContent(regionContent);
  if ($$props.transitions === void 0 && $$bindings.transitions && transitions !== void 0)
    $$bindings.transitions(transitions);
  if ($$props.transitionIn === void 0 && $$bindings.transitionIn && transitionIn !== void 0)
    $$bindings.transitionIn(transitionIn);
  if ($$props.transitionInParams === void 0 && $$bindings.transitionInParams && transitionInParams !== void 0)
    $$bindings.transitionInParams(transitionInParams);
  if ($$props.transitionOut === void 0 && $$bindings.transitionOut && transitionOut !== void 0)
    $$bindings.transitionOut(transitionOut);
  if ($$props.transitionOutParams === void 0 && $$bindings.transitionOutParams && transitionOutParams !== void 0)
    $$bindings.transitionOutParams(transitionOutParams);
  isActive = (step) => step === $state.current;
  classesBase = `${cBase$1} ${$$props.class ?? ""}`;
  classesHeader = `${cHeader$1} ${border} ${gap} ${regionHeader}`;
  classesHeaderStep = `${cHeaderStep}`;
  classesBadge = (step) => isActive(step) ? active : badge;
  classesContent = `${cContent$1} ${regionContent}`;
  $$unsubscribe_state();
  $$unsubscribe_prefersReducedMotionStore();
  return `<div class="${"stepper " + escape(classesBase, true)}" data-testid="stepper"> ${$state.total ? `<header class="${"stepper-header " + escape(classesHeader, true)}">${each(Array.from(Array($state.total).keys()), (step) => {
    return `<div class="${[
      "stepper-header-step " + escape(classesHeaderStep, true),
      isActive(step) ? "flex-1" : ""
    ].join(" ").trim()}"><span class="${"badge " + escape(classesBadge(step), true)}">${escape(isActive(step) ? `${stepTerm} ${step + 1}` : step + 1)}</span> </div>`;
  })}</header>` : ``}  <div class="${"stepper-content " + escape(classesContent, true)}">${slots.default ? slots.default({}) : ``}</div></div>`;
});
const cBase = "space-y-4";
const cHeader = "text-2xl font-bold";
const cContent = "space-y-4";
const cNavigation = "flex";
const Step = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesHeader;
  let classesContent;
  let classesNavigation;
  let $$slots = compute_slots(slots);
  let $state, $$unsubscribe_state;
  let { locked = false } = $$props;
  let { regionHeader = "" } = $$props;
  let { regionContent = "" } = $$props;
  let { regionNavigation = "" } = $$props;
  let { state = getContext("state") } = $$props;
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  let { dispatchParent = getContext("dispatchParent") } = $$props;
  let { stepTerm = getContext("stepTerm") } = $$props;
  let { gap = getContext("gap") } = $$props;
  let { justify = getContext("justify") } = $$props;
  let { buttonBack = getContext("buttonBack") } = $$props;
  let { buttonBackType = getContext("buttonBackType") } = $$props;
  let { buttonBackLabel = getContext("buttonBackLabel") } = $$props;
  let { buttonNext = getContext("buttonNext") } = $$props;
  let { buttonNextType = getContext("buttonNextType") } = $$props;
  let { buttonNextLabel = getContext("buttonNextLabel") } = $$props;
  let { buttonComplete = getContext("buttonComplete") } = $$props;
  let { buttonCompleteType = getContext("buttonCompleteType") } = $$props;
  let { buttonCompleteLabel = getContext("buttonCompleteLabel") } = $$props;
  let { transitions = getContext("transitions") } = $$props;
  let { transitionIn = getContext("transitionIn") } = $$props;
  let { transitionInParams = getContext("transitionInParams") } = $$props;
  let { transitionOut = getContext("transitionOut") } = $$props;
  let { transitionOutParams = getContext("transitionOutParams") } = $$props;
  const stepIndex = $state.total;
  set_store_value(state, $state.total++, $state);
  onDestroy(() => {
    set_store_value(state, $state.total--, $state);
  });
  if ($$props.locked === void 0 && $$bindings.locked && locked !== void 0)
    $$bindings.locked(locked);
  if ($$props.regionHeader === void 0 && $$bindings.regionHeader && regionHeader !== void 0)
    $$bindings.regionHeader(regionHeader);
  if ($$props.regionContent === void 0 && $$bindings.regionContent && regionContent !== void 0)
    $$bindings.regionContent(regionContent);
  if ($$props.regionNavigation === void 0 && $$bindings.regionNavigation && regionNavigation !== void 0)
    $$bindings.regionNavigation(regionNavigation);
  if ($$props.state === void 0 && $$bindings.state && state !== void 0)
    $$bindings.state(state);
  if ($$props.dispatchParent === void 0 && $$bindings.dispatchParent && dispatchParent !== void 0)
    $$bindings.dispatchParent(dispatchParent);
  if ($$props.stepTerm === void 0 && $$bindings.stepTerm && stepTerm !== void 0)
    $$bindings.stepTerm(stepTerm);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  if ($$props.justify === void 0 && $$bindings.justify && justify !== void 0)
    $$bindings.justify(justify);
  if ($$props.buttonBack === void 0 && $$bindings.buttonBack && buttonBack !== void 0)
    $$bindings.buttonBack(buttonBack);
  if ($$props.buttonBackType === void 0 && $$bindings.buttonBackType && buttonBackType !== void 0)
    $$bindings.buttonBackType(buttonBackType);
  if ($$props.buttonBackLabel === void 0 && $$bindings.buttonBackLabel && buttonBackLabel !== void 0)
    $$bindings.buttonBackLabel(buttonBackLabel);
  if ($$props.buttonNext === void 0 && $$bindings.buttonNext && buttonNext !== void 0)
    $$bindings.buttonNext(buttonNext);
  if ($$props.buttonNextType === void 0 && $$bindings.buttonNextType && buttonNextType !== void 0)
    $$bindings.buttonNextType(buttonNextType);
  if ($$props.buttonNextLabel === void 0 && $$bindings.buttonNextLabel && buttonNextLabel !== void 0)
    $$bindings.buttonNextLabel(buttonNextLabel);
  if ($$props.buttonComplete === void 0 && $$bindings.buttonComplete && buttonComplete !== void 0)
    $$bindings.buttonComplete(buttonComplete);
  if ($$props.buttonCompleteType === void 0 && $$bindings.buttonCompleteType && buttonCompleteType !== void 0)
    $$bindings.buttonCompleteType(buttonCompleteType);
  if ($$props.buttonCompleteLabel === void 0 && $$bindings.buttonCompleteLabel && buttonCompleteLabel !== void 0)
    $$bindings.buttonCompleteLabel(buttonCompleteLabel);
  if ($$props.transitions === void 0 && $$bindings.transitions && transitions !== void 0)
    $$bindings.transitions(transitions);
  if ($$props.transitionIn === void 0 && $$bindings.transitionIn && transitionIn !== void 0)
    $$bindings.transitionIn(transitionIn);
  if ($$props.transitionInParams === void 0 && $$bindings.transitionInParams && transitionInParams !== void 0)
    $$bindings.transitionInParams(transitionInParams);
  if ($$props.transitionOut === void 0 && $$bindings.transitionOut && transitionOut !== void 0)
    $$bindings.transitionOut(transitionOut);
  if ($$props.transitionOutParams === void 0 && $$bindings.transitionOutParams && transitionOutParams !== void 0)
    $$bindings.transitionOutParams(transitionOutParams);
  classesBase = `${cBase} ${$$props.class ?? ""}`;
  classesHeader = `${cHeader} ${regionHeader}`;
  classesContent = `${cContent} ${regionContent}`;
  classesNavigation = `${cNavigation} ${justify} ${gap} ${regionNavigation}`;
  $$unsubscribe_state();
  return `  ${stepIndex === $state.current ? `<div class="${"step " + escape(classesBase, true)}" data-testid="step"> <header class="${"step-header " + escape(classesHeader, true)}">${slots.header ? slots.header({}) : `${escape(stepTerm)} ${escape(stepIndex + 1)}`}</header>  <div class="${"step-content " + escape(classesContent, true)}">${slots.default ? slots.default({}) : `(${escape(stepTerm)} ${escape(stepIndex + 1)} Content)`}</div>  ${$state.total > 1 ? `<div class="${"step-navigation " + escape(classesNavigation, true)}">${stepIndex === 0 && $$slots.navigation ? ` <div class="step-navigation-slot">${slots.navigation ? slots.navigation({}) : ``}</div>` : ` <button${add_attribute("type", buttonBackType, 0)} class="${"btn " + escape(buttonBack, true)}" ${$state.current === 0 ? "disabled" : ""}><!-- HTML_TAG_START -->${buttonBackLabel}<!-- HTML_TAG_END --></button>`} ${stepIndex < $state.total - 1 ? ` <button${add_attribute("type", buttonNextType, 0)} class="${"btn " + escape(buttonNext, true)}" ${locked ? "disabled" : ""}>${locked ? `<svg class="w-3 aspect-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"></path></svg>` : ``} <span><!-- HTML_TAG_START -->${buttonNextLabel}<!-- HTML_TAG_END --></span></button>` : ` <button${add_attribute("type", buttonCompleteType, 0)} class="${"btn " + escape(buttonComplete, true)}" ${locked ? "disabled" : ""}><!-- HTML_TAG_START -->${buttonCompleteLabel}<!-- HTML_TAG_END --></button>`}</div>` : ``}</div>` : ``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let bgImage = `
    background-image: url("/bgPage.png");
    background-size: cover;
    background-position: center;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;`;
  $$unsubscribe_page();
  return `<div${add_attribute("style", bgImage, 0)}><div class="container h-full mx-auto flex justify-center items-center">${validate_component(Stepper, "Stepper").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Step, "Step").$$render($$result, {}, {}, {
        header: () => {
          return `header1`;
        },
        default: () => {
          return `Hello! What components do you want to generate?
    <div data-svelte-h="svelte-n2nji5"><button>Skill</button><button>Protocol</button></div>`;
        }
      })} ${validate_component(Step, "Step").$$render($$result, {}, {}, {
        header: () => {
          return `header2`;
        },
        default: () => {
          return `content2`;
        }
      })}`;
    }
  })}</div></div>`;
});
export {
  Page as default
};
