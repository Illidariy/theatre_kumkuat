import React from 'react';
import { Perfomance } from './Types/types';

export default function PerfomanceCard({ perfomance }: { perfomance:Perfomance }):JSX.Element {
  return (
    <div>
      <h3>{perfomance.title}</h3>
      <h4>{perfomance.body}</h4>
      <img src={perfomance.photo} alt="perfomance" />
    </div>
  );
}
