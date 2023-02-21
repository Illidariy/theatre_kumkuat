import React from 'react';
import Affiche from '../Affiche/Affiche';
import Footer from '../Footer/Footer';
import Kymkyat from '../Kymkyat/Kymkyat';
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
      <Kymkyat />
      <Footer />
    </>
  );
}
