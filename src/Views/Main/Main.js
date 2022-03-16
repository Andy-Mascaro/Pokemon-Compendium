import { useEffect, useState } from 'react';
import { fetchPokemon } from '../../services/Pokemon';
import Dropdown from '../../Components/Dropdown';

export default function Main() {
  const [types, getTypes] = useState([]);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemon();
      setPokemon(data);
    };
    fetchData();
  }, []);


  return (
    <div>
      <Dropdown types={types} />
      
      {pokemon.map((info) =>(
        <div key={info.id}>
          <p>{info.pokemon} ({info.type_1}) ({info.type_2})
          </p>
        </div>
      ))}
    </div>
  );
  
}
