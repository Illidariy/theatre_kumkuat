import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../App/api';

import { State } from './Types/types';

const initialState: State = {
  actors: [],
  actor: {
    firstName: '',
    secondName: '',
    title: '',
    body: '',
    mainPhoto: '',
  },
  error: undefined,
};

export const getActors = createAsyncThunk('actors', () => api.loadActors());

const actorSlice = createSlice({
  name: 'actor',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getActors.fulfilled, (state, action) => {
        state.actors = action.payload;
      })
      .addCase(getActors.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export default actorSlice.reducer;
