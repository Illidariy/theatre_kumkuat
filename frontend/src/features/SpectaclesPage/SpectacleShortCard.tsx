import React from 'react';
import { NavLink } from 'react-router-dom';
import { Spectacle } from './Types/types';
import './Spectacles.scss';

export default function SpectacleShortCard({
  spectacle,
}: {
  spectacle: Spectacle;
}): JSX.Element {
  return (
    <div className="spectacles__container">
      <NavLink className="spectacles__color" to={`/spectacles/${spectacle.id}`}>
        <img
          className="spectacles__img"
          src={spectacle.mainPhoto}
          alt="spectacle"
        />
        <span className="spectacles__card-title">{spectacle.title}</span>
        <div>
          <span>подробнее</span>
          <img src="../../../images/arrowOrange.png" alt="" />
        </div>
      </NavLink>
    </div>
  );
}
