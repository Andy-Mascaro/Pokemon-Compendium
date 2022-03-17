import { useEffect, useState } from 'react';
import { fetchFilteredTypes, fetchPokemon, fetchTypes } from '../../services/Pokemon';
import Dropdown from '../../Components/Dropdown';
import SearchBar from '../../Components/SearchBar';

export default function Main() {
  const [types, setTypes] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [selected, setSelected] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemon();
      setPokemon(data);
      const typesData = await fetchTypes(); 
      setTypes(['all', ...typesData]); 
    };
    fetchData();
  }, []);

  useEffect(() => {
    const userPick = async () => {
      const data = await fetchFilteredTypes(selected);
      setPokemon(data);
     
    };
    if (!selected) {
      userPick();
    }
    
  }, [selected]);     


  return (
    <div>
      <Dropdown 
        types={types}
        setSelected={setSelected} />
      <SearchBar/>
      {/* // query={value}
        // setQuery={SetQuery}
        // callback={callback} /> */}

      {pokemon.map((info) =>(
        <div key={info.id}>
          <p>{info.pokemon} ({info.type_1}) ({info.type_2})
          </p>
        </div>
      ))}
    </div>
  );
  
}
