import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../App/api/api.spectacle';

import { State } from './Types/types';

const initialState: State = {
  spectacles: [],

  error: undefined,
};

export const getSpectacles = createAsyncThunk('spectacles', () =>
  api.loadSpectacles(),
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
      });
  },
});

export default spectacleSlice.reducer;
