/* eslint-disable import/no-extraneous-dependencies */
import {
    createAsyncThunk,
    createSlice,
   } from '@reduxjs/toolkit';
   import * as api from '../../App/api';

  import { User, State } from './Types/type';

  const initialState:State = {
    user: {},
    error: undefined,
   };

   export const registrUser = createAsyncThunk(
    'user/registr',
    (action:User) =>
       api.registr(action)
   );

   const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(registrUser.fulfilled, (state, action) => {
     if (action.payload.user) {
      state.user = action.payload.user;
     } else {
      state.error = action.payload.error;
  }
        })
        .addCase(registrUser.rejected, (state, action) => {
          // показываем как меняется state если загрузка прошла успешно
          state.error = action.error.message;
        });
    },
   });

   export default userSlice.reducer;
