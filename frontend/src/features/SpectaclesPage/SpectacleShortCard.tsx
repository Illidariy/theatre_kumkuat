// import React, { useEffect, useState } from 'react';
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
      <img className="spectacles__img" src={spectacle.mainPhoto} alt="spectacle" />
      <NavLink className="spectacles__color" to={`/spectacles/${spectacle.id}`}>{spectacle.title}  </NavLink>
    </div>
  );
}
