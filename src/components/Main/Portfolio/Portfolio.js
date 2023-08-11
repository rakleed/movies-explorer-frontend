function Portfolio() {
  return(
    <section className="portfolio">
      <div className="portfolio__wrapper">
        <h2 className="portfolio__title">Портфолио</h2>
        <nav>
          <ul className="portfolio__list">
            <li className="portfolio__list-item">
              <a href="#" className="portfolio__link link">
                Статичный сайт
                <div className="portfolio__link-icon">&#8599;</div>
              </a>
            </li>
            <li className="portfolio__list-item">
              <a href="#" className="portfolio__link link">
                Адаптивный сайт
                <div className="portfolio__link-icon">&#8599;</div>
              </a>
            </li>
            <li className="portfolio__list-item">
              <a href="#" className="portfolio__link link">
                Одностраничное приложение
                <div className="portfolio__link-icon">&#8599;</div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  )
}

export { Portfolio };
