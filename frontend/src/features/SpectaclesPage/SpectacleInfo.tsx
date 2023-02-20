/* eslint-disable @typescript-eslint/dot-notation */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { Spectacle } from './Types/types';
import './Spectacles.scss';

export default function SpectacleInfo():JSX.Element {
  const { id } = useParams();
    const [spectacle, setSpectacle] = useState([]);
  useEffect(() => {
    fetch(`/spectacles/${id}`)
      .then((res) => res.json())
      .then((data) => setSpectacle((data)));
  }, []);
  // return (
  //   <div>{spectacle['actors.firstName']}</div>
  // );
  return (
    <div>
        {spectacle.length > 0 && (
    <>
        <h3>{spectacle[0]['title']}</h3>
        <img src={spectacle[0]['mainPhoto']} alt="spectacle" />
        <span>{spectacle[0]['body']}</span>
        <h4> Режиссер </h4>

        <img src={spectacle[0]['Director.mainPhoto']} alt="spectacle" />

        <p>{`${spectacle[0]['Director.firstName']}  ${spectacle[0]['Director.secondName']}`}</p>
        <h4> Участвуют </h4>
    </>
)}
    <div>{spectacle.map((el) => (
      <div>
      <p>{el['actors.firstName']} {el['actors.secondName']} </p>
      </div>

    ))}
    </div>
    {/* <button type="button">купить билет</button> */}
    </div>
  );
}
