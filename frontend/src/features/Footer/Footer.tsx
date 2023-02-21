import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import './Footer.scss';
import { newSubscriber } from './subscriberSlice';

export default function Footer(): JSX.Element {
  const [email, setEmail] = useState('');
  const [errorState, setErrorState] = useState(false);

  const dispatch = useAppDispatch();
  const createSubscribe = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // dispatch(getSubscribers());
    dispatch(newSubscriber({ email }));
    // setEmail('');
  };

  const {
    subscribeState: { subscribers },
  } = useSelector((store: RootState) => store);

  const errorMessage = subscribers.filter(
    (sub) => sub.subscriber.email === email,
  );
  const err = errorMessage.filter((errMess) => errMess.email === email);

  useEffect(() => {
    if (errorMessage && err) {
      setErrorState(true);
    }
  }, [errorMessage, err]);

  return (
    <div className="footer">
      <div className="container footer__container">
        <div className="footer__flex">
          {/* <img src="../../images/logo.png" alt="logo" className="footer__img" /> */}
          {/* вот тут должен быть инпут на подписаться на новости */}
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
            <a href="">как добраться</a>
            <a href="">политика конфиденциальности</a>
          </div>
          <div className="footer__item">
            {errorState && <span>Подписаться на рассылку</span>}
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
