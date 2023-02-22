import { Actor, ActorId } from '../../features/Actors/Types/types';

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
