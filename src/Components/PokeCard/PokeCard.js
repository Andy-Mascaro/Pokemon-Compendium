import React from 'react';
import './PokeCard.css';

export default function PokeCard({ ...poke }) {
  return (
    <div className="poke-info">
      <img className="img" src={`${poke.url_image}`} />
      <p>Name: {poke.pokemon}</p> 
      <p>Height: {poke.height}</p>
      <p>Weight: {poke.weight}</p>
      <p>Speed:  {poke.speed}</p>
      <p>Ability Hidden: {poke.ability_hidden}</p>
      <p>Shape: {poke.shape}</p>
      <p>Attack: {poke.attack}</p>
    </div>
  );
}
