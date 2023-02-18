import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import DirectorCard from './DirectorCard';
import { getDirectors } from './directorSlice';

export default function DirectorsList(): JSX.Element {
  const { directors } = useSelector((store:RootState) => store.directorState);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getDirectors());
  }, []);
  return (
    <div>
      <div>
        {directors.map((director) => (
          <DirectorCard key={director.id} director={director} />
        ))}
      </div>
    </div>
  );
}
