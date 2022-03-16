import React from 'react';

export default function Dropdown({ types }) {
  return (
    <select>
      {types.map((type) => {
        <option key={type}>{type}</option>;
      })}
    </select>
  
  );
}
