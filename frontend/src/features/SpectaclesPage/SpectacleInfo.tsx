import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './Spectacles.scss';
import { SpectacleInfoList } from './Types/types';

export default function SpectacleInfo(): JSX.Element {
  const { id } = useParams();
  const [spectacle, setSpectacle] = useState<SpectacleInfoList>([]);
  useEffect(() => {
    fetch(`/spectacles/${id}`)
      .then((res) => res.json())
      .then((data) => setSpectacle(data));
  }, [id]);

  return (
    <div>
      {spectacle.length > 0 && (
        <div className="spectacles__info">
          <h3>{spectacle[0].title}</h3>
          <img src={spectacle[0].mainPhoto} alt="spectacle" />
          <span>{spectacle[0].body}</span>
          <h4> Режиссер </h4>

          <NavLink
            className="spectacles__color"
            to={`/crew/directors/${spectacle[0]['Director.id']}`}
          >
            <img src={spectacle[0]['Director.mainPhoto']} alt="spectacle" />
            <p>{`${spectacle[0]['Director.firstName']}  ${spectacle[0]['Director.secondName']}`}</p>
          </NavLink>
        </div>
      )}
      <h4> Участвуют </h4>
      <div>
        {spectacle.map((el) => (
          <div>
            <NavLink
              className="spectacles__color"
              to={`/crew/actors/${el['actors.id']}`}
            >
              <p>
                {el['actors.firstName']} {el['actors.secondName']}{' '}
              </p>
            </NavLink>
          </div>
        ))}
      </div>
      {/* <button type="button">купить билет</button> */}
    </div>
  );
}
