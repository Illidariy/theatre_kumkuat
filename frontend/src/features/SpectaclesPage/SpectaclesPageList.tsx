import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import SpectacleShortCard from './SpectacleShortCard';
import { getSpectacles } from './spectaclePageSlice';
import './Spectacles.scss';
import Footer from '../Footer/Footer';

export default function SpectaclesPageList(): JSX.Element {
  const { spectacles } = useSelector(
    (store: RootState) => store.spectacleState,
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getSpectacles());
  }, [dispatch]);
  return (
    <div className="spectacles">
      <img src="../../images/repa.png" alt="" className="spectacles__img-text" />
      <div className="container">
        <div className="spectacles__page-name">Репертуар</div>
        <div className="spectacles__flex">
          {spectacles.map((spectacle) => (
            <SpectacleShortCard key={spectacle.id} spectacle={spectacle} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
