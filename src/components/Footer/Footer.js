function Footer() {
  return(
    <footer className="footer">
      <div className="footer__wrapper">
        <p className="footer__description">Учебный проект Яндекс.Практикум &#1093; BeatFilm.</p>
        <div className="footer__container">
          <p className="footer__copyright">&#169; 2020</p>
          <nav>
            <ul className="footer__links">
              <li>
                <a
                  href="https://practicum.yandex.ru/"
                  target="_blank"
                  rel="noreferrer"
                  className="footer__link link"
                >Яндекс.Практикум</a>
              </li>
              <li>
                <a
                  href="https://github.com/rakleed"
                  target="_blank"
                  rel="noreferrer"
                  className="footer__link link"
                >GitHub</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footer };
