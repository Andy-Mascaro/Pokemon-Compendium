
export async function fetchPokemon() {
  const resp = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex`);
  const data = await resp.json();
  return data.results;
 
}

export async function fetchTypes() {
  const resp = await fetch (`https://pokedex-alchemy.herokuapp.com/api/pokedex/types`);
  const type = await resp.json();
  return type;
}
