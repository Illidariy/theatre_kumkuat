import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../../store';
import { getActors, removeActor } from '../../../Actors/actorsSlice';
import { Actor } from '../../../Actors/Types/types';
import UpdateActorForm from '../../update/UpdateActorForm';

function AdminActorCard({ actor }: { actor: Actor }): JSX.Element {
  const [updateFormActor, setUpdateFormActor] = useState(false);
  const [refreshDelete, setRefreshDelete] = useState(false);

  function showUpdate(): void {
    setUpdateFormActor((prev) => !prev);
  }
  function afterDelete(): void {
    setRefreshDelete((prev) => !prev);
  }

  const deleteActor = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const res = dispatch(removeActor(actor.id));
    res.then((data) =>
      data.meta.requestStatus === 'fulfilled' ? afterDelete() : data,
    );
  };

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getActors());
  }, [dispatch, updateFormActor, refreshDelete]);
  return (
    <div className="actor_card" key={actor.id}>
      <img src={actor.mainPhoto} alt="" />
      <img src={actor.smallPhoto} alt="" />
      <div className="actor_card_info">
        <h2>{`${actor.firstName}\n${actor.secondName}`}</h2>
        <p>{actor.title}</p>
        <p>{actor.body}</p>
        <p>{actor.like}</p>
        <p>{actor.dislike}</p>
        <div className="buttons_admin">
          <button onClick={showUpdate} type="button">
            Update
          </button>
          <button className="button_delete" onClick={deleteActor} type="button">
            Delete
          </button>
        </div>
      </div>
      {updateFormActor && (
        <UpdateActorForm
          key={actor.id}
          actor={actor}
          showUpdate={() => showUpdate()}
        />
      )}
    </div>
  );
}

export default AdminActorCard;
