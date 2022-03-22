
export async function fetchPokemon() {
  const resp = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?page-1&perPage=10`);
  const data = await resp.json();
  return data.results;
 
}

export async function fetchTypes() {
  const resp = await fetch (`https://pokedex-alchemy.herokuapp.com/api/pokedex/types`);
  const allType = await resp.json();
  return allType.map((item) => item.type);
} 

export async function fetchFilteredTypes(type, search, direction) {
  const params = new URLSearchParams();
  params.set('direction', direction);

  if (type !== 'all') {
    params.set('type', type);
  }

  if (search){
    params.set('pokemon', search);
  }

  const resp = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}&perPage=10`);
  const filter = await resp.json();
  return filter.results;

}