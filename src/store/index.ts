import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './reducers/characters';

export const store = configureStore({
  reducer: {
    characters: charactersReducer
  }
});
