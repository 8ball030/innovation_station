export async function fetchNoun() {
 const response = await fetch(`https://noun-api.com/beta/pfp`);
 console.log("noun");
 console.log(response);
 return response?.json();
}
