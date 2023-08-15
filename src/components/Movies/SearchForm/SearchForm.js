import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return(
    <section className="search">
      <div className="search__wrapper">
        <form className="search__form">
          <input type="search" placeholder="Фильм" required id="search-form" className="search__input" />
          <button className="search__button button">Найти</button>
        </form>
        <FilterCheckbox />
      </div>
    </section>
  )
}

export { SearchForm };
