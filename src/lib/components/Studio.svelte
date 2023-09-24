<script lang="ts">
 import { Stepper, Step } from "@skeletonlabs/skeleton";
 import Share from "$lib/components/Share.svelte";
 import { getDrawerStore } from "@skeletonlabs/skeleton";
 import { popup } from "@skeletonlabs/skeleton";
 import { getWeb3Details, getMintContract, writeContract } from "$lib/utils";
 import { postPrompt } from "$lib/actions/postPropmpt";
 import { fetchNoun } from "$lib/actions/fetchNoun";
 import { getByPromptId } from "$lib/actions/getByPromptId";
 import { handleMint } from "$lib/actions/mintComponent";
 import { view } from "$lib/stores";
 import nounImg from "$lib/images/noun4.png";
 import type { PopupSettings } from "@skeletonlabs/skeleton";
 import { onMount } from "svelte";

 // props
 export let data: ComponentI[] = [];

 const mockHash =
  "ipfs://bafybeianfguceeckwhelenmythqmbtqswll6vcaz5wwsdr7hin7ov3rvje";
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
  event: "hover",
  target: "popupHover",
  placement: "top",
 };

 // state variables
 let isMinted = false;
 let isMinting = false;
 let search = "";
 let prompt = "";
 let name = "";
 let isMint = false;
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

  setTimeout(() => {
   codeHash = mockHash;
  }, 2000);

  try {
   postPrompt(prompt).then((res) => {
    if (res.body) {
     getByPromptId(res.body.id).then((res) => {
      console.log(res);
      codeHash = res.body.output?.code_uri || mockHash;
      console.log(codeHash);
     });
    }
   });
  } catch (error) {
   console.log("ERROR");
  }
 }
 function setMint() {
  mintHash = handleMint(
   name,
   "bafybeiduim4rtv5pwa56uqg2hm7co2bmhffufimfsc6zs34sdhxeix3jey",
   prompt,
   "bafybeiduim4rtv5pwa56uqg2hm7co2bmhffufimfsc6zs34sdhxeix3jey"
  );
 }

 onMount(() => {
  fetchNoun().then((res) => {
   noun = res.body;
  });
 });
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
      <div>
       Check them out on <button class="font-bold" on:click={setMarket}
        >Market</button
       >
      </div>
      <div class="help-btn">
       Or lets <button class="font-bold">Build</button> a new one
      </div>
     {:else}
      <div>No matching protocols found :(</div>
      <div class="help-btn">
       Click Next to <button>Build</button> it!
      </div>
     {/if}
    </Step>
    {#if filteredData.length && isMint}
     <Step>
      {#if mintHash}
       Minted! {mintHash}
      {/if}
      <button class="btn">Mint</button>
     </Step>
    {:else}
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
       <button on:click={handleBuild} class="btn button-build">Build</button>
      {:else}
       <button on:click={setMint} class="btn button-build">Mint</button>
      {/if}
     </Step>
    {/if}
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
 .button-build {
  width: 60px;
  background: #22966b;
  color: white;
  padding: 2px;
  font-weight: 700;
  margin: 5px;
  border-radius: 5px;
 }
 .noun {
  width: 20%;
 }
</style>
