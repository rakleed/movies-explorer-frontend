import user from '../../../images/user.jpeg';

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__wrapper">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__container">
          <img className="about-me__photo" src={user} alt="Фото Виталия в профиль"  />
          <div className="about-me__description">
            <h3 className="about-me__name">Виталий</h3>
            <p className="about-me__info">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__bio">
              Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ. У&nbsp;меня есть жена
              и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. С&nbsp;2015
              года работал в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как прошёл курс
              по&nbsp;веб-разработке, начал заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
            </p>
            <a className="about-me__link link" href="https://github.com/rakleed">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export { AboutMe };
