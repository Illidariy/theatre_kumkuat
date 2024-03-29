import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { RootState } from '../../store';
import './Navbar.scss';

export default function Navbar(): JSX.Element {
  const { user } = useSelector((store: RootState) => store.userState);
  // const [scroll, setScroll] = useState(window.scrollY);

  // function handleScroll(): number {
  //   return setScroll(window.scrollY);
  // }

  // useEffect(() => {
  //   const navbar: any = document.querySelector('.nav__flex');
  //   window.onscroll = (scroll) => {
  //     if (setScroll(scroll) < 500) {
  //       navbar.classList.add('nav-active');
  //     } else {
  //       navbar.classList.remove('nav-active');
  //     }
  // if (window.scrollY > 500) {
  //   navbar.classList.remove('nav-active');
  // }
  //   };
  // }, [scroll]);

  return (
    <>
      <div className="nav" id="Navbar">
        <div className="container">
          <div className="nav__flex">
            <div className="nav__logo">
              <NavLink to="/">
                <span className="nav__logo-text">театр-студия</span>
                <br />
                <span className="nav__logo-text nav__logo-text-size">
                  КУМКУАТ
                </span>
              </NavLink>
            </div>
            <ul className="nav__list">
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
                <NavLink to="/contacts">контакты</NavLink>
              </li>
              <li className="nav__list-social">
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
      </div>
      <Outlet />
    </>
  );
}
