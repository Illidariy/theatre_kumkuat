import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
// import ActorCard from './ActorCard';
import { getActors } from './actorsSlice';

export default function ActorsList(): JSX.Element {
  const { actors } = useSelector((store: RootState) => store.actorState);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getActors());
  }, []);
  return (
    <div>
      <ul>
        {actors.map((actor) => (
          // <ActorCard key={actor.id} actor={actor} />
          <li key={actor.id}>
            <div className="actor-main">
              <NavLink to={`actors/${actor.id}`}>
                <img
                  className="actor-photo"
                  src={actor.mainPhoto}
                  alt="actor-mainPhoto"
                />
              </NavLink>
              <br />
              <h3 className="actor-name">
                {actor.firstName} {actor.secondName}
              </h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
