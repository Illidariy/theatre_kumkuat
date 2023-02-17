export type Perfomance = {
  id:number;
  title: string;
  body:string;
  mainPhoto:string;
  directorId:number;

};

export type State = {
  perfomances: Perfomance[];
  error: undefined | string
};


export type PerfomanceId = Perfomance['id'];
