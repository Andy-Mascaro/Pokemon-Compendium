import React from 'react';

export default function SearchBar({ query, setQuery, callback }) {
  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={callback}>Search</button>
    </div>
  );
}
