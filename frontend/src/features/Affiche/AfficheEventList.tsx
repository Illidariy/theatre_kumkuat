import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { getAffiches } from './afficheSlice';
import AfficheEvent from './AfficheEvent';

export default function AfficheEventList(): JSX.Element {
  const { affiches } = useSelector((store: RootState) => store.afficheState);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAffiches());
  }, [dispatch]);
  return (
    <div>
      {affiches.map(
        (affiche) =>
          affiche.isActual && (
            <AfficheEvent key={affiche.id} affiche={affiche} />
          ),
      )}
    </div>
  );
}
