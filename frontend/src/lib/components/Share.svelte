<script>
 import lensLogo from "$lib/images/lens.svg";
</script>

<div class="pt-20">
 <div class="share pt-5">
  <div class="logo">
   <img class="pr-4" src={lensLogo} alt="lensLogo" />
  </div>
  <a
   target="blank"
   href="https://lenster.xyz/?text=GM!%Check%20out%20my%20cool%20new%20Component&via=InnovationStation&hashtags=InnovationStation,web3,lens"
   >SHARE ON LENS</a
  >
 </div>
</div>

<style>
 .share {
  display: flex;
  justify-content: flex-start;
  align-items: center;
 }

 .logo {
  width: 60px;
 }

 .logo img {
  width: 100%;
 }

 a {
  color: #19ca7e;
  cursor: pointer;
 }
 a:hover {
  color: #68f1d1;
 }
</style>
