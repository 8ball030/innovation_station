<script lang="ts">
 export let handleBuy: () => void;
 export let component: any;
 export let showDetails: (hash: string) => void;

 import nounImg from "$lib/images/noun.png";
</script>

<div class="border max-w-full card-container card-hover">
 <div on:click={() => showDetails(component)}>
  <img class="card-img w-full rounded-lg cursor-pointer" alt="" src={nounImg} />
  <div class="card-info">
   <span class="name">{component?.name?.replace(/_/g, " ")}</span>
   <div class="label">Price: <span class="value">1 ETH</span></div>
   <div class="label">
    Owner: <span class="value">{component?.author}</span>
   </div>
  </div>
 </div>
 <div class="divide" />
 <button class="button-buy" on:click={handleBuy}>Buy</button>
</div>

<style>
 .name {
  color: #34ffd0;
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;
 }
 .divide {
  border-bottom: 0.8px solid #d0bcffb0;
  margin: 0px 8px;
 }
 .label {
  font-size: 12px;
  padding-right: 5px;
 }
 .value {
  color: white;
  font-weight: 600;
 }
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
   #c1abf9 -51.61%,
   rgba(124, 116, 148, 0.43) 34.84%,
   rgba(0, 0, 0, 0) 100%
  );
  padding: 7px;
 }
 .card-img {
  cursor: pointer;
  max-height: 170px;
 }
 .card-img:hover {
  filter: hue-rotate(90deg) brightness(60%) grayscale(10%);
 }
 .button-buy {
  width: 60px;
  background: #22966b;
  color: white;
  padding: 2px;
  font-weight: 700;
  margin: 5px;
  border-radius: 5px;
 }
</style>
