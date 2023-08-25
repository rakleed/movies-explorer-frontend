import React from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard({ movieInfo, onCardButtonClick, savedMovies }) {
  const location = useLocation();

  const movieDurationHours = Math.floor(movieInfo.duration / 60);
  const movieDurationMinutes = movieInfo.duration % 60;

  function handleCardButtonClick() {
    onCardButtonClick(movieInfo);
  }

  return(
    <li className="card">
      <a href={movieInfo.trailerLink} className="card__trailer" target="_blank" rel="noreferrer">
        <img
          className="card__image"
          src={location.pathname === "/movies" && movieInfo.image
            ? 'https://api.nomoreparties.co' + movieInfo.image.url
            : location.pathname === "/saved-movies"
              ? movieInfo.image
              : ''}
          alt={`Постер фильма «${movieInfo.nameRU}»`}
        />
        <div className="card__overlay"></div>
      </a>
      <div className="card__description">
        <div className="card__wrapper">
          <h2 className="card__title">{movieInfo.nameRU}</h2>
          <button
            className={`card__button button${location.pathname === "/saved-movies"
              ? " card__button_type_remove"
                : savedMovies.some(item => item.movieId === movieInfo.id)
                ? " card__button_type_like-active"
                : " card__button_type_like"
            }`}
            type="button"
            onClick={handleCardButtonClick}
          />
        </div>
        <p className="card__length">
          {movieDurationHours > 0 && `${movieDurationHours}ч`}{movieDurationMinutes > 0 && ` ${movieDurationMinutes}м`}
        </p>
      </div>
    </li>
  )
}

export { MoviesCard };
