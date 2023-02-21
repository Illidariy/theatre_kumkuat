import React, { useState } from 'react';
import { useAppDispatch } from '../../store';
import { newSpectacle } from '../Spectacles/spectacleSlice';

function SpectacleForm({
  spectacleHandler,
}: {
  spectacleHandler: () => void;
}): JSX.Element {
  const [title, setTitle] = useState('');
  const [premiere, setPremiere] = useState('');
  const [censor, setCensor] = useState('');
  const [body, setBody] = useState('');
  const [isActual, setIsActual] = useState(false);
  const [mainPhoto, setMainPhoto] = useState('');
  const [smallPhoto, setSmallPhoto] = useState('');
  const [directorId, setDirectorId] = useState(1);

  const dispatch = useAppDispatch();

  const createSpectacle = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(
      newSpectacle({
        title,
        premiere,
        censor,
        body,
        isActual,
        mainPhoto,
        smallPhoto,
        directorId,
      }),
    );
    spectacleHandler();
  };

  return (
    <div className="form__container">
      <form className="form__body" onSubmit={createSpectacle}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="premiere">Premiere</label>
        <input
          id="premiere"
          name="premiere"
          type="text"
          value={premiere}
          onChange={(e) => setPremiere(e.target.value)}
        />
        <label htmlFor="censor">Censor</label>
        <input
          id="censor"
          name="censor"
          type="text"
          value={censor}
          onChange={(e) => setCensor(e.target.value)}
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
        <label htmlFor="smallPhoto">SmallPhoto</label>
        <input
          id="smallPhoto"
          name="smallPhoto"
          type="text"
          value={smallPhoto}
          onChange={(e) => setSmallPhoto(e.target.value)}
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
      {/* <h2>{error && error}</h2> */}
    </div>
  );
}

export default SpectacleForm;
