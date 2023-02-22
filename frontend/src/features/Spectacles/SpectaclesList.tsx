import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import SpectacleCard from './SpectacleCard';
import { getSpectacles } from './spectacleSlice';
import './Spectacles.scss';

export default function SpectaclesList(): JSX.Element {
  const { spectacles } = useSelector(
    (store: RootState) => store.spectacleState,
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getSpectacles());
  }, [dispatch]);
  return (
    <div className="spectacle">
      <div className="container">
        <h1 className="spectacle__title">СПЕКТАКЛИ</h1>
        <div className="spectacle__flex">
          {spectacles
            .map(
              (spectacle) =>
                spectacle.isActual && (
                  <SpectacleCard key={spectacle.id} spectacle={spectacle} />
                ),
            )}
        </div>
      </div>
    </div>
  );
}
