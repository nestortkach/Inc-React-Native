import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IPeople } from '../../types/components';

interface IState {
  loader: boolean;
  people: IPeople[];
  selectedCharacter: IPeople | null;
  favourite: IPeople[];
  totalCharacters: number;
}

const initialState: IState = {
  loader: false,
  people: [],
  selectedCharacter: null,
  favourite: [],
  totalCharacters: 0
};

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacter',
  async (id?: number | null) => {
    const response = await axios.get(
      `https://swapi.py4e.com/api/people${id ? '/' + id : ''}`
    );

    return response.data;
  }
);

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setFav: (state, action) => {
      state.people.forEach((person: IPeople) => {
        if (person.name === action.payload) {
          if (
            state.favourite.filter(
              fav => fav.name === action.payload
            ).length === 0
          ) {
            state.favourite.push(person);
          } else {
            state.favourite = state.favourite.filter(
              fav => fav.name !== action.payload
            );
          }
        }
      });
    },
    resetFav: state => {
      state.favourite = [];
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchCharacters.pending, state => {
      state.loader = true;
    });
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.loader = false;
      if (action.payload.results) {
        state.people = action.payload?.results.map((result, el) => {
          return { ...result, id: el + 1 };
        });
        state.totalCharacters = action.payload?.count;
      }
      state.selectedCharacter = action.payload;
    });
  }
});

export const { setFav, resetFav } = charactersSlice.actions;
export const charactersSelector = state => state.characters;
export default charactersSlice.reducer;
