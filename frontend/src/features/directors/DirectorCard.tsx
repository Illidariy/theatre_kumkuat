import React from 'react';
import { Director } from './Types/types';

export default function DirectorCard({ director }: { director:Director }):JSX.Element {
  return (
    <div>
      <h3>{director.firstName}</h3>
      <h4>{director.secondName}</h4>
      <img src={director.mainPhoto} alt="director" />
      <h5>{director.title}</h5>
      <h5>{director.body}</h5>

    </div>
  );
}
