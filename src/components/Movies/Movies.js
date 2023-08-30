import React from 'react';
import { Header } from '../Header/Header';
import { SearchForm } from './SearchForm/SearchForm';
import { MoviesCardList } from './MoviesCardList/MoviesCardList';
import { Preloader } from './Preloader/Preloader';
import { Footer } from '../Footer/Footer';
import * as MoviesApi from '../../utils/MoviesApi';

function Movies({ isLoggedIn, searchQuery, isShortFilm, onSearchFormSubmit, onShortFilmCheckboxChange, filterMovies, onCardButtonClick, savedMovies }) {
  const [rawMovies, setRawMovies] = React.useState(JSON.parse(localStorage.getItem('rawMovies')) || []);

  React.useEffect(() => {
    if (rawMovies.length === 0) {
      MoviesApi.getMovieList()
        .then((res) => {
          setRawMovies(res);
          localStorage.setItem('rawMovies', JSON.stringify(res));
        })
        .catch(console.error);
    }
  }, []);

  return(
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main>
        <SearchForm
          searchQuery={searchQuery}
          isShortFilm={isShortFilm}
          onSearchFormSubmit={onSearchFormSubmit}
          onShortFilmCheckboxChange={onShortFilmCheckboxChange}
        />
        {rawMovies.length > 0 ?
          <MoviesCardList
            movies={filterMovies(rawMovies)}
            onCardButtonClick={onCardButtonClick}
            savedMovies={savedMovies}
          />
          : <Preloader />}
      </main>
      <Footer />
    </>
  )
}

export { Movies };
