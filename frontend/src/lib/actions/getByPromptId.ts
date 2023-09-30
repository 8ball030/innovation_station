export async function getByPromptId(id: string) {
 const response = await fetch(`http://46.101.6.36:8001/protocol/${id}`);
 console.log("getByPromptId");
 console.log(response);
 const json = await response.json();
 return json;
}
