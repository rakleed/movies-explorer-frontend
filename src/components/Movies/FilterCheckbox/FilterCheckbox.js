function FilterCheckbox({ isShortFilm, onShortFilmCheckboxChange }) {
  return(
    <div className="search__checkbox-container">
      <input type="checkbox"
             id="short-films"
             name="short-films"
             form="search-form"
             defaultChecked={isShortFilm}
             className="search__checkbox-marker"
             onChange={onShortFilmCheckboxChange}
      />
      <label htmlFor="short-films" className="search__checkbox-label">Короткометражки</label>
    </div>
  )
}

export { FilterCheckbox };
