<script lang="ts">
 import * as api from "$lib/api";
 import { onMount } from "svelte";

 import Studio from "$lib/components/Studio.svelte";
 import ComponentsList from "$lib/components/ComponentsList.svelte";
 import Landing from "$lib/components/Landing.svelte";
 import { view } from "$lib/stores";
 import { getWeb3Details } from "$lib/utils";

 // configs
 const API_BASE = "http://46.101.6.36:8001";

 // state
 let view_value: string;
 let data: any = [];
 let fetchError: any = null;

 view.subscribe((value) => {
  view_value = value;
 });

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

{#if view_value === "studio"}
 <Studio {data} {fetchError} />
{:else if view_value === "market"}
 <ComponentsList {data} {fetchError} />
{:else}
 <Landing />
{/if}
