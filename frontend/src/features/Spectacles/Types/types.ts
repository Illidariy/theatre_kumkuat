export type Spectacle = {
  id?: number;
  title: string;
  premiere: string;
  censor: string;
  body: string;
  isActual: boolean;
  mainPhoto: string;
  smallPhoto: string;
  directorId?: number;
};

export type State = {
  spectacles: Spectacle[];
  spectacle: Spectacle;
  error: undefined | string;
};

export type SpectacleId = Spectacle['id'];
