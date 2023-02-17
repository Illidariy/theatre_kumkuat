import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import perfomanceSlice from './features/perfomances/perfomanceSlice';

const store = configureStore({
  reducer: {
    perfomanceState: perfomanceSlice
  }
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
