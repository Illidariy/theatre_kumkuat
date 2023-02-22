import React, { useState } from 'react';
import { useAppDispatch } from '../../store';
import './Footer.scss';
import { newSubscriber } from './subscriberSlice';

export default function Footer(): JSX.Element {
  const [email, setEmail] = useState('');

  const dispatch = useAppDispatch();
  const createSubscribe = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(newSubscriber({ email }));
  };
  return (
    <div className="footer">
      <div className="container footer__container">
        <div className="footer__flex">
          {/* <img src="../../images/logo.png" alt="logo" className="footer__img" /> */}
          <div className="footer__item">
            <span className="footer__title">театр</span>
            <a href="/crew">команда</a>
            <a href="/">мерч</a>
          </div>
          <div className="footer__item">
            <span className="footer__title">репертуар</span>
            <a href="#Affiche">афиша</a>
            <a href="/">спектакли</a>
          </div>
          <div className="footer__item">
            <span className="footer__title">контакты</span>
            <a href="/contacts">как добраться</a>
            <a href="">политика конфиденциальности</a>
          </div>
          <div className="footer__item subscribe">
            <span>Подписаться на рассылку новостей</span>
            <form onSubmit={createSubscribe} method="post">
              <input
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="ваш email"
              />
              <button type="submit" className="footer__item-btn">
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#FFFFFF"
                  clipRule="evenodd"
                >
                  <path d="M24 4.685l-16.327 17.315-7.673-9.054.761-.648 6.95 8.203 15.561-16.501.728.685z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
