import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSuperheroes } from './actions/heroActions';
import SearchForm from './components/SearchForm';
import HeroList from './components/HeroList';

const App = () => {
  const dispatch = useDispatch();
  const { superheroes, loading } = useSelector((state) => state.superhero);

  useEffect(() => {
    dispatch(fetchSuperheroes());
  }, [dispatch]);

  return (
    <div>
      <h1>SuperHero App</h1>
      <SearchForm />
      {loading ? (
        <p>Loading superheroes...</p>
      ) : (
        <HeroList superheroes={superheroes} />
      )}
    </div>
  );
};

export default App;
