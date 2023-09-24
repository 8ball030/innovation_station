<script lang="ts">
 import { Stepper, Step } from "@skeletonlabs/skeleton";
 import Share from "$lib/components/Share.svelte";
 import { getDrawerStore } from "@skeletonlabs/skeleton";
 import { popup } from '@skeletonlabs/skeleton';

 import type { PopupSettings } from '@skeletonlabs/skeleton';

 // props
 export let data: ComponentI[] = [];

 // types
 interface ComponentI {
  author: string;
  dependencies: Array<string>;
  description: string;
  name: string;
  type: string;
  version: string;
 }

 // configs
 const drawerStore = getDrawerStore();
 const componentTypes: any = {
  Skills: false,
  Connections: false,
  Contratcs: false,
  Agents: false,
  Services: false,
 };

 let bgImage = `
  background-image: url("/bgPage.png");
  background-size: cover;
  background-position: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;`;

 const drawerSettings: any = {
  id: "info-drawer",
  bgDrawer: "text-white",
  // bgBackdrop:
  //  "bg-gradient-to-tr from-indigo-500/50 via-purple-500/50 to-pink-500/50",
  width: "w-[380px] md:w-[550px]",
 };

  const popupHover: PopupSettings = {
   event: 'hover',
   target: 'popupHover',
   placement: 'top'
 };

  // state variables
  let isMinted = false;
  let search = '';


 // buisness logic
 function openDrawer() {
  drawerStore.open(drawerSettings);
 }
 $:filteredData = data.filter((d: any) => d.description.includes(search));
 console.log("filteredData")
 console.log(filteredData)
</script>

<div style={bgImage}>
 <div class="container h-full mx-auto flex justify-center items-center">
  <div class="stepper">
   <Stepper>
    <Step>
     <svelte:fragment slot="header"
      >Hello! Lets build some components</svelte:fragment
     >
     What type of components would you like to generate today?
     <div class="mt-6">
      <span
        class="chip mr-3 variant-filled"
       >
        <span>+</span>
        <span class="capitalize">Protocols</span>
      </span>
      {#each Object.keys(componentTypes) as f}
       <span
        use:popup={popupHover}
        class="chip mr-3 variant-soft"
       >
        <span class="capitalize">{f}</span>
       </span>
       <div class="card p-1 variant-filled-secondary" data-popup="popupHover">
        <p>Comming Soon</p>
        <div class="arrow variant-filled-secondary" />
      </div>
      {/each}
     </div>
    </Step>
    <Step>
     <svelte:fragment slot="header">Lets search existing protocols </svelte:fragment>
     Enter the description of the protocol you want to use
     <textarea bind:value={search} class="textarea mb-4" rows="2"  title="Protocol" placeholder="create me a read update sql crud protocol .. " />
     Matching protocols
     <select class="select">
      {#each Object.values(filteredData) as protocol}
        <option value="1">{protocol?.description}</option>
      {/each}
     </select>
     {#if filteredData.length}
      <div>We found {filteredData.length} matching protocols for you :D</div>
      <div>Let's <button>Mint</button> one!?</div>
      {:else}
      <div>No matching protocols found :(</div>
      <div>Let's <button>Build</button> it!?</div>
      {/if}
    </Step>
   </Stepper>
   <button class="mt-10 help-btn" on:click={openDrawer}>Help Me !</button>
   {#if isMinted}
    <Share />
   {/if}
  </div>
 </div>
</div>

<style>
 .stepper {
  width: 80%;
 }
 .help-btn {
  color: rgb(37, 175, 249);
 }
 .help-btn:hover {
  color: rgb(37, 249, 171);
 }
</style>
