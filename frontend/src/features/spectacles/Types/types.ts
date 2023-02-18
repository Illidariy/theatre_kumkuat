export type Spectacle = {
  id?: number;
  title: string;
  body: string;
  isActual: boolean;
  mainPhoto: string;
  video: string;
  directorId?: number;
};

export type State = {
  spectacles: Spectacle[];
  spectacle: Spectacle;
  error: undefined | string;
};

export type SpectacleId = Spectacle['id'];
