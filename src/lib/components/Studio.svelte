<script lang="ts">
 import { Stepper, Step } from "@skeletonlabs/skeleton";
 import Share from "$lib/components/Share.svelte";
 import { getDrawerStore } from "@skeletonlabs/skeleton";

 const drawerStore = getDrawerStore();

 export let data: any = [];

 const components: any = {
  Protocols: false,
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

 let isMinted = false;

 const drawerSettings: any = {
  id: "info-drawer",
  bgDrawer: "text-white",
  // bgBackdrop:
  //  "bg-gradient-to-tr from-indigo-500/50 via-purple-500/50 to-pink-500/50",
  width: "w-[380px] md:w-[550px]",
 };

 function openDrawer() {
  drawerStore.open(drawerSettings);
 }
 console.log(components);
 $: selected = components;
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
      {#each Object.keys(components) as f}
       <span
        class="chip mr-3 {components[f] ? 'variant-filled' : 'variant-soft'}"
        on:click={() => {
         components[f] = !components[f];
         selected = components;
        }}
        on:keypress
       >
        {#if components[f]}<span>+</span>{/if}
        <span class="capitalize">{f}</span>
       </span>
      {/each}
     </div>
    </Step>
    <Step>
     <svelte:fragment slot="header">header2</svelte:fragment>
     content2
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
