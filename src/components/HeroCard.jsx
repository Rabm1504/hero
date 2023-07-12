import React from 'react';

const SuperheroCard = ({ superhero }) => {
  return (
    <div>
      <h2>{superhero.name}</h2>
      <p>Intelligence: {superhero.powerstats.intelligence}</p>
      <p>Strength: {superhero.powerstats.strength}</p>
      <p>Speed: {superhero.powerstats.speed}</p>
      <p>Durability: {superhero.powerstats.durability}</p>
      <p>Power: {superhero.powerstats.power}</p>
      <p>Combat: {superhero.powerstats.combat}</p>
      <p>Gender: {superhero.appearance.gender}</p>
      <p>Race: {superhero.appearance.race}</p>
      <p>Height: {superhero.appearance.height}</p>
      <p>Weight: {superhero.appearance.weight}</p>
      <p>Eye Color: {superhero.appearance.eyeColor}</p>
      <p>Hair Color: {superhero.appearance.hairColor}</p>
    </div>
  );
};

export default SuperheroCard;