export type Actor = {
  id?: number;
  firstName: string;
  secondName: string;
  mainPhoto: string;
  smallPhoto: string;
  title: string;
  body: string;
  like: string;
  dislike: string;
};

export type State = {
  actors: Actor[];
  actor: Actor;
  error: undefined | string;
};

export type ActorId = Actor['id'];
