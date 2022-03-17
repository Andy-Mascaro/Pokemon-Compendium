import React from 'react';

export default function Dropdown({ types, filter, setFilter }) {
  return (
    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
      {types.map((type) =>(
        <option key={type}>{type}</option>
      ))}
    </select>
  
  );
}
