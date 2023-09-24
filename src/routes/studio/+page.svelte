<script>
 import { onMount } from "svelte";
 import { Stepper, Step } from "@skeletonlabs/skeleton";
 import { page } from "$app/stores";

 let bgImage = `
    background-image: url("/bgPage.png");
    background-size: cover;
    background-position: center;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;`;

 onMount(() => {
  console.log($page.data);
 });
</script>

<div style={bgImage}>
 <div class="container h-full mx-auto flex justify-center items-center">
  <Stepper>
   <Step>
    <svelte:fragment slot="header">header1</svelte:fragment>
    Hello! What components do you want to generate?
    <div><button>Skill</button><button>Protocol</button></div>
   </Step>
   <Step>
    <svelte:fragment slot="header">header2</svelte:fragment>
    content2
   </Step>
  </Stepper>
 </div>
</div>
