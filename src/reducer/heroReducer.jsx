import {
    FETCH_SUPERHEROES_SUCCESS,
    FETCH_SUPERHEROES_FAILURE,
    SEARCH_SUPERHERO,
    SORT_SUPERHEROES_ABILITY,
    SORT_SUPERHEROES_APPEARANCE
  } from '../actions/actionTypes';
  
  const initialState = {
    superheroes: [],
    loading: true,
    error: null,
    searchName: '',
    sortAbility: null,
    sortAppearance: null
  };
  
  const superheroReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_SUPERHEROES_SUCCESS:
        return {
          ...state,
          superheroes: action.payload,
          loading: false
        };
      case FETCH_SUPERHEROES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      case SEARCH_SUPERHERO:
        return {
          ...state,
          searchName: action.payload
        };
      case SORT_SUPERHEROES_ABILITY:
        return {
          ...state,
          sortAbility: action.payload
        };
      case SORT_SUPERHEROES_APPEARANCE:
        return {
          ...state,
          sortAppearance: action.payload
        };
      default:
        return state;
    }
  };
  
  export default superheroReducer;
  