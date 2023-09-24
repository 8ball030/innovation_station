<script lang="ts">
 import "../app.postcss";
 import { AppShell, AppBar } from "@skeletonlabs/skeleton";
 import LinkButton from "$lib/components/LinkButton.svelte";
 import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
 import { storePopup } from '@skeletonlabs/skeleton';

  // WebConnect
 import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi";
 import { mainnet, gnosis } from "@wagmi/core/chains";
 import { view } from "$lib/stores";
 import { initializeStores } from "@skeletonlabs/skeleton";
 import { Drawer, getDrawerStore } from "@skeletonlabs/skeleton";
 import Info from "$lib/components/Info.svelte";

 storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

 initializeStores();
 let view_value: string;

 view.subscribe((value) => {
  view_value = value;
 });

 const projectId = "1b0aad06235a3007b00055160c73fe1d";
 const chains = [mainnet, gnosis];
 const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  appName: "Web3Modal",
 });
 const modal = createWeb3Modal({ wagmiConfig, projectId, chains });

 function setView() {
  view.set("home");
 }
 const drawerStore = getDrawerStore();
 $: positionClasses = $drawerStore.open ? "translate-x-[50%]" : "";
</script>

<Drawer>
 <Info />
</Drawer>
<!-- App Shell -->
<AppShell class="transition-transform {positionClasses}">
 <svelte:fragment slot="header">
  <!-- App Bar -->
  <AppBar background="bg-transparent">
   <svelte:fragment slot="lead">
    {#if view_value !== "home"}
     <strong class="logo">
      <div on:click={setView}>INNOVATION STATION</div>
     </strong>
    {/if}
   </svelte:fragment>
   <svelte:fragment slot="trail">
    <LinkButton name="STUDIO" link="studio" />
    <LinkButton name="MARKET" link="market" />
    <w3m-button label="Connect" />
   </svelte:fragment>
  </AppBar>
 </svelte:fragment>
 <!-- Page Route Content -->
 <slot />
</AppShell>

<style>
 .logo {
  font-size: 24px;
  color: #d0bcff;
  letter-spacing: 0.2rem;
 }
</style>
