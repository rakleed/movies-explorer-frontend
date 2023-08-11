import promo from '../../../images/promo.svg';

function Promo() {
  return(
    <section className="promo">
      <div className="promo__wrapper">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <img className="promo__image" src={promo} alt="Накладывающиеся друг на друга 3 элипса и 3 полуэлипса"></img>
      </div>
    </section>
  )
}

export { Promo };
