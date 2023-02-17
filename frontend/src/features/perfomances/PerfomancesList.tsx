import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import PerfomanceCard from './PerfomanceCard';
import { getPerfomances } from './perfomanceSlice';

export default function PerfomancesList(): JSX.Element {
  const { perfomances } = useSelector((store:RootState) => store.perfomanceState);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPerfomances());
  }, []);
  return (
    <div>
      <div>
        {perfomances.map((performance) => (
          <PerfomanceCard key={performance.id} perfomance={performance} />
        ))}
      </div>
    </div>
  );
}
