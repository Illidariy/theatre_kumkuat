import React from 'react';
import { Spectacle } from './Types/types';

export default function SpectacleCard({
  spectacle,
}: {
  spectacle: Spectacle;
}): JSX.Element {
  return (
    <div>
      <h3>{spectacle.title}</h3>
      <h4>{spectacle.body}</h4>
      <p>{spectacle.video}</p>
      <img src={spectacle.mainPhoto} alt="spectacle" />
    </div>
  );
}
