import { useEffect, useState } from 'react';
import { fetchFilteredTypes, fetchTypes } from '../../services/Pokemon';
import Dropdown from '../../Components/Dropdown';
import SearchBar from '../../Components/SearchBar';
import PokeCard from '../../Components/PokeCard/PokeCard';
import './Main.css';
import PokeOrder from '../../Components/PokeOrder';

export default function Main() {
  const [types, setTypes] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [selected, setSelected] = useState('all');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState('asc');

  useEffect(() => {
    const fetchData = async () => {
      const typesData = await fetchTypes(); 
      setTypes(['all', ...typesData]);
      
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      
    };
    fetchData();
  }, []);

  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFilteredTypes(selected, null, order);
      console.log(data);
      setPokemon(data);
    };
    fetchData();
  }, [selected, order]);

  if (loading) return <div className='loader'></div>;
   
  const searchPokemon = async () => {
    const data = await fetchFilteredTypes(selected, search);
    setPokemon(data);
  };

  return (
    <div className='bars'>
     
      <SearchBar 
        query={search}
        setQuery={setSearch}
        callback={searchPokemon} />

      <Dropdown 
        selected={selected}
        setSelected={setSelected}
        types={types} />

      <PokeOrder setOrder={setOrder} />
        
      {pokemon.map((info) =>(
        <div key={info.id}>
          <PokeCard key={info.pokemon} {...info} />
        </div>
      ))}
    </div>
  );
  
}
