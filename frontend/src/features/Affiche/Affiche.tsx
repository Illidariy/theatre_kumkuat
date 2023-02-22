import React from 'react';
import './Affiche.scss';
import AfficheEventList from './AfficheEventList';

export default function Affiche(): JSX.Element {
  return (
    <div className="affiche">
      <div className="affiche__block">
        <img
          src="../../../images/affiche.png"
          alt=""
          className="affiche__img"
        />
      </div>
      <div className="container">
        <h1 id="Affiche" className="affiche__title">
          АФИША
        </h1>
        <AfficheEventList />
      </div>
    </div>
  );
}
