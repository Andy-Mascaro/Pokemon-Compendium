import React from 'react';

export default function Dropdown({ selected, setSelected, types, }) {
  // const changeHandler = (e) => {
  //   setSelected(e.target.value); 
  //   callback();
  // };
  return (
    <select value={selected} onChange={(e) => setSelected(e.target.value)}>
      {types.map((type) => (
        <option key={type}>{type}</option>
      ))}
    </select>
   
  );
}
