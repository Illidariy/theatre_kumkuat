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
  error: undefined | string;
};

export type SpectacleId = Spectacle['id'];

export type SpectacleInfoList = SpectacleInfo[];

export type SpectacleInfo = {
  id?: number;
  title: string;
  body: string;
  isActual: boolean;
  mainPhoto: string;
  directorId?: number;
  'Director.id': number;
  'Director.firstName': string;
  'Director.secondName': string;
  'Director.mainPhoto': string;
  'Director.title': string;
  'Director.body': string;
  'actors.id': number;
  'actors.firstName': string;
  'actors.secondName': string;
  'actors.mainPhoto': string;
  'actors.title': string;
  'actors.body': string;
  'Director.smallPhoto':string;
  'actors.smallPhoto':string;
};
