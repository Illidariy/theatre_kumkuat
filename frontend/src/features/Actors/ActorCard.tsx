import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { ActorInfoState } from './Types/types';

export default function ActorCard(): JSX.Element {
  const { id } = useParams();
  const [actor, setActor] = useState<ActorInfoState>([]);
  useEffect(() => {
    fetch(`/actors/${id}`)
      .then((res) => res.json())
      .then((data) => setActor(data));
  }, [id]);

  return (
    <div className="actor container">
      {actor.length > 0 && (
        <>
          <div className="actor__main">
            <img
              className="actor__photo"
              src={actor[0].mainPhoto}
              alt="actor"
            />
            <br />
            <h3 className="actor__name">
              {actor[0].firstName} {actor[0].secondName}
            </h3>
          </div>
          <div className="actor__info">
            <span className="actor__title">{actor[0].title}</span>
            <br />
            <span className="actor__body">{actor[0].body}</span>
            <br />
            <span className="actor__like">{actor[0].like}</span>
            <br />
            <span className="actor__dislike">{actor[0].dislike}</span>
          </div>
        </>
      )}
      <h4> Играет в спектаклях: </h4>
      <div>
        {actor.map((el) => (
          <div key={el.id}>
            <NavLink
              className="spectacles"
              to={`/spectacles/${el['spectacles.id']}`}
            >
              <img src={el['spectacles.smallPhoto']} alt="actor" />
              <p>{el['spectacles.title']}</p>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
