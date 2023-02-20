import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import SpectacleShortCard from './SpectacleShortCard';
import { getSpectacles } from './spectaclePageSlice';
import './Spectacles.scss';

export default function SpectaclesPageList(): JSX.Element {
  const { spectacles } = useSelector(
    (store: RootState) => store.spectacleState,
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getSpectacles());
  }, [dispatch]);
  return (
    <div>
      <div className="spectacles__pageName"> Репертуар </div>
      <div className="spectacles__flex">
        {spectacles.map((spectacle) => (
          <SpectacleShortCard key={spectacle.id} spectacle={spectacle} />
        ))}
      </div>
    </div>
  );
}
