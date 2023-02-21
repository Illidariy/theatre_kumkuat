import React, { useState } from 'react';
import { useAppDispatch } from '../../../store';
import { currentSpectacle } from '../../Spectacles/spectacleSlice';
import { Spectacle } from '../../Spectacles/Types/types';

function UpdateSpectacleForm({
  spectacle,
  showUpdate,
}: {
  spectacle: Spectacle;
  showUpdate: () => void;
}): JSX.Element {
  const [title, setTitle] = useState(spectacle.title);
  const [premiere, setPremiere] = useState(spectacle.premiere);
  const [censor, setCensor] = useState(spectacle.censor);
  const [body, setBody] = useState(spectacle.body);
  const [isActual, setIsActual] = useState(spectacle.isActual);
  const [mainPhoto, setMainPhoto] = useState(spectacle.mainPhoto);
  const [smallPhoto, setSmallPhoto] = useState(spectacle.smallPhoto);
  const [directorId, setDirectorId] = useState(spectacle.directorId);

  const dispatch = useAppDispatch();

  const updateSpectacle = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const res = dispatch(
      currentSpectacle({
        id: spectacle.id,
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
    res.then((data) => {
      if (data.meta.requestStatus === 'fulfilled') {
        showUpdate();
      }
    });
  };

  return (
    <div className="form__container">
      <form className="form__body" onSubmit={updateSpectacle}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          defaultValue={spectacle.title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="premiere">Premiere</label>
        <input
          id="premiere"
          name="premiere"
          type="text"
          defaultValue={spectacle.premiere}
          onChange={(e) => setPremiere(e.target.value)}
        />
        <label htmlFor="censor">Censor</label>
        <input
          id="censor"
          name="censor"
          type="text"
          defaultValue={spectacle.censor}
          onChange={(e) => setCensor(e.target.value)}
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
        <label htmlFor="smallPhoto">SmallPhoto</label>
        <input
          id="smallPhoto"
          name="smallPhoto"
          type="text"
          defaultValue={spectacle.smallPhoto}
          onChange={(e) => setSmallPhoto(e.target.value)}
        />
        <label htmlFor="directorId">Director ID</label>
        <input
          id="directorId"
          name="directorId"
          type="text"
          defaultValue={spectacle.directorId}
          onChange={(e) => setDirectorId(Number(e.target.value))}
        />
        <button type="submit">SAVE</button>
      </form>
      {/* <h2>{error && error}</h2> */}
    </div>
  );
}

export default UpdateSpectacleForm;
