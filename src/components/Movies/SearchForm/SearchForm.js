import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return(
    <section className="search">
      <div className="search__wrapper">
        <div className="search__form">
          <input type="text" placeholder="Фильм" className="search__input" />
          <button className="search__button button">Найти</button>
        </div>
        <FilterCheckbox />
      </div>
    </section>
  )
}

export { SearchForm };
