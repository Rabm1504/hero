import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import superheroReducer from '/src/reducer/heroReducer';

const store = configureStore({
  reducer: {
    superhero: superheroReducer
  },
  middleware: [thunk]
});

export default store;
