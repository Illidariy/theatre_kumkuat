import React, { useState } from 'react';
import { useAppDispatch } from '../../store';
import { newActor } from '../actors/actorsSlice';

function ActorForm({
  actorHandler,
}: {
  actorHandler: () => void;
}): JSX.Element {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [mainPhoto, setMainPhoto] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const dispatch = useAppDispatch();

  // const { error, spectacles } = useSelector(
  //   (store: RootState) => store.spectacleState,
  // );

  const createActor = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(
      newActor({
        firstName,
        secondName,
        mainPhoto,
        title,
        body,
      }),
    );
    actorHandler();
  };

  return (
    <div className="form__container">
      <form
        className="form__body"
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={createActor}
      >
        <label htmlFor="firstName">FirstName</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="secondName">SecondName</label>
        <input
          id="secondName"
          name="secondName"
          type="text"
          value={secondName}
          onChange={(e) => setSecondName(e.target.value)}
        />
        <label htmlFor="mainPhoto">MainPhoto</label>
        <input
          id="mainPhoto"
          name="mainPhoto"
          type="text"
          value={mainPhoto}
          onChange={(e) => setMainPhoto(e.target.value)}
        />
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
        <button type="submit">Добавить</button>
      </form>
      {/* <h2>{error && error}</h2> */}
    </div>
  );
}

export default ActorForm;
