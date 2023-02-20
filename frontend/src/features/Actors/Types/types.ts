export type Actor = {
  id?: number;
  firstName: string;
  secondName: string;
  mainPhoto: string;
  title: string;
  body: string;
};

export type State = {
  actors: Actor[];
  actor: Actor;
  error: undefined | string;
};

export type ActorId = Actor['id'];
