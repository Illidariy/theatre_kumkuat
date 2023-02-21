import { Subscriber } from '../../features/Footer/Types/types';

export const getSubscribers = async (): Promise<Subscriber[]> => {
  const res = await fetch('/subscribers');
  return res.json();
};

export const newSubscriber = async ({
  email,
}: Subscriber): Promise<Subscriber> => {
  const res = await fetch('/subscribers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
    }),
  });
  return res.json();
};
