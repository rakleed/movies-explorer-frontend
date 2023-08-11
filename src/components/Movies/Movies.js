import { Header } from '../Header/Header';
import { SearchForm } from './SearchForm/SearchForm';
import { Preloader } from './Preloader/Preloader';
import { MoviesCardList } from './MoviesCardList/MoviesCardList';
import { Footer } from '../Footer/Footer';
import { movies } from '../../utils/constants';

function Movies() {
  return(
    <>
      <Header />
        <main>
          <SearchForm />
          {/*<Preloader />*/}
          <MoviesCardList
            cards={movies}
          />
        </main>
      <Footer />
    </>
  )
}

export { Movies };
