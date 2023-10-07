<script lang="ts">
 import { enhance, applyAction } from "$app/forms";
 import { page } from "$app/stores";
 import ActionButton from "$lib/components/ActionButton.svelte";

 export let successMsg = "Submitted!";
 export let label = "Build";
 export let action = "/build";

 let loading = false;
 let error: any;

 $: {
  console.log($page.form);
 }
</script>

{#if $page.form?.success}
 <p>( {successMsg} )</p>
{:else}
 <form
  method="POST"
  {action}
  use:enhance={() => {
   loading = true;
   return async ({ result, update }) => {
    await applyAction(result); // manually call applyAction to update `page.form`
    await update();

    if (result?.type === "failure") {
     error = result?.data?.msg;
    }
    loading = false;
   };
  }}
 >
  <slot />
  <ActionButton {loading} {label} {error} />
 </form>
{/if}
