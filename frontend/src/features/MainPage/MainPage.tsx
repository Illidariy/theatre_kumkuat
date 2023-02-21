import React from 'react';
import Affiche from '../Affiche/Affiche';
import Kumkuat from '../Kumkuat/Kumkuat';
import SpectaclesList from '../Spectacles/SpectaclesList';
import MainSwiper from '../Swiper/Swiper';
import './MainPage.scss';

export default function MainPage(): JSX.Element {
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(getTimepad());
  // }, [dispatch]);

  return (
    <>
      <MainSwiper />
      <Affiche />
      <SpectaclesList />
      <Kumkuat />
    </>
  );
}
