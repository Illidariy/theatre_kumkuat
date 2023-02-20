import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../App/api';

import { Actor, ActorId, State } from './Types/types';

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

export const getActor = createAsyncThunk('actor', (id: ActorId) =>
  api.loadActor(id),
);

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

export const currentActor = createAsyncThunk(
  'actors/update',
  ({ id, firstName, secondName, mainPhoto, title, body }: Actor) =>
    api.currentActor({
      id,
      firstName,
      secondName,
      mainPhoto,
      title,
      body,
    }),
);

export const removeActor = createAsyncThunk('actors/delete', (id: ActorId) =>
  api.removeActor(id),
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
      .addCase(getActor.fulfilled, (state, action) => {
        state.actor = action.payload;
      })
      .addCase(getActor.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(newActor.fulfilled, (state, action) => {
        state.actors.push(action.payload);
      })
      .addCase(newActor.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(currentActor.fulfilled, (state, action) => {
        state.actors.map((actor) =>
          actor.id === action.payload.id ? action.payload : actor,
        );
      })
      .addCase(currentActor.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(removeActor.fulfilled, (state, action) => {
        state.actors.filter((actor) => actor.id !== action.payload.id);
      })
      .addCase(removeActor.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export default actorSlice.reducer;
