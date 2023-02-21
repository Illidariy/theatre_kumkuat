import React from 'react';
import Footer from '../Footer/Footer';
import './Kumkuat.scss';

export default function Kumkyat(): JSX.Element {
  return (
    <div className="kumkuat">
      <div className="kumkuat__block">
        <img
          src="../../../images/teatr.png"
          alt=""
          className="kumkuat__img-text"
        />
        <div className="container">
          <h1 className="kumkuat__title">КУМКУАТ</h1>
          <div className="kumkuat__flex">
            <div className="kumkuat__info">
              <p>
                Театр-студия «Кумкуат» - сообщество молодых людей, объединенных
                любовью к театру. Руководитель театра - Левицкая Мария
                Александровна, ученица знаменитого театрального режиссёра
                Зиновия Яковлевича Корогодского. Основанный в 2006 году,
                «Кумкуат» прошел путь от детской студии до настоящего
                репертуарного театра. При театре действует студия, где каждый
                желающий может прикоснуться к основам актерского мастерства.
                Театр активно принимает участие в фестивалях.
              </p>
              <br />
              <p>
                Кумкуат любит: тренинги, развитие, импровизацию, смыслы,
                процесс, погружение, студийность, этику и дисциплину, радость
                творчества, поиск, добрый ум и умную доброту, вдохновение…
              </p>
              {/* <a href="/">
                <div className="kumkuat__info-btn">команда</div>
              </a> */}
            </div>
            <div>
              <img
                src="../../../images/kumkuat.jpg"
                alt=""
                className="kumkuat__img"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
