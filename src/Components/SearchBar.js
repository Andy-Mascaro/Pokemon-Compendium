import React from 'react';
import { usePokeContext } from '../context/PokeContext';

export default function SearchBar({ query, callback }) {
  const { setQuery } = usePokeContext();
  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={callback}>Search</button>
    </div>
  );
}
