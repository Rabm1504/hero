import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSuperheroes } from '../actions/superheroActions';
import SearchForm from '../components/SearchForm';
import SuperheroList from '../components/SuperheroList';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { superheroes, loading } = useSelector((state) => state.superhero);

  useEffect(() => {
    dispatch(fetchSuperheroes());
  }, [dispatch]);

  return (
    <div>
      <SearchForm />
      {loading ? (
        <p>Loading superheroes...</p>
      ) : (
        <SuperheroList superheroes={superheroes} />
      )}
    </div>
  );
};

export default Dashboard;