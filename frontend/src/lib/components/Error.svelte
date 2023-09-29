<script lang="ts">
 export let openDrawer: any;
</script>

<div class="mt-10 w-100 error">
 Frank, the agent assigned to running the server seems to have dropped the ball.
 We are aware and services will resume promptly. In the interim, please checkout
 our
 <button class="help-btn" on:click={openDrawer}>docs</button>
</div>

<style>
 .error {
  font-size: 12px;
  color: #e45d5d;
 }
 .help-btn {
  color: rgb(37, 175, 249);
 }
 .help-btn:hover {
  color: rgb(80, 190, 250);
 }
</style>
