<script lang="ts">
 import { onMount } from "svelte";
 import Studio from "$lib/views/Studio.svelte";
 import Market from "$lib/views/Market.svelte";
 import Landing from "$lib/views/Landing.svelte";
 import * as api from "$lib/api";
 import { view } from "$lib/stores";
 import { getWeb3Details } from "$lib/utils";

 // state
 let view_value: string;
 let data: any = [];
 let fetchError: any = null;

 view.subscribe((value) => {
  view_value = value;
 });

 const VIEW_CONFIG: any = {
  studio: Studio,
  market: Market,
  home: Landing,
 };

 onMount(() => {
  async function load() {
   const { chainId } = getWeb3Details();
   const res = await api.get(fetch, `protocol?chain_id=${chainId}`);
   console.log(res);
   data = res.data;
   fetchError = res.error;
  }

  load();
 });
</script>

<svelte:component this={VIEW_CONFIG[view_value]} />
