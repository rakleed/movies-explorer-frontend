import React from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard({ card }) {
  const [isLiked, setIsLiked] = React.useState();
  let location = useLocation();

  return(
    <li className="card">
      <img className="card__image" src={'https://api.nomoreparties.co' + card.image.url} alt={`Постер фильма «${card.nameRU}»`} />
      <a href={card.trailerLink} className="card__trailer" target="_blank" rel="noreferrer" /> {/* TODO: place img inside a */}
      <div className="card__description">
        <div className="card__wrapper">
          <h2 className="card__title">{card.nameRU}</h2>
          <button
            className={`card__button button${location.pathname === "/saved-movies" ? " card__button_type_remove"
                : isLiked ? " card__button_type_like-active"
                  : " card__button_type_like"}`}
            type="button"
            // onClick={handleLikeClick}
          />
        </div>
        <p className="card__length">{ Math.floor(card.duration / 60) }ч { card.duration % 60 }м</p>
      </div>
    </li>
  )
}

export { MoviesCard };
