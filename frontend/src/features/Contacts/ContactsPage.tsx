import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import './Contacts.scss';

function ContactsPage(): JSX.Element {
  return (
    <div className="contacts">
      <div className="container contacts__container">
        <div className="contacts__flex">
          <div className="map">
            <YMaps>
              <Map
                defaultState={{
                  center: [59.911597, 30.267431],
                  zoom: 12,
                }}
              >
                <Placemark geometry={[59.911597, 30.267431]} />
              </Map>
            </YMaps>
          </div>
          <div className="contacts__links">
            <a href="/crew">Команда</a>
            <a href="/contacts">Как добраться</a>
            <a href="/">Спектакли</a>
          </div>
          <div className="contacts__numbers">
            <h5>По всем вопросам</h5>
            <p>Александра (тел. +7 931-531-92-62)</p>
            <br />
            <h5>PR, работа с партнёрами</h5>
            <p>Евгения, Денис (тел. +7 921-391-93-98)</p>
            <br />
            <h5>Наш адрес</h5>
            <p>г. Санкт-Петербург, ст.м. "Нарвская", ул. Курляндская, 49</p>
            <br />
            <div className="contacts__items">
              <h5>Мы в Интернете</h5>
              <a href="https://vk.com/teatr_kumkuat">
                <img
                  src="../../images/vk.png"
                  alt="vk"
                  className="nav__a-size"
                />
              </a>
              <a href="https://t.me/teatr_kumkuat">
                <img
                  src="../../images/telegram.png"
                  alt="telegram"
                  className="nav__a-size"
                />
              </a>
              <a href="https://twitter.com/teatr_kumkuat">
                <img
                  src="../../images/twitter.png"
                  alt="twitter"
                  className="nav__a-size"
                />
              </a>
              <a href="https://www.youtube.com/user/teatrkumkuat">
                <img
                  src="../../images/youtube.png"
                  alt="youtube"
                  className="nav__a-size"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactsPage;
