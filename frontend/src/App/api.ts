/* eslint-disable import/prefer-default-export */
import { Actor } from '../features/actors/Types/types';
import { Perfomance } from '../features/perfomances/Types/types';

export const loadPerfomances = async ():Promise<Perfomance[]> => {
  const res = await fetch('http://localhost:4000/api/perfomances');
  return res.json();
};

export const loadActors = async ():Promise<Actor[]> => {
  const res = await fetch('http://localhost:4000/api/actors');
  return res.json();
};
