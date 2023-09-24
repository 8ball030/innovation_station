<script lang="ts">
 import { Stepper, Step } from "@skeletonlabs/skeleton";
 import Share from "$lib/components/Share.svelte";
 export let data: any = [];

 let bgImage = `
     background-image: url("/bgPage.png");
     background-size: cover;
     background-position: center;
     position: fixed;
     width: 100vw;
     height: 100vh;
     top: 0;
     left: 0;`;

 let isMinted = false;
</script>

<div style={bgImage}>
 <div class="container h-full mx-auto flex justify-center items-center">
  <div class="stepper">
   <Stepper>
    <Step>
     <svelte:fragment slot="header"
      >Hello! Lets build some components</svelte:fragment
     >
     Hello! What components do you want to generate?
     <div><button>Skill</button><button>Protocol</button></div>
    </Step>
    <Step>
     <svelte:fragment slot="header">header2</svelte:fragment>
     content2
    </Step>
   </Stepper>
   {#if isMinted}
    <Share />
   {/if}
  </div>
 </div>
</div>

<style>
 .stepper {
  width: 80%;
 }
</style>
