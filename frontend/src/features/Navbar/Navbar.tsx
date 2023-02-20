import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar(): JSX.Element {
  return (
    //     const navbar = document.querySelector('.nav__flex');
    // window.onscroll = () => {
    //   if (window.scrollY > 500) {
    //     navbar.classList.add('nav-active');
    //   } else {
    //     navbar.classList.remove('nav-active');
    //   }
    // };
    <>
      <div className="nav">
        <div className="container">
          <div className="nav__flex">
            <div className="nav__logo">
              <NavLink to="/">
                {/* <img
                src="../../images/logo.png"
                alt="logo"
                className="nav__logo_img"
              /> */}
                <span className="nav__logo-text">театр-студия</span>
                <br />
                <span className="nav__logo-text nav__logo-text-size">
                  КУМКУАТ
                </span>
              </NavLink>
            </div>
            <ul className="nav__list">
              {/* {!user && ( */}
              <li className="nav__list-item">
                <NavLink to="/news">новости</NavLink>
              </li>
              <li className="nav__list-item">
                <NavLink to="/spectacles">спектакли</NavLink>
              </li>
              <li className="nav__list-item">
                <NavLink to="/crew">команда</NavLink>
              </li>
              <li className="nav__list-item">
                <NavLink to="/products">мерч</NavLink>
              </li>
              <li className="nav__list-item">
                <NavLink to="/">контакты</NavLink>
              </li>
              {/* )} */}
              {/* {user && ( */}
              {/* <li>
              <NavLink className="nav__list-item" to="/logout">
                выход
              </NavLink>
            </li> */}
              {/* )} */}
              <li className="nav__list-social">
                <a href="/">
                  <img
                    src="../../images/vk.png"
                    alt="vk"
                    className="nav__a-size"
                  />
                </a>
                <a href="/">
                  <img
                    src="../../images/inst.png"
                    alt="vk"
                    className="nav__a-size"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
