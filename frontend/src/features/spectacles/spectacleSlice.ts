import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../App/api';

import { Spectacle, State } from './Types/types';

const initialState: State = {
  spectacles: [],
  error: undefined,
};

export const getSpectacles = createAsyncThunk('spectacles', () =>
  api.loadSpectacles(),
);

export const newSpectacle = createAsyncThunk(
  'spectacles/create',
  ({ title, body, isActual, mainPhoto, video, directorId }: Spectacle) =>
    api.newSpectacle({
      title,
      body,
      isActual,
      mainPhoto,
      video,
      directorId,
    }),
);

const spectacleSlice = createSlice({
  name: 'spectacle',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSpectacles.fulfilled, (state, action) => {
        state.spectacles = action.payload;
      })
      .addCase(getSpectacles.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(newSpectacle.fulfilled, (state, action) => {
        state.spectacles.push(action.payload);
      })
      .addCase(newSpectacle.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default spectacleSlice.reducer;
