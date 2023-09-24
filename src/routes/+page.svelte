<script lang="ts">
 import Studio from "$lib/components/Studio.svelte";
 import ComponentsList from "$lib/components/ComponentsList.svelte";
 import Landing from "$lib/components/Landing.svelte";
 import { view } from "$lib/stores";
 import { page } from "$app/stores";

 let view_value: string;

 view.subscribe((value) => {
  view_value = value;
 });
 console.log("$page.data");
 console.log($page.data);
 const data = Object.values($page.data);
</script>

{#if view_value === "studio"}
 <Studio {data} />
{:else if view_value === "market"}
 <ComponentsList {data} />
{:else if view_value === "home"}
 <Landing />
{/if}
