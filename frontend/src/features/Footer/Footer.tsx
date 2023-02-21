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
          <div className="footer__item">
            <span>Подписаться на рассылку</span>
            <form onSubmit={createSubscribe} method="post">
              <input
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
              <button type="submit">Отправить</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
