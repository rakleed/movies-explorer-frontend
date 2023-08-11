import { NavLink } from 'react-router-dom';

function NotFound() {

  return (
    <main className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">Страница не найдена</p>
      <NavLink to={-1} className="not-found__link link">Назад</NavLink>
    </main>
  );
}

export { NotFound };
