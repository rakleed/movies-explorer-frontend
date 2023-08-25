import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { useFormWithValidation } from '../../hooks/useFormValidation';

function AuthorizationForm({ name, title, button, submitHandler }) {
  const [errorMessage, setErrorMessage] = React.useState('');
  const location = useLocation();
  const { values, handleChange, errors, isValid} = useFormWithValidation();

  function handleSubmit(event) {
    setErrorMessage('');
    event.preventDefault();
    submitHandler(values);
      // .catch((error) => {
      //   setErrorMessage(error.message);
      //   console.error(error.response.data.message);
      // });
  }

  return (
    <main className="authorization-form">
      <NavLink to="/" className="link">
        <img src={logo} alt="Логотип" className="authorization-form__logo" />
      </NavLink>
      <h2 className="authorization-form__title">{title}</h2>
      <form className="authorization-form__form" name={`${name}-form`} onSubmit={handleSubmit}>
        {location.pathname === "/signup" ?
          <>
            <label className="authorization-form__input-label" htmlFor="name">Имя</label>
            <input
              className="authorization-form__input authorization-form__input_title_name"
              type="text"
              name="name"
              id="authorization-form__name"
              placeholder="Имя"
              autoComplete="given-name"
              minLength="2"
              maxLength="30"
              required
              value={values.name ?? ''}
              onChange={handleChange}
            />
            <span className="authorization-form__input-error">{errors.name}</span>
          </>
           : ""
        }
        <label className="authorization-form__input-label" htmlFor="email">E-mail</label>
        <input
          className="authorization-form__input authorization-form__input_title_email"
          type="email"
          name="email"
          id="authorization-form__email"
          placeholder="Email"
          autoComplete="email"
          minLength="6"
          required
          pattern="[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,4}"
          value={values.email ?? ''}
          onChange={handleChange}
        />
        <span className="authorization-form__input-error">{errors.email}</span>

        <label className="authorization-form__input-label" htmlFor="password">Пароль</label>
        <input
          className="authorization-form__input authorization-form__input_title_password"
          type="password"
          name="password"
          id="authorization-form__password"
          placeholder="Пароль"
          autoComplete={ location.pathname === "/signup" ? "new-password" :
            location.pathname === "/signin" ? "current-password" : "" }
          required
          value={values.password ?? ''}
          onChange={handleChange}
        />
        <span className="authorization-form__input-error">{errors.password}{errorMessage}</span>

        <button
          className={`authorization-form__submit-button${location.pathname === "/signin"
            ? ' authorization-form__submit-button_type_login'
            : ''
          } button`}
          type="submit"
          disabled={!isValid}
        >{button}</button>
        {location.pathname === "/signup" ?
          <p className="authorization-form__suggestion">
            Уже зарегистрированы? <Link to="/signin" className="authorization-form__suggestion-link">Войти</Link>
          </p> :
          location.pathname === "/signin" &&
          <p className="authorization-form__suggestion">
            Ещё не зарегистрированы? <Link to="/signup" className="authorization-form__suggestion-link link">Регистрация</Link>
          </p>
        }
      </form>
    </main>
  )
}

export { AuthorizationForm };
