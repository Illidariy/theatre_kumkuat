import {
  createAsyncThunk,
  createSlice,
 } from '@reduxjs/toolkit';
 import * as api from '../../App/api';

 import { State } from './Types/types';

 const initialState: State = {
  perfomances: [],
  error: undefined,
};

 export const getPerfomances = createAsyncThunk(
  'perfomances',
  () =>
    api.loadPerfomances()
);

const perfomaceSlise = createSlice({
  name: 'perfomance',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPerfomances.fulfilled, (state, action) => {
      state.perfomances = action.payload;
    }).addCase(getPerfomances.rejected, (state, action) => {
      state.error = action.error.message;
    });
  }
});

export default perfomaceSlise.reducer;
