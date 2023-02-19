import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store';
import { getSpectacles } from '../../spectacles/spectacleSlice';
import AdminSpectacleCard from './cards/AdminSpectacleCard';

function SpectacleTable(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getSpectacles());
  }, [dispatch]);

  const {
    spectacleState: { spectacles },
  } = useSelector((store: RootState) => store);
  return (
    <div className="list_spectacles">
      {spectacles &&
        spectacles.map((spectacle) => (
          <AdminSpectacleCard key={spectacle.id} spectacle={spectacle} />
        ))}
    </div>
  );
}

export default SpectacleTable;
