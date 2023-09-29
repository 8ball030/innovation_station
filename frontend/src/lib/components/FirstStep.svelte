<script lang="ts">
 import { Step, popup } from "@skeletonlabs/skeleton";

 import type { PopupSettings } from "@skeletonlabs/skeleton";

 const componentTypes: any = {
  Skills: false,
  Connections: false,
  Contratcs: false,
  Agents: false,
  Services: false,
 };
 const popupHover: PopupSettings = {
  event: "hover",
  target: "popupHover",
  placement: "top",
 };
</script>

<Step>
 <svelte:fragment slot="header"
  >Hello! Lets build some components</svelte:fragment
 >
 What type of components would you like to generate today?
 <div class="mt-6 mb-20">
  <span class="chip mr-3 variant-filled">
   <span>+</span>
   <span class="capitalize">Protocols</span>
  </span>
  {#each Object.keys(componentTypes) as f}
   <span use:popup={popupHover} class="chip mr-3 variant-soft">
    <span class="capitalize">{f}</span>
   </span>
   <div class="card p-1 variant-filled-secondary" data-popup="popupHover">
    <p>Comming Soon</p>
    <div class="arrow variant-filled-secondary" />
   </div>
  {/each}
 </div>
</Step>
