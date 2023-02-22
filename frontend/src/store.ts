import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import actorsSlice from './features/Actors/actorsSlice';
import spectacleSlice from './features/Spectacles/spectacleSlice';
import userSlice from './features/auth/authSlice';
import directorSlice from './features/Directors/directorSlice';
import productSlice from './features/products/productSlice';
import subscriberSlice from './features/Footer/subscriberSlice';
import afficheSlice from './features/Affiche/afficheSlice';

const store = configureStore({
  reducer: {
    spectacleState: spectacleSlice,
    actorState: actorsSlice,
    userState: userSlice,
    directorState: directorSlice,
    productState: productSlice,
    subscribeState: subscriberSlice,
    afficheState: afficheSlice,
  },
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
