import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store';
import { getActors } from '../../Actors/actorsSlice';
import AdminActorCard from './cards/AdminActorCard';

function ActorTable(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getActors());
  }, [dispatch]);

  const {
    actorState: { actors },
  } = useSelector((store: RootState) => store);
  return (
    <div className="list_actors">
      {actors &&
        actors.map((actor) => <AdminActorCard key={actor.id} actor={actor} />)}
    </div>
  );
}

export default ActorTable;
