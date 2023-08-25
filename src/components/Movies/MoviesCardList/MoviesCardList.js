import React from 'react';
import { useLocation } from 'react-router-dom';
import { MoviesCard } from '../MoviesCard/MoviesCard';
import {
  DESKTOP_VIEW_WIDTH,
  TABLET_VIEW_WIDTH,
  DESKTOP_CARD_COUNT,
  TABLET_CARD_COUNT,
  MOBILE_CARD_COUNT,
  DESKTOP_CARD_COUNT_MORE,
  TABLET_CARD_COUNT_MORE,
  MOBILE_CARD_COUNT_MORE
} from '../../../utils/constants';

function MoviesCardList({ movies, onCardButtonClick, savedMovies }) {
  const [cardToView, setCardToView] = React.useState(TABLET_CARD_COUNT);
  const location = useLocation();

  React.useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  React.useEffect(() => {
    handleResize();
  }, [movies])

  function handleResize() {
    if (window.innerWidth > DESKTOP_VIEW_WIDTH) {
      setCardToView(DESKTOP_CARD_COUNT);
    } else if (window.innerWidth > TABLET_VIEW_WIDTH) {
      setCardToView(TABLET_CARD_COUNT);
    } else {
      setCardToView(MOBILE_CARD_COUNT);
    }
  }

  function handleMoreButtonClick() {
    if (window.innerWidth > DESKTOP_VIEW_WIDTH) {
      setCardToView(prevCardToView => prevCardToView + DESKTOP_CARD_COUNT_MORE);
    } else if (window.innerWidth > TABLET_VIEW_WIDTH) {
      setCardToView(prevCardToView => prevCardToView + TABLET_CARD_COUNT_MORE);
    } else {
      setCardToView(prevCardToView => prevCardToView + MOBILE_CARD_COUNT_MORE);
    }
  }

  return(
    movies.length > 0 ? (
      <section className="cards">
        <div className="cards__wrapper">
          <ul className="cards__list">
            {movies
              .slice(0, location.pathname === "/movies" ? cardToView : undefined)
              .map(movie => (
                <MoviesCard
                  key={location.pathname === "/movies" ? movie.id : movie._id}
                  movieInfo={movie}
                  onCardButtonClick={onCardButtonClick}
                  savedMovies={savedMovies}
                />
              ))
            }
          </ul>
          {movies.length > cardToView && location.pathname === "/movies" &&
            <button className="cards__more button" onClick={handleMoreButtonClick}>Ещё</button>
          }
        </div>
      </section>
      ) : (
      <section className="cards__not-found">
        {location.pathname === "/movies" ? "Ничего не найдено" : "Нет сохранённых фильмов"}
      </section>
    )
  )
}

export { MoviesCardList };
