<script lang="ts">
 import { onMount } from "svelte";
 import { Stepper, Step, getDrawerStore } from "@skeletonlabs/skeleton";
 import Share from "$lib/components/Share.svelte";
 import FirstStep from "$lib/components/FirstStep.svelte";
 import { postPrompt } from "$lib/actions/postPropmpt";
 import { getByPromptId } from "$lib/actions/getByPromptId";
 import { handleMint } from "$lib/actions/mintComponent";
 import { view } from "$lib/stores";
 import nounImg from "$lib/images/noun4.png";
 import Error from "./Error.svelte";

 // props
 export let data: ComponentI[] = [];
 export let fetchError: any;

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
  width: "w-[380px] md:w-[550px]",
 };

 // state variables
 let isMinting = false;
 let search = "";
 let prompt = "";
 let name = "";
 let codeHash = "";
 let mintHash: any = "";
 let noun: any = null;

 $: filteredData = data.filter((d: any) => d?.description?.includes(search));
 let selectedProtocol = filteredData?.[0];

 // buisness logic
 function openDrawer() {
  drawerStore.open(drawerSettings);
 }

 function setMarket() {
  view.set("market");
 }

 function handleBuild() {
  if (prompt === "") {
   alert("Please enter a prompt");
   return;
  }

  try {
   postPrompt(prompt).then((res) => {
    if (res.body) {
     getByPromptId(res.body.id).then((res) => {
      console.log(res);
      codeHash = res.body.output?.code_uri;
     });
    }
   });
  } catch (error) {
   console.log(error);
  }
 }

 function setMint() {
  mintHash = handleMint(
   name,
   codeHash,
   prompt,
   "bafybeiduim4rtv5pwa56uqg2hm7co2bmhffufimfsc6zs34sdhxeix3jey"
  );
 }

 onMount(() => {});
</script>

<div style={bgImage}>
 <div class="container h-full mx-auto flex justify-center items-center">
  <div class="stepper">
   <Stepper>
    <FirstStep />
    <Step>
     <svelte:fragment slot="header"
      >Lets search existing protocols
     </svelte:fragment>
     Enter the description of the protocol you want to use
     <textarea
      bind:value={search}
      class="textarea mb-4"
      rows="2"
      title="Protocol"
      placeholder="create me a read update sql crud protocol .. "
     />
     Matching protocols
     <select class="select" bind:value={selectedProtocol}>
      {#each Object.values(filteredData) as protocol}
       <option value={protocol?.name}>{protocol?.description}</option>
      {/each}
     </select>
     {#if filteredData?.length}
      <div>We found {filteredData?.length} matching protocols for you :D</div>
      <div class="flex justify-between">
       <div>
        Check them out on <button
         class="font-bold text-cyan-400"
         on:keypress
         on:click={setMarket}>Market</button
        >
       </div>
       <div class="help-btn">Or lets build a new one</div>
      </div>
     {:else}
      <div class="flex justify-between">
       <div>No matching protocols found :(</div>
       <div class="help-btn">Click Next to build it!</div>
      </div>
     {/if}
    </Step>

    <!-- build step -->
    <Step>
     <div class="noun">
      <img src={nounImg} alt="noun" />
     </div>
     You Noun Component PFP!
     <input
      bind:value={name}
      class="input mb-3"
      title="Name"
      placeholder="Component name.. "
     />
     <input
      bind:value={prompt}
      class="input mb-4"
      title="Prompt"
      placeholder="Enter your prompt.. "
     />
     {#if !codeHash}
      <button on:click={handleBuild} class="btn button-build" />
     {:else}
      <button on:click={setMint} class="btn button-build">Mint</button>
     {/if}
    </Step>
   </Stepper>
   {#if fetchError}
    <Error {openDrawer} />
   {/if}
   {#if codeHash}
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
 .button-build {
  width: 60px;
  background: #22966b;
  color: white;
  padding: 2px;
  font-weight: 700;
  margin: 5px;
  border-radius: 5px;
 }
 .error {
  font-size: 12px;
  color: #e45d5d;
 }
 .noun {
  width: 20%;
 }
</style>
