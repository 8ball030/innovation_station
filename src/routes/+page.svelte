<script lang="ts">
 import Studio from "$lib/components/Studio.svelte";
 import ComponentsList from "$lib/components/ComponentsList.svelte";
 import Landing from "$lib/components/Landing.svelte";
 import { view } from "$lib/stores";
 import { onMount } from "svelte";

 let view_value: string;

 view.subscribe((value) => {
  view_value = value;
 });

 let data: any;

 onMount(() => {
  fetch("http://46.101.6.36:8001/agent")
   .then((response) => response.json())
   .then((res) => {
    data = res;
   });
 });
 console.log(data);
</script>

{#if view_value === "studio"}
 <Studio {data} />
{:else if view_value === "market"}
 <ComponentsList {data} />
{:else if view_value === "home"}
 <Landing />
{/if}
