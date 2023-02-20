import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
// import DirectorCard from './DirectorCard';
import { getDirectors } from './directorSlice';

export default function DirectorsList(): JSX.Element {
  const { directors } = useSelector((store: RootState) => store.directorState);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getDirectors());
  }, []);
  return (
    <div>
      <ul>
        {directors.map((director) => (
          // <DirectorCard key={director.id} director={director} />
          <li key={director.id}>
            <div className="director-main">
              <NavLink to={`directors/${director.id}`}>
                <img
                  className="director-photo"
                  src={director.mainPhoto}
                  alt="director-mainPhoto"
                />
              </NavLink>
              <br />
              <h3 className="director-name">
                {director.firstName} {director.secondName}
              </h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
