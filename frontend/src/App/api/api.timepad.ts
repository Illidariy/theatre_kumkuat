import { TimepadResponse } from '../../features/Timepad/Types/types';

const token = 'd4441ac0ea3cc7ef12fced53147dcc95753afc49';

export const getTimepad = async (): Promise<TimepadResponse> => {
  const res = await fetch(`/introspect?token=${token}`);

  const data = res.json();

  return data;
};

export const loadEvent = async (): Promise<Event> => {
  const res = await fetch('https://api.timepad.ru/v1/events');
  return res.json();
};
