import React from 'react';
import { Affiche } from './Types/types';

export default function AfficheEvent({
  affiche,
}: {
  affiche: Affiche;
}): JSX.Element {
  return (
    <div className="affiche__text">
      <span className="affiche__text-data">{affiche.date}</span>
      <span>
        {affiche.time}
        <br />
        {affiche.day}
      </span>
      <span>
        {affiche.title}
        <br />
        {affiche.adress}
      </span>
      <span>{affiche.price} рублей</span>
      <span>
        {/* <a href="#twf" className="sell"> */}
        <a href="https://teatrkumkuat.timepad.ru/events/" className="sell">
          Купить билет
        </a>
      </span>
    </div>
  );
}
