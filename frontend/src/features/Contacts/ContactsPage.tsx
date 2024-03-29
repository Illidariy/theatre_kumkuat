import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import './Contacts.scss';
import Footer from '../Footer/Footer';

function ContactsPage(): JSX.Element {
  return (
    <div className="contacts">
      <img
        src="../../images/contact.png"
        alt="text"
        className="contacts__img-text"
      />
      <div className="container">
        <h1 className="contacts__page-name">КОНТАКТЫ</h1>
        <div className="contacts__text">
          <div className="contacts__numbers">
            <h4>По всем вопросам</h4>
            <p>Александра (тел. +7 931-531-92-62)</p>
            <br />
            <h4>PR, работа с партнёрами</h4>
            <p>Евгения, Денис (тел. +7 921-391-93-98)</p>
            <br />
            <h4>Наш адрес</h4>
            <p>г. Санкт-Петербург, ст.м. "Нарвская", ул. Курляндская, 49</p>
            <br />
            <h4>Мы в Интернете</h4>
            <br />
            <div className="contacts__items">
              <a href="https://vk.com/teatr_kumkuat">
                <img
                  src="../../images/vkontacte.png"
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
                  src="../../images/twit.png"
                  alt="twitter"
                  className="nav__a-size"
                />
              </a>
              <a href="https://www.youtube.com/user/teatrkumkuat">
                <img
                  src="../../images/youtube2.png"
                  alt="youtube"
                  className="nav__a-size"
                />
              </a>
              <br />
              <br />
            </div>
          </div>
          <div className="contacts__way">
            <div className="contacts__way-text">
              <img
                src="../../images/placemark.png"
                alt="placemark"
                className="nav__a-size"
              />
              <h1>Как добраться</h1>
            </div>
            <br />
            <div className="contacts__way-text">
              <img
                src="../../images/bus.png"
                alt="bus"
                className="nav__a-size"
              />
              <h4>От метро Технологический Институт,Сенная</h4>
            </div>
            <p>71 автобус остановка ул.Степана Разина</p>
            <br />
            <div className="contacts__way-text">
              <img
                src="../../images/bus.png"
                alt="bus"
                className="nav__a-size"
              />
              <h4>От метро Нарвская</h4>
            </div>
            <p>66 автобус остановка ул.Степана Разина</p>
            <p>6 автобус остановка ул.Курляндская</p>
            <br />
            <div className="contacts__way-text">
              <img
                src="../../images/bus.png"
                alt="bus"
                className="nav__a-size"
              />
              <h4>От метро Звенигородская</h4>
            </div>
            <p>290 автобус остановка ул.Степана Разина</p>
            <br />
            <div className="contacts__way-text">
              <img
                src="../../images/bus.png"
                alt="bus"
                className="nav__a-size"
              />
              <h4>От метро Чернышевская, Гостиный двор</h4>
            </div>
            <p>22 автобус остановка ул.Степана Разина</p>
            <br />
            <div className="contacts__way-text">
              <img
                src="../../images/bus.png"
                alt="bus"
                className="nav__a-size"
              />
              <h4>От метро Балтийская</h4>
            </div>
            <p>43 автобус остановка ул.Степана Разина</p>
            <p>67 автобус остановка ул.Лифляндская</p>
            <div />
          </div>
        </div>
      </div>
      <div className="contacts__map">
        <YMaps>
          <Map
            defaultState={{
              center: [59.911597, 30.267431],
              zoom: 12,
            }}
            width="100%"
            height="400px"
          >
            <Placemark geometry={[59.911597, 30.267431]} />
          </Map>
        </YMaps>
      </div>
      <Footer />
    </div>
  );
}

export default ContactsPage;
