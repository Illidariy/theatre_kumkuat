export type Affiche = {
  id?: number;
  title: string;
  isActual: boolean;
  date: string;
  time: string;
  day: string;
  address: string;
  price: number;
};

export type State = {
  affiches: Affiche[];
  affiche: Affiche;
  error: undefined | string;
};

export type AfficheId = Affiche['id'];
