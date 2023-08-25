import logo from '../../images/logo.svg';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Navigation } from '../Navigation/Navigation';

function Header({isLoggedIn}) {
  const [matches, setMatches] = useState(window.matchMedia('(max-width: 600px)').matches);
  const [isNavigationOpened, setIsNavigationOpened] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window
      .matchMedia('(max-width: 600px)')
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  function onHamburgerClick() {
    setIsNavigationOpened(true);
  }

  function onCloseNavigationClick() {
    setIsNavigationOpened(false);
  }

  return(
    <header className={`header${location.pathname === "/" ? " header_dark" : ""}`}>
      <nav className="header__navigation">
        {(isLoggedIn && matches) || !isLoggedIn ? (
          <NavLink className="link" to="/">
            <img className="header__logo-image" src={logo} alt="Логотип сайта" />
          </NavLink>
          ) : isLoggedIn && !matches && (
            <ul className="header__logo-wrapper">
              <li>
                <NavLink className="link" to="/">
                  <img className="header__logo-image" src={logo} alt="Логотип сайта" />
                </NavLink>
              </li>
              <li className="header__logo-item">
                <NavLink
                  to="/movies"
                  className={({isActive}) =>
                    `header__logo-link link${isActive ? " header__logo-link_active" : ""}`}
                >Фильмы</NavLink>
              </li>
              <li className="header__logo-item">
                <NavLink
                  to="/saved-movies"
                  className={({isActive}) =>
                    `header__logo-link link${isActive ? " header__logo-link_active" : ""}`}
                >Сохранённые фильмы</NavLink>
              </li>
            </ul>
          )
        }

        {!isLoggedIn ? (
          <ul className="header__auth-wrapper">
            <li className="header__auth-item">
              <NavLink to="/signup" className="header__auth-link link">Регистрация</NavLink>
            </li>
            <li className="header__auth-item">
              <NavLink to="/signin" className="header__auth-link header__auth-link_type_sign-in link">Войти</NavLink>
            </li>
          </ul>
        ) : isLoggedIn && !matches ? (
          <NavLink to="/profile" className="header__auth-item link">
            Аккаунт
            <div className="header__auth-image"></div>
          </NavLink>
        ) : (
          <button type="button" className="header__hamburger-icon button" onClick={onHamburgerClick}></button>
        )}
      </nav>

      {matches &&
        <Navigation isNavigationOpened={isNavigationOpened} handleCloseNavigationClick={onCloseNavigationClick} />
      }
    </header>
  )
}

export { Header };
