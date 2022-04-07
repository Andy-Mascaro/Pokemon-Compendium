import React from 'react';
import { usePokeContext } from '../context/PokeContext';

export default function PokeOrder() {
  const { setOrder } = usePokeContext();
  return (
    <div>
      <select onChange= {(e) => setOrder(e.target.value)}>
        <option value='asc'>Ascending</option> 
        <option value='desc'>Descending</option>    
      </select>
    
    </div>
  );
}
