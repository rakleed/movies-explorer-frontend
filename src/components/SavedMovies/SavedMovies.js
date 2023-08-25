import { Header } from '../Header/Header';
import { SearchForm } from '../Movies/SearchForm/SearchForm';
import { MoviesCardList } from '../Movies/MoviesCardList/MoviesCardList';
import { Footer } from '../Footer/Footer';
import React from 'react';
// import { Preloader } from '../Movies/Preloader/Preloader';

function SavedMovies({ isLoggedIn, onSearchFormSubmit, onShortFilmCheckboxChange, filterMovies, onCardButtonClick, savedMovies }) {

  return(
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main>
        <SearchForm
          searchQuery={''}
          isShortFilm={false}
          onSearchFormSubmit={onSearchFormSubmit}
          onShortFilmCheckboxChange={onShortFilmCheckboxChange}
        />
        {/*<Preloader />*/}
        {/*{savedMovies.length > 0 ? (*/}
          <MoviesCardList
            movies={filterMovies(savedMovies)}
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
