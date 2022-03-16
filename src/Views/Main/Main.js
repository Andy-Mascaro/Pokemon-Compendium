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
        <p key={info.id}>{info.pokemon} </p> 
      ))}
    </div>
  );
  
}
