import React from 'react';
import './Kymkyat.scss';

export default function Kymkyat(): JSX.Element {
  return (
    <div className="kymkyat">
      <div className="kymkyat__block">
        <img
          src="../../../images/teatr.png"
          alt=""
          className="kymkyat__img-text"
        />
        <div className="container">
          <h1 className="kymkyat__title">КУМКУАТ</h1>
          <div className="kymkyat__flex">
            <div className="kymkyat__info">
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
                <div className="kymkyat__info-btn">команда</div>
              </a> */}
            </div>
            <div>
              <img
                src="../../../images/kymkyat.jpg"
                alt=""
                className="kymkyat__img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
