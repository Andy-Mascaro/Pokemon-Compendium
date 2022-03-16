import { useEffect, useState } from 'react';
import { fetchPokemon } from '../../services/Pokemon';

export default function Main() {
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
      {pokemon.map((info) =>(
        <div key={info.id}>
          <p>{info.pokemon} ({info.type_1}) ({info.type_2})
          </p>
        </div>
      ))}
    </div>
  );
  
}
