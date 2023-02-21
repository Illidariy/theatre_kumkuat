/* eslint-disable import/prefer-default-export */

import { Actor, ActorId } from '../features/Actors/Types/types';
import { PayloadAuth, User } from '../features/auth/Types/type';
import { Spectacle, SpectacleId } from '../features/Spectacles/Types/types';
import { Director, DirectorId } from '../features/Directors/Types/types';

export const loadSpectacles = async (): Promise<Spectacle[]> => {
  const res = await fetch('/spectacles');
  return res.json();
};

export const newSpectacle = async ({
  title,
  premiere,
  censor,
  body,
  isActual,
  mainPhoto,
  smallPhoto,
  directorId,
}: Spectacle): Promise<Spectacle> => {
  const res = await fetch('/spectacles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      premiere,
      censor,
      body,
      isActual,
      mainPhoto,
      smallPhoto,
      directorId,
    }),
  });
  return res.json();
};

export const currentSpectacle = async ({
  id: spectacleId,
  title,
  premiere,
  censor,
  body,
  isActual,
  mainPhoto,
  smallPhoto,
  directorId,
}: Spectacle): Promise<Spectacle> => {
  const res = await fetch(`/spectacles/${spectacleId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: spectacleId,
      title,
      premiere,
      censor,
      body,
      isActual,
      mainPhoto,
      smallPhoto,
      directorId,
    }),
  });
  return res.json();
};

export const removeSpectacle = async (id: SpectacleId): Promise<Spectacle> => {
  const res = await fetch(`/spectacles/${id}`, {
    method: 'DELETE',
  });
  return res.json();
};

export const loadActors = async (): Promise<Actor[]> => {
  const res = await fetch('/actors');
  return res.json();
};

export const loadActor = async (id: ActorId): Promise<Actor> => {
  const res = await fetch(`/actors/${id}`);
  return res.json();
};

export const newActor = async ({
  firstName,
  secondName,
  mainPhoto,
  smallPhoto,
  title,
  body,
  like,
  dislike,
}: Actor): Promise<Actor> => {
  const res = await fetch('/actors', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName,
      secondName,
      mainPhoto,
      smallPhoto,
      title,
      body,
      like,
      dislike,
    }),
  });
  return res.json();
};

export const currentActor = async ({
  id,
  firstName,
  secondName,
  mainPhoto,
  smallPhoto,
  title,
  body,
  like,
  dislike,
}: Actor): Promise<Actor> => {
  const res = await fetch(`/actors/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      firstName,
      secondName,
      mainPhoto,
      smallPhoto,
      title,
      body,
      like,
      dislike,
    }),
  });
  return res.json();
};

export const removeActor = async (id: ActorId): Promise<Actor> => {
  const res = await fetch(`/actors/${id}`, {
    method: 'DELETE',
  });
  return res.json();
};

export const loadDirectors = async (): Promise<Director[]> => {
  const res = await fetch('/directors');
  return res.json();
};

export const loadDirector = async (id: DirectorId): Promise<Director> => {
  const res = await fetch(`/directors/${id}`);
  return res.json();
};

export const registr = async (newUser: User): Promise<PayloadAuth> => {
  const res = await fetch('/auth/registration', {
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
export const login = async (user: User): Promise<User> => {
  const res = await fetch('/auth/login', {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(user),
  });
  const data = await res.json();

  return data;
};

// export const checkUser = async (): Promise<User> => {
// const res = await fetch('http://localhost:4000/auth/user', {

export const checkUser = async (): Promise<User> => {
  const res = await fetch('/auth/user', {
    credentials: 'include',
  });
  const data = await res.json();
  return data;
};

export const logout = async (): Promise<User> => {
  const res = await fetch('/auth/logout', {
    credentials: 'include',
  });
  return res.json();
};

export const getUsers = async (): Promise<User[]> => {
  const res = await fetch('/main');
  return res.json();
};
