import React from 'react';
import { usePokeContext } from '../context/PokeContext';

export default function SearchBar({ callback }) {
  const { setSearch, search } = usePokeContext();
  return (
    <div>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={callback}>Search</button>
    </div>
  );
}
