import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { getDirector } from './directorSlice';

export default function DirectorCard(): JSX.Element {
  const { id } = useParams();
  const { director } = useSelector((store: RootState) => store.directorState);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getDirector(Number(id)));
  }, [dispatch, id]);

  return (
    <div className="director container">
      <div className="director__main">
        <img
          className="director__photo"
          src={director.mainPhoto}
          alt="director"
        />
        <br />
        <h3 className="director__name">
          {director.firstName} {director.secondName}
        </h3>
      </div>
      <div className="director__info">
        <span className="director__title">{director.title}</span>
        <br />
        <span className="director__body">{director.body}</span>
        <br />
        <span className="director__like">{director.like}</span>
        <br />
        <span className="director__dislike">{director.dislike}</span>
      </div>
    </div>
  );
}
