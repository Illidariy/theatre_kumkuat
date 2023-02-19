import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import actorsSlice from './features/actors/actorsSlice';
import spectacleSlice from './features/spectacles/spectacleSlice';
import userSlice from './features/auth/authSlice';
import directorSlise from './features/directors/directorSlice';
import productSlice from './features/products/productSlice';

const store = configureStore({
  reducer: {
    spectacleState: spectacleSlice,
    actorState: actorsSlice,
    userState: userSlice,
    directorState: directorSlise,
    productState: productSlice,
  },
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
