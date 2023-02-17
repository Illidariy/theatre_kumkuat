import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import ActorCard from './ActorCard';
import { getActors } from './actorsSlice';

export default function ActorsList(): JSX.Element {
  const { actors } = useSelector((store:RootState) => store.actorState);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getActors());
  }, []);
  return (
    <div>
      <div>
        {actors.map((actor) => (
          <ActorCard key={actor.id} actor={actor} />
        ))}
      </div>
    </div>
  );
}
