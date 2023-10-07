<script lang="ts">
 import { getDrawerStore } from "@skeletonlabs/skeleton";

 import Card from "$lib/components/Card.svelte";
 import Details from "$lib/components/Details.svelte";
 import { componentTypes } from "$lib/config";
 import Error from "$lib/components/Error.svelte";

 export let data: any = [];
 export let fetchError: string = "";

 // configs
 const drawerStore = getDrawerStore();
 const drawerSettings: any = {
  id: "info-drawer",
  bgDrawer: "text-white",
  width: "w-[380px] md:w-[550px]",
 };
 function openDrawer() {
  drawerStore.open(drawerSettings);
 }

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

 let selectedType = componentTypes[0];

 function handleBuy() {
  // TODO: add contract call
 }

 function showDetails(selected: any) {
  selectedCp = selected;
 }

 let componantsList = data;
 let list = [
  ...componantsList,
  ...componantsList,
  ...componantsList,
  ...componantsList,
  ...componantsList,
 ];
 let selectedCp = componantsList[0];
</script>

<div style={bgImage}>
 <div class="h-full mx-auto mt-10 pt-10 mx-10">
  <div class="mb-4 mx-10 flex justify-between">
   <select
    bind:value={selectedType}
    class="block py-2.5 px-0 w-56 text-sm text-green-500 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:text-gray-100 dark:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
   >
    {#each componentTypes as value}<option {value}>{value}</option>{/each}
   </select>
   <a
    class="ml-10"
    href="https://registry.olas.network/services"
    target="_blank"
   >
    View all Services on Olas
   </a>
  </div>
  <div class="flex gap-10 mx-10">
   <div class="over">
    <section class="grid grid-cols-2 md:grid-cols-4 gap-4">
     {#each list as component}
      <Card {component} {handleBuy} {showDetails} />
     {/each}
    </section>
   </div>
   {#if data?.length}
    <Details {selectedCp} />
   {:else}
    <Error {openDrawer} />
   {/if}
  </div>
 </div>
</div>

<style>
 .over {
  overflow-y: scroll;
  height: 80vh;
 }
</style>
