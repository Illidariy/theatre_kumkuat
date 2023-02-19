/* eslint-disable import/prefer-default-export */
import { Actor, ActorId } from '../features/actors/Types/types';
import { PayloadAuth, User } from '../features/auth/Types/type';
import { Spectacle, SpectacleId } from '../features/spectacles/Types/types';
import { Director } from '../features/directors/Types/types';

export const loadSpectacles = async (): Promise<Spectacle[]> => {
  const res = await fetch('http://localhost:4000/spectacles');
  return res.json();
};

export const newSpectacle = async ({
  title,
  body,
  isActual,
  mainPhoto,
  video,
  directorId,
}: Spectacle): Promise<Spectacle> => {
  const res = await fetch('http://localhost:4000/spectacles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      body,
      isActual,
      mainPhoto,
      video,
      directorId,
    }),
  });
  return res.json();
};

export const currentSpectacle = async ({
  id: spectacleId,
  title,
  body,
  isActual,
  mainPhoto,
  video,
  directorId,
}: Spectacle): Promise<Spectacle> => {
  const res = await fetch(`http://localhost:4000/spectacles/${spectacleId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: spectacleId,
      title,
      body,
      isActual,
      mainPhoto,
      video,
      directorId,
    }),
  });
  return res.json();
};

export const removeSpectacle = async (id: SpectacleId): Promise<Spectacle> => {
  const res = await fetch(`http://localhost:4000/spectacles/${id}`, {
    method: 'DELETE',
  });
  return res.json();
};

export const loadActors = async (): Promise<Actor[]> => {
  const res = await fetch('http://localhost:4000/actors');
  return res.json();
};

export const newActor = async ({
  firstName,
  secondName,
  mainPhoto,
  title,
  body,
}: Actor): Promise<Actor> => {
  const res = await fetch('http://localhost:4000/actors', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName,
      secondName,
      mainPhoto,
      title,
      body,
    }),
  });
  return res.json();
};

export const currentActor = async ({
  id,
  firstName,
  secondName,
  mainPhoto,
  title,
  body,
}: Actor): Promise<Actor> => {
  const res = await fetch(`http://localhost:4000/actors/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      firstName,
      secondName,
      mainPhoto,
      title,
      body,
    }),
  });
  return res.json();
};

export const removeActor = async (id: ActorId): Promise<Actor> => {
  const res = await fetch(`http://localhost:4000/actors/${id}`, {
    method: 'DELETE',
  });
  return res.json();
};

export const loadDirectors = async (): Promise<Director[]> => {
  const res = await fetch('http://localhost:4000/api/directors');
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
  const res = await fetch('http://localhost:4000/auth/login', {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(item),
  });
  return res.json();
};
export const checkUser = async (): Promise<PayloadAuth> => {
  const res = await fetch('http://localhost:4000/auth/login', {
    credentials: 'include',
  });
  const data = await res.json();
  return data;
};

export const logout = async (): Promise<User> => {
  const res = await fetch('http://localhost:4000/auth/logout', {
    credentials: 'include',
  });
  return res.json();
};

export const getUsers = async (): Promise<User[]> => {
  const res = await fetch('http://localhost:4000/main');
  return res.json();
};
