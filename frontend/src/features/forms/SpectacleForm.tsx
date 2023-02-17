import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { newSpectacle } from '../spectacles/spectacleSlice';

function SpectacleForm(): JSX.Element {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isActual, setIsActual] = useState(false);
  const [mainPhoto, setMainPhoto] = useState('');
  const [video, setVideo] = useState('');
  const [directorId, setDirectorId] = useState(1);

  const dispatch = useAppDispatch();

  const { error, spectacles } = useSelector(
    (store: RootState) => store.spectacleState,
  );

  const createSpectacle = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(
      newSpectacle({
        title,
        body,
        isActual,
        mainPhoto,
        video,
        directorId,
      }),
    );
  };

  console.log(spectacles);

  return (
    <div className="form__container">
      <form
        className="form__body"
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={createSpectacle}
      >
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="body">Body</label>
        <input
          id="body"
          name="body"
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label htmlFor="isActual">Actual</label>
        <input
          id="isActual"
          name="isActual"
          type="checkbox"
          checked={isActual}
          onChange={() => setIsActual((prev) => !prev)}
        />
        <label htmlFor="mainPhoto">Main Photo</label>
        <input
          id="mainPhoto"
          name="mainPhoto"
          type="text"
          value={mainPhoto}
          onChange={(e) => setMainPhoto(e.target.value)}
        />
        <label htmlFor="video">Video</label>
        <input
          id="video"
          name="video"
          type="text"
          value={video}
          onChange={(e) => setVideo(e.target.value)}
        />
        <label htmlFor="directorId">Director ID</label>
        <input
          id="directorId"
          name="directorId"
          type="text"
          value={directorId}
          onChange={(e) => setDirectorId(Number(e.target.value))}
        />
        <button type="submit">Добавить</button>
      </form>
      <h2>{error && error}</h2>
    </div>
  );
}

export default SpectacleForm;
