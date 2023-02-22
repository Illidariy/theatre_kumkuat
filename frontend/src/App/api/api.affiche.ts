import { Affiche } from '../../features/Affiche/Types/types';

// eslint-disable-next-line import/prefer-default-export
export const loadAffiches = async (): Promise<Affiche[]> => {
  const res = await fetch('/affiches');
  return res.json();
};
