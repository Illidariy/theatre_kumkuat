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
  }, [dispatch]);
  return (
    <div>
      <ul>
        {actors.map((actor) => (
          // <ActorCard key={actor.id} actor={actor} />
          <li key={actor.id}>
            <div className="actor__main">
              <NavLink to={`/crew/actors/${actor.id}`}>
                <img
                  className="actor__photo"
                  src={actor.mainPhoto}
                  alt="actor"
                />
              </NavLink>
              <br />
              <h3 className="actor__name">
                {actor.firstName} {actor.secondName}
              </h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
