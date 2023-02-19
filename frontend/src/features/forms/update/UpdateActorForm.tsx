import React, { useState } from 'react';
import { useAppDispatch } from '../../../store';
import { currentActor } from '../../actors/actorsSlice';
import { Actor } from '../../actors/Types/types';

function UpdateActorForm({
  actor,
  showUpdate,
}: {
  actor: Actor;
  showUpdate: () => void;
}): JSX.Element {
  const [firstName, setFirstName] = useState(actor.firstName);
  const [secondName, setSecondName] = useState(actor.secondName);
  const [mainPhoto, setMainPhoto] = useState(actor.mainPhoto);
  const [title, setTitle] = useState(actor.title);
  const [body, setBody] = useState(actor.body);

  const dispatch = useAppDispatch();

  const updateActor = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const res = dispatch(
      currentActor({
        id: actor.id,
        firstName,
        secondName,
        mainPhoto,
        title,
        body,
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
      <form className="form__body" onSubmit={updateActor}>
        <label htmlFor="firstName">FirstName</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          defaultValue={actor.firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="secondName">SecondName</label>
        <input
          id="secondName"
          name="secondName"
          type="text"
          defaultValue={actor.secondName}
          onChange={(e) => setSecondName(e.target.value)}
        />
        <label htmlFor="mainPhoto">MainPhoto</label>
        <input
          id="mainPhoto"
          name="mainPhoto"
          type="text"
          defaultValue={actor.mainPhoto}
          onChange={(e) => setMainPhoto(e.target.value)}
        />
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          defaultValue={actor.title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="body">Body</label>
        <input
          id="body"
          name="body"
          type="text"
          defaultValue={actor.body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">SAVE</button>
      </form>
      {/* <h2>{error && error}</h2> */}
    </div>
  );
}

export default UpdateActorForm;
