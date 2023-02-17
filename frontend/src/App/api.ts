/* eslint-disable import/prefer-default-export */
import { Perfomance } from '../features/perfomances/Types/types';

export const loadPerfomances = async ():Promise<Perfomance[]> => {
  const res = await fetch('http://localhost:4000/api/perfomances');
  return res.json();
};
