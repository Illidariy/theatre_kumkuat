import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../App/api';

import { DirectorId, State } from './Types/types';

const initialState: State = {
  directors: [],
  director: {
    firstName: '',
    secondName: '',
    title: '',
    body: '',
    mainPhoto: '',
  },
  error: undefined,
};

export const getDirectors = createAsyncThunk('directors', () =>
  api.loadDirectors(),
);

export const getDirector = createAsyncThunk('director', (id: DirectorId) =>
  api.loadDirector(id),
);

const directorSlice = createSlice({
  name: 'director',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDirectors.fulfilled, (state, action) => {
        state.directors = action.payload;
      })
      .addCase(getDirectors.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getDirector.fulfilled, (state, action) => {
        state.director = action.payload;
      })
      .addCase(getDirector.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export default directorSlice.reducer;
