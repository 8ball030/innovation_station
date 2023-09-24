<script lang="ts">
 import { onMount } from "svelte";

 import Studio from "$lib/components/Studio.svelte";
 import ComponentsList from "$lib/components/ComponentsList.svelte";
 import Landing from "$lib/components/Landing.svelte";
 import { view } from "$lib/stores";
 import {getWeb3Details} from "$lib/utils";

 let view_value: string;

 view.subscribe((value) => {
  view_value = value;
 });

 let data: any = [];

 onMount(() => {
  const {chainId} = getWeb3Details();
  console.log(chainId)
  fetch(`http://46.101.6.36:8001/protocol?chain_id=${chainId}`)
   .then((response) => response.json())
   .then((res) => {
    console.log(res)
    data = Object.values(res);
   });
 });
</script>

{#if view_value === "studio"}
 <Studio {data} />
{:else if view_value === "market"}
 <ComponentsList {data} />
{:else}
 <Landing />
{/if}
