import { Director, DirectorId } from '../../features/Directors/Types/types';

export const loadDirectors = async (): Promise<Director[]> => {
  const res = await fetch('/directors');
  return res.json();
};

export const loadDirector = async (id: DirectorId): Promise<Director> => {
  const res = await fetch(`/directors/${id}`);
  return res.json();
};
