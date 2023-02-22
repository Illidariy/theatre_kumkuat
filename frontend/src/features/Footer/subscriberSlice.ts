import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../App/api/api.subscriber';

import { Subscriber, State } from './Types/types';

const initialState: State = {
  subscribers: [],

  error: undefined,
};

export const getSubscribers = createAsyncThunk('subscribers', () =>
  api.getSubscribers(),
);

export const newSubscriber = createAsyncThunk(
  'subscribers/create',
  ({ email }: Subscriber) =>
    api.newSubscriber({
      email,
    }),
);

const subscriberSlice = createSlice({
  name: 'subscribers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSubscribers.fulfilled, (state, action) => {
        state.subscribers = action.payload;
      })
      .addCase(getSubscribers.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(newSubscriber.fulfilled, (state, action) => {
        if (action.payload.subscriber) {
          state.subscribers.push(action.payload.subscriber);
        }
      })
      .addCase(newSubscriber.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export default subscriberSlice.reducer;
