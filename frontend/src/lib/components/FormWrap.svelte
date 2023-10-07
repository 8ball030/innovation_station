<script lang="ts">
  import { enhance, applyAction } from "$app/forms";
  import { page } from '$app/stores';
  import ActionButton from "$lib/components/ActionButton.svelte";
  
  export let successMsg = "Submitted!"
  export let action = "/build"

  let loading = false
</script>
 
{#if $page.form?.success}
   <p>( {successMsg} )</p>
{:else}
  <form
    method="POST"
    action={action}
    use:enhance={() => {
          loading = true
          return async ({ result, update }) => {
            await applyAction(result) // manually call applyAction to update `page.form`
            await update()
            loading = false
          }
    }}
  >
    <slot/>
  <ActionButton loading={loading} />
  </form>
{/if}
