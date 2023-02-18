import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../store';
import {
  getSpectacles,
  removeSpectacle,
} from '../../spectacles/spectacleSlice';
import { Spectacle } from '../../spectacles/Types/types';
import UpdateSpectacleForm from '../UpdateSpectacleForm';

function AdminSpectacleCard({
  spectacle,
}: {
  spectacle: Spectacle;
}): JSX.Element {
  const [updateFormSpectacle, setUpdateFormSpectacle] = useState(false);
  const [refreshDelete, setRefreshDelete] = useState(false);

  function showUpdate(): void {
    setUpdateFormSpectacle((prev) => !prev);
  }
  function afterDelete(): void {
    setRefreshDelete((prev) => !prev);
  }

  const deleteSpectacle = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const res = dispatch(removeSpectacle(spectacle.id));
    res.then((data) =>
      data.meta.requestStatus === 'fulfilled' ? afterDelete() : data,
    );
  };

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getSpectacles());
  }, [updateFormSpectacle, refreshDelete]);

  return (
    <ul key={spectacle.id}>
      <p>{spectacle.title}</p>
      <i>{spectacle.body}</i>
      <button onClick={showUpdate} type="button">
        Update
      </button>
      <button onClick={deleteSpectacle} type="button">
        Delete
      </button>
      {updateFormSpectacle && (
        <UpdateSpectacleForm
          key={spectacle.id}
          spectacle={spectacle}
          showUpdate={() => showUpdate()}
        />
      )}
    </ul>
  );
}

export default AdminSpectacleCard;
