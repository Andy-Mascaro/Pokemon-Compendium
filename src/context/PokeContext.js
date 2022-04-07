import { useContext, useState, createContext } from 'react';

const PokeContext = createContext();

const PokeProvider = ({ children }) => {
  const [types, setTypes] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [selected, setSelected] = useState('all');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState('asc');


  return (
    <PokeContext.Provider value={{ types, setTypes, pokemon, setPokemon, selected, setSelected, search, setSearch, loading, setLoading, order, setOrder }}>
      {children}
    </PokeContext.Provider>
  );
};

const usePokeContext = () =>{
  const context = useContext(PokeContext);
  if (context === undefined) {
    throw new Error('Error in PokeContext');
  }
  return context;
};
export { usePokeContext, PokeProvider };