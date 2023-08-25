import { Header } from '../Header/Header';
import { SearchForm } from '../Movies/SearchForm/SearchForm';
import { MoviesCardList } from '../Movies/MoviesCardList/MoviesCardList';
import { Footer } from '../Footer/Footer';
import React from 'react';
import { SHORT_MOVIE_LENGTH } from '../../utils/constants';
// import { Preloader } from '../Movies/Preloader/Preloader';

function SavedMovies({ isLoggedIn, onCardButtonClick, savedMovies }) {
  const [searchQueryOnSaved, setSearchQueryOnSaved] = React.useState('');
  const [isShortFilmOnSaved, setIsShortFilmOnSaved] = React.useState(false);

  function handleSearchFormSubmitOnSaved(searchQuery) {
    setSearchQueryOnSaved(searchQuery);
  }

  function handleShortFilmCheckboxChangeOnSaved(event) {
    const checkedState = event.target.checked;

    setIsShortFilmOnSaved(checkedState);
  }

  function filterMoviesOnSaved(savedMovies) {
    return savedMovies.filter((item) => {
      const includesQuery =
        item.nameRU.toLowerCase().includes(searchQueryOnSaved.toLowerCase()) ||
        item.nameEN.toLowerCase().includes(searchQueryOnSaved.toLowerCase());

      return isShortFilmOnSaved ? item.duration <= SHORT_MOVIE_LENGTH && includesQuery : includesQuery;
    });
  }

  return(
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main>
        <SearchForm
          searchQuery={''}
          isShortFilm={false}
          onSearchFormSubmit={handleSearchFormSubmitOnSaved}
          onShortFilmCheckboxChange={handleShortFilmCheckboxChangeOnSaved}
        />
        {/*<Preloader />*/}
        {/*{savedMovies.length > 0 ? (*/}
        <MoviesCardList
          movies={filterMoviesOnSaved(savedMovies)}
          onCardButtonClick={onCardButtonClick}
          savedMovies={savedMovies}
        />
        {/*) : <Preloader />*/}
        {/*}*/}
        {/*<MoviesCardList />*/}
      </main>
      <Footer />
    </>
  )
}

export { SavedMovies };
