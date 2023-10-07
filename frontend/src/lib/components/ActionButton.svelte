<script lang="ts">
 import { ProgressRadial } from "@skeletonlabs/skeleton";

 export let loading: boolean;
 export let label = "Build";
</script>

<button class="btn button-build">
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

<style>
 .button-build {
  width: 80px;
  background: #22966b;
  color: white;
  padding: 2px;
  font-weight: 700;
  margin: 5px;
  border-radius: 5px;
 }

 .progress {
  width: 25px;
  display: flex;
 }
</style>
