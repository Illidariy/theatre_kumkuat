import React from 'react';
import ActorsList from '../Actors/ActorsList';
import DirectorsList from '../Directors/DirectorsList';
import './CrewList.scss';

function CrewList(): JSX.Element {
  return (
    <div className="crew container">
      <h3 className="crew__name">Театр-студия «Кумкуат»</h3>
      <p className="crew__body">
        это сообщество молодых людей, объединенных любовью к театру и любым
        проявлениям спонтанного и нестандартного творчества. «Кумкуат»
        существует с 2006 года, и за это время он прошел путь от детской студии
        до любительского молодежного репертуарного театра, обрел свой
        собственный творческий почерк и завоевал любовь зрителей.
      </p>
      <ul className="crew__list">
        <li className="crew__item">
          <h3>Режисёры</h3>
          <DirectorsList />
        </li>
        <li className="crew__item">
          <h3>Основная труппа</h3>
          <ActorsList />
        </li>
      </ul>
    </div>
  );
}

export default CrewList;
