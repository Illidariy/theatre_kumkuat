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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
                saepe earum ducimus obcaecati laborum sequi, nobis veritatis
                asperiores molestias odio corporis praesentium nulla quisquam
                eum quas repellat accusamus voluptatibus eveniet. Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Distinctio
                corrupti magnam asperiores! Quidem itaque non maxime aspernatur,
                ipsa error nesciunt eveniet facere aut quae delectus sequi ad
                corporis deserunt. Nulla.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Inventore expedita consequatur ad, provident harum unde sint
                tempora vero, distinctio nesciunt nulla. Itaque accusamus atque
                esse neque doloremque fugiat quaerat eligendi.
              </p>
              <a href="/">
                <div className="kymkyat__info-btn">команда</div>
              </a>
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
