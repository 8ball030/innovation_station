<script lang="ts">
 import "../app.postcss";
 import { AppShell, AppBar } from "@skeletonlabs/skeleton";
 import LinkButton from "$lib/components/LinkButton.svelte";
 import { page } from "$app/stores";

 // WebConnect
 import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi";
 import { mainnet, gnosis } from "@wagmi/core/chains";

 const projectId = "1b0aad06235a3007b00055160c73fe1d";
 const chains = [mainnet, gnosis];
 const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  appName: "Web3Modal",
 });
 const modal = createWeb3Modal({ wagmiConfig, projectId, chains });
</script>

<!-- App Shell -->
<AppShell>
 <svelte:fragment slot="header">
  <!-- App Bar -->
  <AppBar background="bg-transparent">
   <svelte:fragment slot="lead">
    {#if $page.url.pathname !== "/"}
     <strong class="logo">
      <a href="/">INNOVATION STATION</a>
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
