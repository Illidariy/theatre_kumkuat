import React from 'react';
import { Spectacle } from './Types/types';

export default function SpectacleCard({
  spectacle,
}: {
  spectacle: Spectacle;
}): JSX.Element {
  return (
    <div className="spectacle__card">
      <h3 className="spectacle__name">{spectacle.title}</h3>
      {/* <h4>{spectacle.body}</h4> */}
      {/* <p>{spectacle.video}</p> */}
      <img
        src={spectacle.mainPhoto}
        className="spectacle__img"
        alt="spectacle"
      />
      <div>
        <span>подробнее</span>
        <img src="../../../images/arrowOrange.png" alt="" />
      </div>
    </div>
  );
}