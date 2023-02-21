import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../App/api/api.timepad';

import { State } from './Types/types';

const initialState: State = {
  response: { active: false, client_id: '', user_id: '', user_email: '' },
  error: undefined,
};

export const getTimepad = createAsyncThunk('timepad/get', () =>
  api.getTimepad(),
);

const timepadSlice = createSlice({
  name: 'timepad',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTimepad.fulfilled, (state, action) => {
        state.response = action.payload;
      })
      .addCase(getTimepad.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default timepadSlice.reducer;
