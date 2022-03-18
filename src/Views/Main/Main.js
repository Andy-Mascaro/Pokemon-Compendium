import { useEffect, useState } from 'react';
import { fetchFilteredTypes, fetchPokemon, fetchTypes } from '../../services/Pokemon';
import Dropdown from '../../Components/Dropdown';
import SearchBar from '../../Components/SearchBar';
import PokeCard from '../../Components/PokeCard/PokeCard';

export default function Main() {
  const [types, setTypes] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [selected, setSelected] = useState('all');
  const [search, setSearch] = useState('');
//   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
    //   const data = await fetchPokemon();
    //   setPokemon(data);
      
      const typesData = await fetchTypes(); 
      setTypes(['all', ...typesData]); 
    };
    fetchData();
  }, []);

//   const searchPokemon = async () => {
//     const data = await fetchFilteredTypes(selected, search);
//     setPokemon(data);
//   };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFilteredTypes(selected, search);
      setPokemon(data);
    //   setLoading(false);
     
    };
    fetchData();
  }, [selected, search]);

//   if (loading) return <p>Loading...</p>;
//     {
//       searchPokemon();
//     }
    
//   }, [selected]);     


  return (
    <div>
     
      <SearchBar 
        query={search}
        setQuery={setSearch}
        callback={fetchPokemon} />

      <Dropdown 
        selected={selected}
        setSelected={setSelected}
        types={types} />
        
      {pokemon.map((info) =>(
        <div key={info.id}>
          <PokeCard key={info.pokemon} {...info} />
        </div>
      ))}
    </div>
  );
  
}
