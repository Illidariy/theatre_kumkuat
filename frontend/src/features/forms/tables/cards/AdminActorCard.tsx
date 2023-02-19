import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../../store';
import { getActors, removeActor } from '../../../actors/actorsSlice';
import { Actor } from '../../../actors/Types/types';
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
  }, [updateFormActor, refreshDelete]);
  return (
    <ul key={actor.id}>
      <p>{actor.title}</p>
      <i>{actor.body}</i>
      <button onClick={showUpdate} type="button">
        Update
      </button>
      <button onClick={deleteActor} type="button">
        Delete
      </button>
      {updateFormActor && (
        <UpdateActorForm
          key={actor.id}
          actor={actor}
          showUpdate={() => showUpdate()}
        />
      )}
    </ul>
  );
}

export default AdminActorCard;
