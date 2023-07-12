import axios from 'axios';
import {
  FETCH_SUPERHEROES_SUCCESS,
  FETCH_SUPERHEROES_FAILURE,
  SEARCH_SUPERHERO,
  SORT_SUPERHEROES_ABILITY,
  SORT_SUPERHEROES_APPEARANCE
} from './actionTypes';

export const fetchSuperheroes = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://superheroapi.com/api/[YOUR_API_KEY]/search/all');
      dispatch({
        type: FETCH_SUPERHEROES_SUCCESS,
        payload: response.data.results
      });
    } catch (error) {
      dispatch({
        type: FETCH_SUPERHEROES_FAILURE,
        payload: error.message
      });
    }
  };
};

export const searchSuperhero = (name) => {
  return {
    type: SEARCH_SUPERHERO,
    payload: name
  };
};

export const sortSuperheroesByAbility = (ability) => {
  return {
    type: SORT_SUPERHEROES_ABILITY,
    payload: ability
  };
};

export const sortSuperheroesByAppearance = (appearance) => {
  return {
    type: SORT_SUPERHEROES_APPEARANCE,
    payload: appearance
  };
};
