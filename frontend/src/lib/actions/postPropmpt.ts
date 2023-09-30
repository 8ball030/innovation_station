import { getWeb3Details } from "$lib/utils";

export async function postPrompt(prompt: string) {
 const { chainId } = getWeb3Details();

 const response = await fetch(
  `http://46.101.6.36:8001/protocol?chain_id=${chainId}`,
  {
   method: "POST",
   mode: "no-cors",
   headers: {
    "Content-Type": "application/json",
   },
   body: JSON.stringify({
    prompt,
   }),
  }
 );

 const json = await response.json();
 console.log("json ", json);
 return json;
}
