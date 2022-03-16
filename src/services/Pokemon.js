
export async function fetchPokemon() {
  const resp = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex`);
  const data = await resp.json();
  return data.results;
 
}

export async function fetchTypes() {
  const resp = await fetch (`https://pokedex-alchemy.herokuapp.com/api/pokedex/5cef3501ef6005a77cd4fd33`);
  const type = await resp.json();
  return type.results;
}
