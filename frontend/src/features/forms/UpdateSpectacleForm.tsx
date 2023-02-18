import React, { useState } from 'react';
import { useAppDispatch } from '../../store';
import { currentSpectacle } from '../spectacles/spectacleSlice';
import { Spectacle } from '../spectacles/Types/types';

function UpdateSpectacleForm({
  spectacle,
}: {
  spectacle: Spectacle;
}): JSX.Element {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isActual, setIsActual] = useState(false);
  const [mainPhoto, setMainPhoto] = useState('');
  const [video, setVideo] = useState('');
  const [directorId, setDirectorId] = useState(1);

  const dispatch = useAppDispatch();

  const updateSpectacle = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(
      currentSpectacle({
        id: spectacle.id,
        title,
        body,
        isActual,
        mainPhoto,
        video,
        directorId,
      }),
    );
  };

  return (
    <div className="form__container">
      <form
        className="form__body"
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={updateSpectacle}
      >
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          defaultValue={spectacle.title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="body">Body</label>
        <input
          id="body"
          name="body"
          type="text"
          defaultValue={spectacle.body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label htmlFor="isActual">Actual</label>
        <input
          id="isActual"
          name="isActual"
          type="checkbox"
          defaultChecked={spectacle.isActual}
          onChange={() => setIsActual((prev) => !prev)}
        />
        <label htmlFor="mainPhoto">Main Photo</label>
        <input
          id="mainPhoto"
          name="mainPhoto"
          type="text"
          defaultValue={spectacle.mainPhoto}
          onChange={(e) => setMainPhoto(e.target.value)}
        />
        <label htmlFor="video">Video</label>
        <input
          id="video"
          name="video"
          type="text"
          defaultValue={spectacle.video}
          onChange={(e) => setVideo(e.target.value)}
        />
        <label htmlFor="directorId">Director ID</label>
        <input
          id="directorId"
          name="directorId"
          type="text"
          defaultValue={spectacle.directorId}
          onChange={(e) => setDirectorId(Number(e.target.value))}
        />
        <button type="submit">Добавить</button>
      </form>
      {/* <h2>{error && error}</h2> */}
    </div>
  );
}

export default UpdateSpectacleForm;
