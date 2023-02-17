/* eslint-disable import/prefer-default-export */
import { Actor } from '../features/actors/Types/types';
import { Perfomance } from '../features/perfomances/Types/types';
import { PayloadAuth, User } from '../features/auth/Types/type';

export const loadPerfomances = async (): Promise<Perfomance[]> => {
  const res = await fetch('http://localhost:4000/api/perfomances');
  return res.json();
};

export const loadActors = async (): Promise<Actor[]> => {
  const res = await fetch('http://localhost:4000/api/actors');
  return res.json();
};

export const registr = async (newUser: User): Promise<PayloadAuth> => {
  const res = await fetch('http://localhost:4000/auth/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      name: newUser.userName,
      email: newUser.email,
      password: newUser.password,
      password2: newUser.password2,
      isAdmin: newUser.isAdmin,
    }),
  });
  return res.json();
};
export const login = async (item: User): Promise<User> => {
  const res = await fetch('http://localhost:4000/api/auth/sign-in', {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(item),
  });
  return res.json();
};
export const checkUser = async (): Promise<PayloadAuth> => {
  const res = await fetch('http://localhost:4000/api/auth/sign-in', {
    credentials: 'include',
  });
  const data = await res.json();
  return data;
};

export const logout = async (): Promise<User> => {
  const res = await fetch('http://localhost:4000/api/auth/logout', {
    credentials: 'include',
  });
  return res.json();
};

export const getUsers = async (): Promise<User[]> => {
  const res = await fetch('http://localhost:4000/api/main');
  return res.json();
};
