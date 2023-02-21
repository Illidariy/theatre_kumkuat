import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { getActor } from './actorsSlice';

export default function ActorCard(): JSX.Element {
  const { id } = useParams();
  const { actor } = useSelector((store: RootState) => store.actorState);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getActor(Number(id)));
  }, []);

  return (
    <div className="actor container">
      <div className="actor__main">
        <img className="actor__photo" src={actor.mainPhoto} alt="actor" />
        <br />
        <h3 className="actor__name">
          {actor.firstName} {actor.secondName}
        </h3>
      </div>
      <div className="actor__info">
        <span className="actor__title">{actor.title}</span>
        <br />
        <span className="actor__body">{actor.body}</span>
        <br />
        <span className="actor__like">{actor.like}</span>
        <br />
        <span className="actor__dislike">{actor.dislike}</span>
      </div>
    </div>
  );
}
