import React, { useState } from 'react';
import ActorsList from '../actors/ActorsList';
import DirectorsList from '../directors/DirectorsList';

function CrewList(): JSX.Element {
  const [viewActors, setViewActors] = useState(false);
  const [viewDirectors, setViewDirectors] = useState(false);

  const toggleViewActors = (): void => {
    setViewActors((prev) => !prev);
  };
  const toggleViewDirectors = (): void => {
    setViewDirectors((prev) => !prev);
  };

  return (
    <div className="crew-container">
      <h3 className="crew-name">Театр-студия «Кумкуат»</h3>
      <p className="crew-body">
        это сообщество молодых людей, объединенных любовью к театру и любым
        проявлениям спонтанного и нестандартного творчества. «Кумкуат»
        существует с 2006 года, и за это время он прошел путь от детской студии
        до любительского молодежного репертуарного театра, обрел свой
        собственный творческий почерк и завоевал любовь зрителей.
      </p>
      <ul className="crew-list">
        <li className="crew-item">
          <span onClick={toggleViewDirectors}>Режисёры</span>
          {viewDirectors && <DirectorsList />}
        </li>
        <li className="crew-item">
          <span onClick={toggleViewActors}>Основная труппа</span>
          {viewActors && <ActorsList />}
        </li>
      </ul>
    </div>
  );
}

export default CrewList;
