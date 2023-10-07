<script lang="ts">
 import FormWrap from "./FormWrap.svelte";
 import ImageUploader from "./ImageUploader.svelte";
</script>

<FormWrap action="/build?/mint" label="Mint">
 <ImageUploader />
 <input
  name="name"
  class="input mb-3"
  title="Name"
  placeholder="Component name.. "
 />
 <input
  name="description"
  class="input mb-4"
  title="Description"
  placeholder="Enter your component description.. "
 />
</FormWrap>
