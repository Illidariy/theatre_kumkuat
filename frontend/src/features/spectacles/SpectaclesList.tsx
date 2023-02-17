import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import SpectacleCard from './SpectacleCard';
import { getSpectacles } from './spectacleSlice';

export default function SpectaclesList(): JSX.Element {
  const { spectacles } = useSelector(
    (store: RootState) => store.spectacleState,
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getSpectacles());
  }, [dispatch]);
  return (
    <div>
      <div>
        {spectacles.map((spectacle) => (
          <SpectacleCard key={spectacle.id} spectacle={spectacle} />
        ))}
      </div>
    </div>
  );
}
