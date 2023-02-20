import React from 'react';
import { Director } from './Types/types';

export default function DirectorCard({
  director,
}: {
  director: Director;
}): JSX.Element {
  return (
    <div className="director-container">
      <div className="director-main">
        <img
          className="director-photo"
          src={director.mainPhoto}
          alt="director-mainPhoto"
        />
        <br />
        <h3 className="director-name">
          {director.firstName} {director.secondName}
        </h3>
      </div>
      <div className="director-more">
        <span className="director-title">{director.title}</span>
        <br />
        <span className="director-body">{director.body}</span>
      </div>
    </div>
  );
}
