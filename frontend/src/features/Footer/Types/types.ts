export type Subscriber = {
  id?: number;
  email: string;
};

export type State = {
  subscribers: Subscriber[];
  error: undefined | string;
};

export type SubscriberId = Subscriber['id'];
