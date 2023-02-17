import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar(): JSX.Element {
  // const navbar = document.querySelector('.nav-fixed');
  // window.onscroll = () => {
  //   if (window.scrollY > 300) {
  //     navbar.classList.add('nav-active');
  //   } else {
  //     navbar.classList.remove('nav-active');
  //   }
  // };
  return (
    <>
      <div className="nav__container">
        <div className="nav__logo">
          <NavLink to="/">
            <img
              src="../../images/logo.png"
              alt="logo"
              className="nav__logo_img"
            />
          </NavLink>
        </div>
        <ul className="nav__list">
          {/* {!user && ( */}
          <li>
            <NavLink className="nav__list-item" to="/registration">
              афиша
            </NavLink>
          </li>
          <li>
            <NavLink className="nav__list-item" to="/login">
              спектакли
            </NavLink>
          </li>
          <li>
            <NavLink className="nav__list-item" to="/login">
              команда
            </NavLink>
          </li>
          <li>
            <NavLink className="nav__list-item" to="/login">
              мерч
            </NavLink>
          </li>
          <li>
            <NavLink className="nav__list-item" to="/login">
              контакты
            </NavLink>
          </li>
          {/* )} */}
          {/* {user && ( */}
          <li>
            <NavLink className="nav__list-item" to="/logout">
              LogOut
            </NavLink>
          </li>
          {/* )} */}
        </ul>
      </div>
      <Outlet />
    </>
  );
}
