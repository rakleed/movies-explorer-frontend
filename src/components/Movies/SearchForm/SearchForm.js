import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';
import { useForm } from '../../../hooks/useForm';

function SearchForm({ searchQuery, isShortFilm, onSearchFormSubmit, onShortFilmCheckboxChange }) {
  const { values, handleChange } = useForm({ search: '' });

  function handleSubmit(event) {
    event.preventDefault();
    onSearchFormSubmit(values.search);
  }

  return(
    <section className="search">
      <div className="search__wrapper">
        <form className="search__form" onSubmit={handleSubmit}>
          <input
            type="search"
            name="search"
            placeholder="Фильм"
            id="search-form"
            className="search__input"
            defaultValue={searchQuery}
            onChange={handleChange}
          />
          <button className="search__button button">Найти</button>
        </form>
        <FilterCheckbox isShortFilm={isShortFilm} onShortFilmCheckboxChange={onShortFilmCheckboxChange} />
      </div>
    </section>
  )
}

export { SearchForm };
