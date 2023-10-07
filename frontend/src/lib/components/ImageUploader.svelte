<script lang="ts">
 import { FileDropzone } from "@skeletonlabs/skeleton";

 let img: any;
 let file: any;
 let uri: any;

 function onChangeHandler(e: any): void {
  file = e.target?.files?.[0];

  if (file) {
   const reader = new FileReader();
   reader.addEventListener("load", function () {
    img = reader.result;
   });

   reader.readAsDataURL(file);
   return;
  }
 }

 function uploadToIPFS() {
  // TODO: add img upload to IPFS
  // return uri to the form
  // uri = ipfsHash
 }
</script>

{#if img != undefined}
 <img src={img} alt="pfp" class="mb-2" />
{:else}
 <FileDropzone name="files" on:change={onChangeHandler} />
 Upload Image..
{/if}
<input name="image" type="hidden" value={uri} />
