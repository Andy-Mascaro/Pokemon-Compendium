import React from 'react';

export default function Dropdown({ types, setSelected }) {
  return (
    <div> 
      <select onChange={(e) => setSelected(e.target.value)}>
        {types.map((item) =>(
          <option key={item.type}>{item.type}</option>
        ))}
      </select>
    </div>
  );
}
