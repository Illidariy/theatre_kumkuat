import React from 'react';
import './Footer.scss';

export default function Footer(): JSX.Element {
  return (
    <div className="footer">
      <div className="container footer__container">
        <div className="footer__flex">
          <img src="../../images/logo.png" alt="logo" className="footer__img" />
          <div className="footer__item">
            <span>театр</span>
            <a href="/crew">команда</a>
            <a href="/">мерч</a>
          </div>
          <div className="footer__item">
            <span>репертуар</span>
            <a href="#Affiche">афиша</a>
            <a href="/">спектакли</a>
          </div>
          <div className="footer__item">
            <span>контакты</span>
            <a href="">как добраться</a>
            <a href="">политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </div>
  );
}
