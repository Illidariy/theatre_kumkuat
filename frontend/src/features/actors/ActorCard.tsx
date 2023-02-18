import React from 'react';
import { Actor } from './Types/types';

export default function ActorCard({ actor }: { actor:Actor }):JSX.Element {
  return (
    <div>
      <h3>{actor.firstName}</h3>
      <h4>{actor.secondName}</h4>
      <img src={actor.mainPhoto} alt="perfomance" />
      <h5>{actor.title}</h5>
      <h5>{actor.body}</h5>

    </div>
  );
}
