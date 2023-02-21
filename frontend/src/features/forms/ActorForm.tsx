import React, { useState } from 'react';
import { useAppDispatch } from '../../store';
import { newActor } from '../Actors/actorsSlice';

function ActorForm({
  actorHandler,
}: {
  actorHandler: () => void;
}): JSX.Element {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [mainPhoto, setMainPhoto] = useState('');
  const [smallPhoto, setSmallPhoto] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [like, setLike] = useState('');
  const [dislike, setDislike] = useState('');

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
        smallPhoto,
        title,
        body,
        like,
        dislike,
      }),
    );
    actorHandler();
  };

  return (
    <div className="form__container">
      <form className="form__body" onSubmit={createActor}>
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
        <label htmlFor="smallPhoto">SmallPhoto</label>
        <input
          id="smallPhoto"
          name="smallPhoto"
          type="text"
          value={smallPhoto}
          onChange={(e) => setSmallPhoto(e.target.value)}
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
        <label htmlFor="like">Like</label>
        <input
          id="like"
          name="like"
          type="text"
          value={like}
          onChange={(e) => setLike(e.target.value)}
        />
        <label htmlFor="dislike">Dislike</label>
        <input
          id="dislike"
          name="dislike"
          type="text"
          value={dislike}
          onChange={(e) => setDislike(e.target.value)}
        />
        <button type="submit">Добавить</button>
      </form>
      {/* <h2>{error && error}</h2> */}
    </div>
  );
}

export default ActorForm;
