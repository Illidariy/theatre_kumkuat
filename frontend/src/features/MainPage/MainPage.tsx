import React from 'react';
import Affiche from '../Affiche/Affiche';
import Kymkyat from '../Kymkyat/Kymkyat';
import SpectaclesList from '../Spectacles/SpectaclesList';
import MainSwiper from '../Swiper/Swiper';
import './MainPage.scss';

export default function MainPage(): JSX.Element {
  return (
    <>
      <MainSwiper />
      <Affiche />
      <SpectaclesList />
      <Kymkyat />
    </>
  );
}
