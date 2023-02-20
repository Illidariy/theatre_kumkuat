import React from 'react';
import { Director } from './Types/types';

export default function DirectorCard({
  director,
}: {
  director: Director;
}): JSX.Element {
  return (
    <div className="director container">
      <div className="director__main">
        <img
          className="director__photo"
          src={director.mainPhoto}
          alt="director"
        />
        <br />
        <h3 className="director__name">
          {director.firstName} {director.secondName}
        </h3>
      </div>
      <div className="director__info">
        <span className="director__title">{director.title}</span>
        <br />
        <span className="director__body">{director.body}</span>
      </div>
    </div>
  );
}
