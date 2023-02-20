import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../App/api';

import { Spectacle, SpectacleId, State } from './Types/types';

const initialState: State = {
  spectacles: [],
  spectacle: {
    title: '',
    body: '',
    isActual: false,
    mainPhoto: '',
    video: '',
    directorId: 1,
  },
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

export const currentSpectacle = createAsyncThunk(
  'spectacles/update',
  ({ id, title, body, isActual, mainPhoto, video, directorId }: Spectacle) =>
    api.currentSpectacle({
      id,
      title,
      body,
      isActual,
      mainPhoto,
      video,
      directorId,
    }),
);

export const removeSpectacle = createAsyncThunk(
  'spectacles/delete',
  (id: SpectacleId) => api.removeSpectacle(id),
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
      })
      .addCase(currentSpectacle.fulfilled, (state, action) => {
        state.spectacles.map((spectacle) =>
          spectacle.id === action.payload.id ? action.payload : spectacle,
        );
      })
      .addCase(currentSpectacle.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(removeSpectacle.fulfilled, (state, action) => {
        state.spectacles.filter(
          (spectacle) => spectacle.id !== action.payload.id,
        );
      })
      .addCase(removeSpectacle.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default spectacleSlice.reducer;