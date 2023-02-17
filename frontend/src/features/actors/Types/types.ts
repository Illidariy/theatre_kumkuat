export type Actor = {
  id:number;
  firstName: string;
  secondName:string;
  photo:string;
  title:string;
  body:string;

};

export type State = {
  actors: Actor[];
  error: undefined | string
};

export type ActorId = Actor['id'];
