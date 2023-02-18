import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import actorsSlice from './features/actors/actorsSlice';
import spectacleSlice from './features/spectacles/spectacleSlice';
import userSlice from './features/auth/authSlice';
import directorSlise from './features/directors/directorSlice';

const store = configureStore({
  reducer: {
    spectacleState: spectacleSlice,
    actorState: actorsSlice,
    userState: userSlice,
    directorState: directorSlise
  },
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
