import { NavLink } from 'react-router-dom';
import React from 'react';

function Navigation() {
  return(
    <div className="navigation">
      <div className="navigation__container">
        <button className="navigation__close-button button" type="button"
          // onClick={handleLikeClick}
        />
        <nav className="navigation__nav">
          <ul className="navigation__list"> {/*header__logo-wrapper*/}
            <li>
              <NavLink
                to="/"
                className={({isActive}) =>
                  `navigation__link link${isActive ? " navigation__link_active" : ""}`}
              >Главная</NavLink>
            </li>
            <li>
              <NavLink
                to="/movies"
                className={({isActive}) =>
                  `navigation__link link${isActive ? " navigation__link_active" : ""}`}
              >Фильмы</NavLink>
            </li>
            <li>
              <NavLink
                to="/saved-movies"
                className={({isActive}) =>
                  `navigation__link link{isActive ? " navigation__link_active" : ""}`}
              >Сохранённые фильмы</NavLink>
            </li>
          </ul>
          <NavLink to="/profile" className="navigation__link-wrapper link">
            Аккаунт
            <div className="navigation__link-image"></div>
          </NavLink>
        </nav>
      </div>
    </div>
  )
}

export { Navigation };
