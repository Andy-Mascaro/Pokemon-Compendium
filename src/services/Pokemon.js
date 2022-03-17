
export async function fetchPokemon() {
  const resp = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex`);
  const data = await resp.json();
  return data.results;
 
}

export async function fetchTypes() {
  const resp = await fetch (`https://pokedex-alchemy.herokuapp.com/api/pokedex/types`);
  const data = await resp.json();
  return data.map((item)=> item.type);
} 

export async function fetchFilteredTypes(item) {
  const params = new URLSearchParams();
  params.set('item', item);
  const resp = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?{params.toString()}`);
  const filter = await resp.json();
  return filter.results;

}