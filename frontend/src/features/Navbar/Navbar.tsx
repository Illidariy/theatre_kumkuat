import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { RootState } from '../../store';
import './Navbar.scss';

export default function Navbar(): JSX.Element {
  const { user } = useSelector((store: RootState) => store.userState);

  return (
    <>
      <div className="nav__container">
        <div className="nav__flex">
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
            {user.isAdmin === true && (
              <li>
                <NavLink className="nav__list-item" to="/logout">
                  выход
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
}
