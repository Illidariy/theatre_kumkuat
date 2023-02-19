import React from 'react';
import { Actor } from './Types/types';

export default function ActorCard({ actor }: { actor: Actor }): JSX.Element {
  return (
    <div className="actor-container">
      <h3 className="actor-name">
        {actor.firstName} {actor.secondName}
      </h3>
      <img
        className="actor-photo"
        src={actor.mainPhoto}
        alt="actor-mainPhoto"
      />
      <h5 className="actor-title">{actor.title}</h5>
      <h5 className="actor-body">{actor.body}</h5>
    </div>
  );
}
