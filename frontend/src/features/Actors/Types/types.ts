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

export type ActorInfo = {
  id?: number;
  firstName: string;
  secondName: string;
  mainPhoto: string;
  smallPhoto?:string;
  title: string;
  body: string;
  like:string;
  dislike:string;

  'spectacles.id': number;
  'spectacles.title': string;
  'spectacles.smallPhoto': string;
};
export type ActorInfoState = ActorInfo[];
export type ActorId = Actor['id'];
