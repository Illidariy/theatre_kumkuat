import React, { useState } from 'react';
import { useAppDispatch } from '../../../store';
import { currentActor } from '../../Actors/actorsSlice';
import { Actor } from '../../Actors/Types/types';

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
  const [smallPhoto, setSmallPhoto] = useState(actor.smallPhoto);
  const [title, setTitle] = useState(actor.title);
  const [body, setBody] = useState(actor.body);
  const [like, setLike] = useState(actor.like);
  const [dislike, setDislike] = useState(actor.dislike);

  const dispatch = useAppDispatch();

  const updateActor = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const res = dispatch(
      currentActor({
        id: actor.id,
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
        <label htmlFor="smallPhoto">SmallPhoto</label>
        <input
          id="smallPhoto"
          name="smallPhoto"
          type="text"
          defaultValue={actor.smallPhoto}
          onChange={(e) => setSmallPhoto(e.target.value)}
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
        <label htmlFor="like">Like</label>
        <input
          id="like"
          name="like"
          type="text"
          defaultValue={actor.like}
          onChange={(e) => setLike(e.target.value)}
        />
        <label htmlFor="dislike">Dislike</label>
        <input
          id="dislike"
          name="dislike"
          type="text"
          defaultValue={actor.dislike}
          onChange={(e) => setDislike(e.target.value)}
        />
        <button type="submit">SAVE</button>
      </form>
      {/* <h2>{error && error}</h2> */}
    </div>
  );
}

export default UpdateActorForm;
