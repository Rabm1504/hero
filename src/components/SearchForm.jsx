// components/SearchForm.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchSuperhero, sortSuperheroesByAbility, sortSuperheroesByAppearance } from '../redux/actions';

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchSuperhero(searchTerm));
  };

  const handleSortAbility = (e) => {
    dispatch(sortSuperheroesByAbility(e.target.value));
  };

  const handleSortAppearance = (e) => {
    dispatch(sortSuperheroesByAppearance(e.target.value));
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search superhero"
      />
      <select onChange={handleSortAbility}>
        <option value="">Sort by Ability</option>
        <option value="intelligence">Intelligence</option>
        <option value="strength">Strength</option>
        <option value="speed">Speed</option>
        <option value="durability">Durability</option>
        <option value="power">Power</option>
        <option value="combat">Combat</option>
      </select>
      <select onChange={handleSortAppearance}>
        <option value="">Sort by Appearance</option>
        <option value="gender">Gender</option>
        <option value="race">Race</option>
        <option value="height">Height</option>
        <option value="weight">Weight</option>
        <option value="eyeColor">Eye Color</option>
        <option value="hairColor">Hair Color</option>
      </select>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
