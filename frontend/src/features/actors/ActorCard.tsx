import React from 'react';
import { Actor } from './Types/types';

export default function ActorCard({ actor }: { actor: Actor }): JSX.Element {
  return (
    <div className="actor-container">
      <div className="actor-main">
        <img
          className="actor-photo"
          src={actor.mainPhoto}
          alt="actor-mainPhoto"
        />
        <br />
        <h3 className="actor-name">
          {actor.firstName} {actor.secondName}
        </h3>
      </div>
      <div className="actor-more">
        <span className="actor-title">{actor.title}</span>
        <br />
        <span className="actor-body">{actor.body}</span>
      </div>
    </div>
  );
}
