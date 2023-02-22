import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './Swiper.scss';

import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper';

export default function MainSwiper(): JSX.Element {
  return (
    <div className="swiper__container">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        // eslint-disable-next-line react/jsx-boolean-value
        loop={true}
        centeredSlides
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // eslint-disable-next-line react/jsx-boolean-value
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        speed={800}
        className="mySwiper"
      >
        <SwiperSlide>
          <a href="/spectacles/6">
            <img
              src="../../images/hh.jpeg"
              alt="kymkyat"
              className="swiper-img"
            />
          </a>
          <span className="news__title">26 февраля 19:30</span>
          <span className="news__text">«ХРМСА»</span>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/spectacles/1">
            <img
              src="../../images/hh1.jpg"
              alt="kymkyat"
              className="swiper-img"
            />
          </a>
          <span className="news__title">18 марта 19:30</span>
          <span className="news__text">«КЫСЬ»</span>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/spectacles/4">
            <img
              src="../../images/hh2.jpg"
              alt="kymkyat"
              className="swiper-img"
            />
          </a>
          <span className="news__title">4 марта 20:00</span>
          <span className="news__text">«Самоубийца 1928 г.»</span>
        </SwiperSlide>
      </Swiper>
      <a href="#Affiche" className="arrow">
        <div className="arrow-down" />
      </a>
    </div>
  );
}
