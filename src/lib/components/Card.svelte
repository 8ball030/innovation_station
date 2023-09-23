<script lang="ts">
	export let handleBuy: () => void;
	export let component: ComponentI;
	export let showDetails: (hash: string) => void;
</script>

<div class="border max-w-full card-container card-hover">
	<img
		on:click={() => showDetails(component.hash)}
		class="card-img w-full rounded-lg cursor-pointer"
		alt=""
		src={component.imgSrc}
	/>
	<div class="card-info">
		<div>Price: <span class="font-bold">{component.price}</span></div>
		<div>Hash: {component.hash}</div>
		<button on:click={handleBuy}>Buy</button>
	</div>
</div>

<style>
	.card-container {
		border: 1px solid #d0bcff;
		border-radius: 10px;
		color: rgba(255, 255, 255, 0.5);
		text-align: left;
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: 150%; /* 36px */
		letter-spacing: -0.48px;
	}
	.card-info {
		background: linear-gradient(
			180deg,
			#7a6f96 -51.61%,
			rgba(52, 48, 64, 0.43) 34.84%,
			rgba(0, 0, 0, 0) 100%
		);
		padding: 10px;
	}
	.card-img {
		filter: hue-rotate(90deg) brightness(60%) grayscale(10%);
		cursor: pointer;
	}
	.card-img:hover {
		filter: unset;
	}
	.active {
		filter: unset;
	}
</style>
