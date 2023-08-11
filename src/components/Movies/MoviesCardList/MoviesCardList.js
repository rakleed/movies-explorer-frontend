import { MoviesCard } from '../MoviesCard/MoviesCard';

function MoviesCardList({ cards }) {
  return(<>
    {cards.length > 0 ?
      <section className="cards">
        <div className="cards__wrapper">
          <ul className="cards__list">
            {
              cards.slice(0, 12).map(card => {
                return (
                  <MoviesCard
                    card={card}
                    key={card.id}
                  />
                )
              })
            }
          </ul>
          {cards.length > 12 ? <button className="cards__more button">Ещё</button> : ""}
        </div>
      </section>
        : <p className="cards__not-found">Фильмы не найдены</p>
    }
    </>)
}

export { MoviesCardList };
