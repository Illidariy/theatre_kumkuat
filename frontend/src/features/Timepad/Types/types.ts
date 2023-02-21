export type TimepadResponse = {
  active: boolean;
  client_id: string;
  user_id: string;
  user_email: string;
};

export type State = {
  response: TimepadResponse;
  error: undefined | string;
};
