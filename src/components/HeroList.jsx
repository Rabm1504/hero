// components/SuperheroList.js

import React from 'react';
import { useSelector } from 'react-redux';
import SuperheroCard from './SuperheroCard';

const SuperheroList = () => {
  const { superheroes, searchName, sortAbility, sortAppearance } = useSelector((state) => state.superhero);

  const filteredSuperheroes = superheroes.filter((superhero) =>
    superhero.name.toLowerCase().includes(searchName.toLowerCase())
  );

  const sortedSuperheroes = [...filteredSuperheroes].sort((a, b) => {
    let comparison = 0;

    if (sortAbility) {
      comparison = b.powerstats[sortAbility] - a.powerstats[sortAbility];
      if (comparison !== 0) {
        return comparison;
      }
    }

    if (sortAppearance) {
      comparison = a.appearance[sortAppearance].localeCompare(b.appearance[sortAppearance]);
      if (comparison !== 0) {
        return comparison;
      }
    }

    return comparison;
  });

  return (
    <div>
      {sortedSuperheroes.map((superhero) => (
        <SuperheroCard key={superhero.id} superhero={superhero} />
      ))}
    </div>
  );
};

export default HeroList;
