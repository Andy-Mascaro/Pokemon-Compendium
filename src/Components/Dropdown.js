import React from 'react';
import { usePokeContext } from '../context/PokeContext';
export default function Dropdown() {
  const { selected, setSelected, types } = usePokeContext();
  return (
    <select value={selected} onChange={(e) => setSelected(e.target.value)}>
      {types.map((type) => (
        <option key={type}>{type}</option>
      ))}
    </select>
   
  );
}
