export type Director = {
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
  directors: Director[];
  director: Director;
  error: undefined | string;
};

export type DirectorId = Director['id'];
