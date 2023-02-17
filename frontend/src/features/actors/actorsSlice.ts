import {
  createAsyncThunk,
  createSlice,
 } from '@reduxjs/toolkit';
 import * as api from '../../App/api';

 import { State } from './Types/types';

 const initialState: State = {
  actors: [],
  error: undefined,
};

export const getActors = createAsyncThunk(
  'perfomances',
  () =>
    api.loadActors()
);

const actorSlise = createSlice({
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
  }
});
export default actorSlise.reducer;
