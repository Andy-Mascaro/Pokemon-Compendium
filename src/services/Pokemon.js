
export async function fetchPokemon() {
  const params = new URLSearchParams();
  params.set('perPage', 10);

  const resp = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex${params.toString()}`);
  const data = await resp.json();
  return data.results;
 
}

export async function fetchTypes() {
  const resp = await fetch (`https://pokedex-alchemy.herokuapp.com/api/pokedex/types`);
  const type = await resp.json();
  return type;
} 

export async function fetchFilteredTypes(type, page, search) {
  const params = new URLSearchParams();

  params.set('perPage', 10);
  params.set('page', page);

  if (type !== 'all') {
    params.set('type', type);
  }

  if (search){
    params.set('pokemon', search);
  }

  const resp = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`);
  const filter = await resp.json();
  return filter.results;

}