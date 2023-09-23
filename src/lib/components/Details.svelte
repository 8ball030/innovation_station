<script lang="ts">
	import { CodeBlock } from '@skeletonlabs/skeleton';

	export let selectedCp: string;
</script>

<div class="details-container">
	<div>
		<div class="details-info">
			Hash {selectedCp}
			Owner 0x..123
		</div>
		<CodeBlock language="ts" code={`const skeleton: string = 'awesome';`} />
	</div>
</div>

<style lang="postcss">
	.details-container {
		border: 1px solid #d0bcff;
		border-radius: 5px;
		color: rgba(255, 255, 255, 0.5);
		background: linear-gradient(
			180deg,
			#7a6f96 -51.61%,
			rgba(52, 48, 64, 0.43) 34.84%,
			rgba(0, 0, 0, 0) 100%
		);
		padding: 10px;
		min-width: 250px;
		flex: 1;
	}
</style>
