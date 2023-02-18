import React, { useState } from 'react';
import { Spectacle } from '../../spectacles/Types/types';
import UpdateSpectacleForm from '../UpdateSpectacleForm';

function AdminSpectacleCard({
  spectacle,
}: {
  spectacle: Spectacle;
}): JSX.Element {
  const [updateFormSpectacle, setUpdateFormSpectacle] = useState(false);
  function showUpdate(): void {
    setUpdateFormSpectacle((prev) => !prev);
  }
  return (
    <ul key={spectacle.id}>
      <p>{spectacle.title}</p>
      <i>{spectacle.body}</i>
      <button onClick={showUpdate} type="button">
        Update
      </button>
      <button type="button">Delete</button>
      {updateFormSpectacle && (
        <UpdateSpectacleForm key={spectacle.id} spectacle={spectacle} />
      )}
    </ul>
  );
}

export default AdminSpectacleCard;
