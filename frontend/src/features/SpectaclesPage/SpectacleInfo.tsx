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
    <div className="container">
  {spectacle.length > 0 && (
    <div className="spectacleInfo">
        <h3>{spectacle[0].title}</h3>
        <img className="spectacleInfo__mainPhoto" src={spectacle[0].mainPhoto} alt="spectacle" />
        <span className="spectacleInfo__body">{spectacle[0].body}</span>
        <div className="spectacleInfo__director">

        <h4 className="spectacleInfo__nameDirector"> Режиссер </h4>

        <NavLink className="spectacles__color" to={`/crew/directors/${spectacle[0]['Director.id']}`}>
        <img className="spectacleInfo__director__photo" src={spectacle[0]['Director.smallPhoto']} alt="spectacle" />
        <p>{`${spectacle[0]['Director.firstName']}  ${spectacle[0]['Director.secondName']}`}</p>
        </NavLink>
        </div>
    </div>
)}
    <h4> Участвуют </h4>
    <div className="spectacleInfo__actor-container">
      {spectacle.map((el) => (
      <div key={el.id}>
        <NavLink className="spectacles__color" to={`/crew/actors/${el['actors.id']}`}>
          <img className="spectacleInfo__actor-main-photo" src={el['actors.smallPhoto']} alt="actor" />
          <p>{el['actors.firstName']} {el['actors.secondName']} </p>
        </NavLink>

      </div>
))}
    </div>
    </div>

  );
}
