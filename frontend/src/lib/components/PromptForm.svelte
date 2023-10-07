<script lang="ts">
 import FormWrap from "./FormWrap.svelte";
</script>

<FormWrap action="/build?/prompt">
 <input
  name="prompt"
  class="input mb-4"
  title="Prompt"
  placeholder="Enter your prompt.. "
 />
</FormWrap>
