import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../../store';
import {
  getSpectacles,
  removeSpectacle,
} from '../../../Spectacles/spectacleSlice';
import { Spectacle } from '../../../Spectacles/Types/types';
import UpdateSpectacleForm from '../../update/UpdateSpectacleForm';

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
  }, [dispatch, updateFormSpectacle, refreshDelete]);

  return (
    <div className="spectacle_card" key={spectacle.id}>
      <img src={spectacle.mainPhoto} alt="" />
      <div className="spectacle_card_info">
        <h2>{spectacle.title}</h2>
        <p>{spectacle.body}</p>
        <p className={spectacle.isActual ? 'actually' : 'notActually'}>
          {spectacle.isActual ? 'Актаульно!' : 'Не актуально!'}
        </p>
        <div className="buttons_admin">
          <button onClick={showUpdate} type="button">
            Update
          </button>
          <button
            onClick={deleteSpectacle}
            className="button_delete"
            type="button"
          >
            Delete
          </button>
        </div>
      </div>
      {updateFormSpectacle && (
        <UpdateSpectacleForm
          key={spectacle.id}
          spectacle={spectacle}
          showUpdate={() => showUpdate()}
        />
      )}
    </div>
  );
}

export default AdminSpectacleCard;
