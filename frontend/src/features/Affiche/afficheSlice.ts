import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../App/api/api.affiche';

import { State } from './Types/types';

const initialState: State = {
  affiches: [],
  affiche: {
    title: '',
    isActual: false,
    date: '',
    time: '',
    day: '',
    address: '',
    price: 0,
  },
  error: undefined,
};

export const getAffiches = createAsyncThunk('affiches', () =>
  api.loadAffiches(),
);

const afficheSlice = createSlice({
  name: 'affiches',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAffiches.fulfilled, (state, action) => {
        state.affiches = action.payload;
      })
      .addCase(getAffiches.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default afficheSlice.reducer;
