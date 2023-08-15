function AboutProject() {
  return (
    <section className="about-project">
      <div className="about-project__wrapper">
        <h2 className="about-project__title">О проекте</h2>
        <ul className="about-project__description">
          <li className="about-project__item">
            <h3 className="about-project__heading">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__subheading">
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
            </p>
          </li>
          <li className="about-project__item">
            <h3 className="about-project__heading">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__subheading">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
            </p>
          </li>
        </ul>
        <div className="about-project__timetable">
          <h4 className="about-project__timetable-heading about-project__timetable-heading_selected">1 неделя</h4>
          <h4 className="about-project__timetable-heading">4 недели</h4>
          <p className="about-project__timetable-text">Back-end</p>
          <p className="about-project__timetable-text">Front-end</p>
        </div>
      </div>
    </section>
  )
}

export { AboutProject };
