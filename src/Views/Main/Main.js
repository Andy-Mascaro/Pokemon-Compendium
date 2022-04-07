import { useEffect } from 'react';
import { fetchFilteredTypes, fetchTypes } from '../../services/Pokemon';
import Dropdown from '../../Components/Dropdown';
import SearchBar from '../../Components/SearchBar';
import PokeCard from '../../Components/PokeCard/PokeCard';
import './Main.css';
import PokeOrder from '../../Components/PokeOrder';
import { usePokeContext } from '../../context/PokeContext';

export default function Main() {
  const { search, setTypes, loading, setLoading, selected, order, setPokemon, pokemon } = usePokeContext();
 
  useEffect(() => {
    const fetchData = async () => {
      const typesData = await fetchTypes(); 
      setTypes(['all', ...typesData]);
      
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      
    };
    fetchData();
  }, [setTypes, setLoading]);

  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFilteredTypes(selected, null, order);
      setPokemon(data);
    };
    fetchData();
  }, [selected, order, setPokemon]);

  if (loading) return <div className='loader'></div>;
   
  const searchPokemon = async () => {
    const data = await fetchFilteredTypes(selected, search);
    setPokemon(data);
  };

  return (
    <div className='bars'>
     
      <SearchBar 
        // query={search}
        // setQuery={setSearch}
        callback={searchPokemon} />

      <Dropdown 
        // selected={selected}
        // setSelected={setSelected}
        // types={types}    

      />

      <PokeOrder />
        
      {pokemon.map((info) =>(
        <div key={info.id}>
          <PokeCard key={info.pokemon} {...info} />
        </div>
      ))}
    </div>
  );
  
}
