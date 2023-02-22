export type Affiche = {
  id?: number;
  title: string;
  isActual: boolean;
  date: string;
  time: string;
  day: string;
  adress: string;
  price: number;
};

export type State = {
  affiches: Affiche[];
  affiche: Affiche;
  error: undefined | string;
};

export type AfficheId = Affiche['id'];
