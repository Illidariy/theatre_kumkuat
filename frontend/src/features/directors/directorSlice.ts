import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../App/api';

import { State } from './Types/types';

const initialState: State = {
  directors: [],
  error: undefined,
};

export const getDirectors = createAsyncThunk('directors', () =>
  api.loadDirectors(),
);

const directorSlise = createSlice({
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
      });
  },
});
export default directorSlise.reducer;
