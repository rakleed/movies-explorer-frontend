import { Header } from '../Header/Header';
import { SearchForm } from '../Movies/SearchForm/SearchForm';
import { MoviesCardList } from '../Movies/MoviesCardList/MoviesCardList';
import { Footer } from '../Footer/Footer';
import { savedMovies } from '../../utils/constants';

function SavedMovies() {
  return(
    <>
      <Header />
      <main>
        <SearchForm />
        {/*<Preloader />*/}
        <MoviesCardList
          cards={savedMovies}
        />
      </main>
      <Footer />
    </>
  )
}

export { SavedMovies };
