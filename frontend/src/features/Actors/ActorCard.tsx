import React from 'react';
import { Actor } from './Types/types';

export default function ActorCard({ actor }: { actor: Actor }): JSX.Element {
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
      </div>
    </div>
  );
}
