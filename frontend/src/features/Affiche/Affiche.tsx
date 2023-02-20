import React from 'react';
import './Affiche.scss';

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
        <div className="affiche__text">
          <span className="affiche__text-data">26.02</span>
          <span>
            19:30
            <br />
            воскресенье
          </span>
          <span>
            ХРМСА
            <br />
            Курляндская 49
          </span>
          <span>750 руб.</span>
          <span>
            <a href="#twf" className="sell">
              Купить билет
            </a>
          </span>
        </div>
        <div className="affiche__text">
          <span className="affiche__text-data">04.03</span>
          <span>
            20:00
            <br />
            суббота
          </span>
          <span>
            Самоубийца 1928 г.
            <br />
            Курляндская 49
          </span>
          <span>750 руб.</span>
          <span>
            <a href="#twf" className="sell">
              Купить билет
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
