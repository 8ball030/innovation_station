<script lang="ts">
 import { CodeBlock } from "@skeletonlabs/skeleton";
 import dotsIcon from "$lib/images/dotsIcon.svg";

 export let selectedCp: any;
</script>

<div class="details-container">
 <div class="details-header">
  {selectedCp?.name?.replace(/_/g, " ")}<img src={dotsIcon} alt="dotsIcon" />
 </div>
 <div class="details-content">
  <div class="details-info mb-10">
   <div class="mb-4">{selectedCp?.description}</div>
   <div>Owned by: {selectedCp?.author}</div>
   <div>Version: {selectedCp?.version}</div>
   <div>Type: {selectedCp?.type}</div>
  </div>
 </div>
</div>

<style lang="postcss">
 .details-container {
  background: linear-gradient(
   180deg,
   #7a6f96 -51.61%,
   rgba(52, 48, 64, 0.43) 34.84%,
   rgba(0, 0, 0, 0) 100%
  );
  border: 1px solid #d0bcff;
  border-radius: 5px;
  color: rgba(255, 255, 255, 0.826);
  height: 70vh;
  min-width: 250px;
  margin-bottom: 12px;
  flex: 1;
 }
 .details-header {
  padding: 10px;
  height: 40px;
  font-size: 25px;
  border-bottom: 1px solid #d0bcff;
  justify-content: space-between;
  display: flex;
  color: #34ffd0;
  text-transform: capitalize;
  font-weight: 600;
 }

 .details-header img {
  width: 20%;
 }
 .details-content {
  padding: 10px;
 }
</style>
