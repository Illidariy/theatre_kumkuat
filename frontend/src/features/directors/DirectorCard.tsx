import React from 'react';
import { Director } from './Types/types';

export default function DirectorCard({
  director,
}: {
  director: Director;
}): JSX.Element {
  return (
    <div className="director-container">
      <h3 className="director-name">
        {director.firstName} {director.secondName}
      </h3>
      <img
        className="director-photo"
        src={director.mainPhoto}
        alt="director-mainPhoto"
      />
      <h5 className="director-title">{director.title}</h5>
      <h5 className="director-body">{director.body}</h5>
    </div>
  );
}
