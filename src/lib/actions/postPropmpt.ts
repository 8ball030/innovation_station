import { getWeb3Details } from "$lib/utils";

export async function postPrompt() {
 const { chainId } = getWeb3Details();

 const response = await fetch(
  `http://46.101.6.36:8001/protocol?chain_id=${chainId}`,
  {
   method: "POST",
   mode: "cors",
   headers: {
    "Content-Type": "application/json",
   },
   body: JSON.stringify({
    prompt,
   }),
  }
 );
 return response.json();
}
