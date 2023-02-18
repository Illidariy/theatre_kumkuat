import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../App/api';

import { Actor, State } from './Types/types';

const initialState: State = {
  actors: [],
  error: undefined,
};

export const getActors = createAsyncThunk('actors', () => api.loadActors());

export const newActor = createAsyncThunk(
  'actors/create',
  ({ firstName, secondName, mainPhoto, title, body }: Actor) =>
    api.newActor({
      firstName,
      secondName,
      mainPhoto,
      title,
      body,
    }),
);

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
      })
      .addCase(newActor.fulfilled, (state, action) => {
        state.actors.push(action.payload);
      })
      .addCase(newActor.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export default actorSlice.reducer;
