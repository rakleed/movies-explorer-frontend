function FilterCheckbox() {
  return(
    <div className="search__checkbox-container">
      <input type="checkbox"
             id="short-films"
             name="short-films"
             defaultChecked={true}
             className="search__checkbox-marker"
      />
      <label htmlFor="short-films" className="search__checkbox-label">
        <div className="search__checkbox-image"></div>
        <span className="search__checkbox-text">Короткометражки</span>
      </label>
    </div>
  )
}

export { FilterCheckbox };
