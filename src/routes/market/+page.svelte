<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Details from '$lib/components/Details.svelte';

	let bgImage = `
    background-image: url("/bgPage.png");
    background-size: cover;
    background-position: center;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
  `;

	// mock data to delete
	const link =
		'https://images.unsplash.com/photo-1553184570-557b84a3a308?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2NTF8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop';
	const data = [
		{ imgSrc: link, hash: '0x..5675666', price: '1ETH' },
		{ imgSrc: link, hash: '0x..5464566', price: '1ETH' },
		{ imgSrc: link, hash: '0x..4353466', price: '1ETH' },
		{ imgSrc: link, hash: '0x..66', price: '1ETH' }
	];
	let componentTypes = ['protocols', 'skills', 'connections', 'contratcs', 'agents', 'services'];

	let selectedCp = data[0].hash;
	let selectedType = data[0].hash;

	function handleBuy() {
		// TODO: add contract call
	}

	function showDetails(selected: string) {
		selectedCp = selected;
	}
</script>

<div style={bgImage}>
	<div class="h-full mx-auto mt-20 pt-10 mx-10">
		<div class="mb-4">
			<select
				bind:value={selectedType}
				class="block py-2.5 px-0 w-400 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
			>
				{#each componentTypes as value}<option {value}>{value}</option>{/each}
			</select>
		</div>
		<div class="flex gap-10">
			<section class="grid grid-cols-2 md:grid-cols-5 gap-4">
				{#each data as component}
					<Card {component} {handleBuy} {showDetails} />
				{/each}
			</section>
			<Details {selectedCp} />
		</div>
	</div>
</div>
