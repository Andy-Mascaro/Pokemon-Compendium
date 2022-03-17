import { useEffect, useState } from 'react';
import { fetchFilteredTypes, fetchPokemon, fetchTypes } from '../../services/Pokemon';
import Dropdown from '../../Components/Dropdown';

export default function Main() {
  const [types, setTypes] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemon();
      setPokemon(data);
      const typesData = await fetchTypes(); 
      setTypes(typesData); 
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFilteredTypes(filter);
      setPokemon(data);
     
    };
    if (filter) {
      fetchFilteredTypes();
    }
    fetchData();
  }, [filter]);     


  return (
    <div>
      <Dropdown types={types}
        filter={filter} 
        setFilter={setFilter} />

      {pokemon.map((info) =>(
        <div key={info.id}>
          <p>{info.pokemon} ({info.type_1}) ({info.type_2})
          </p>
        </div>
      ))}
    </div>
  );
  
}
