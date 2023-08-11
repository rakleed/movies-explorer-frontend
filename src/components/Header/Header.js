import logo from '../../images/logo.svg';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Header() {
  const [matches, setMatches] = useState(window.matchMedia('(max-width: 600px)').matches);
  let location = useLocation();

  useEffect(() => {
    window
      .matchMedia('(max-width: 600px)')
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  return(
    <header className={`header${location.pathname === "/" ? " header_dark" : ""}`}>
      <nav className="header__navigation">
        {location.pathname === "/" || (location.pathname !== "/" && matches) ?
        <NavLink className="link" to="/">
          <img className="header__logo-image" src={logo} alt="Логотип сайта" />
        </NavLink> :
        location.pathname !== "/" && !matches ?
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
          </ul> : ""
        }

        {location.pathname !== "/" && matches && <button type="button" className="header__hamburger-icon button"></button>}
          {location.pathname === "/" ?
            <ul className="header__auth-wrapper">
              <li className="header__auth-item">
                <NavLink to="/signup" className="header__auth-link link">Регистрация</NavLink>
              </li>
              <li className="header__auth-item">
                <NavLink to="/signin" className="header__auth-link header__auth-link_type_sign-in link">Войти</NavLink>
              </li>
            </ul> : !matches &&
            <NavLink to="/profile" className="header__auth-item link">
              Аккаунт
              <div className="header__auth-image"></div>
            </NavLink>
          }
      </nav>
    </header>
  )
}

export { Header };
