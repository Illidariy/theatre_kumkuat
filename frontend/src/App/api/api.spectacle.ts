import { Spectacle, SpectacleId } from '../../features/Spectacles/Types/types';

export const loadSpectacles = async (): Promise<Spectacle[]> => {
  const res = await fetch('/spectacles');
  return res.json();
};

export const newSpectacle = async ({
  title,
  premiere,
  censor,
  body,
  isActual,
  mainPhoto,
  smallPhoto,
  directorId,
}: Spectacle): Promise<Spectacle> => {
  const res = await fetch('/spectacles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      premiere,
      censor,
      body,
      isActual,
      mainPhoto,
      smallPhoto,
      directorId,
    }),
  });
  return res.json();
};

export const currentSpectacle = async ({
  id: spectacleId,
  title,
  premiere,
  censor,
  body,
  isActual,
  mainPhoto,
  smallPhoto,
  directorId,
}: Spectacle): Promise<Spectacle> => {
  const res = await fetch(`/spectacles/${spectacleId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: spectacleId,
      title,
      premiere,
      censor,
      body,
      isActual,
      mainPhoto,
      smallPhoto,
      directorId,
    }),
  });
  return res.json();
};

export const removeSpectacle = async (id: SpectacleId): Promise<Spectacle> => {
  const res = await fetch(`/spectacles/${id}`, {
    method: 'DELETE',
  });
  return res.json();
};
