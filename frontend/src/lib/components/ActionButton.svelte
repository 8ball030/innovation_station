<script lang="ts">
 import { ProgressRadial } from "@skeletonlabs/skeleton";

 export let loading: boolean;
 export let label: string;
 export let error: any = null;
</script>

<div class="flex items-center">
 <button class="btn action-btn">
  {#if loading}
   <div class="progress">
    <ProgressRadial
     meter="stroke-success-500"
     track="stroke-success-500/60"
     stroke={120}
    />
   </div>
  {:else}
   {label}
  {/if}
 </button>
 {#if error}
  <div class="pl-2 text-sm">{error}</div>
 {/if}
</div>

<style>
 .action-btn {
  min-width: 80px;
  background: #0595ce;
  color: white;
  padding: 5px;
  font-weight: 700;
  margin: 5px;
  border-radius: 5px;
 }

 .progress {
  width: 25px;
  display: flex;
 }
</style>
