import React from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.svg';
// import useForm from "../hooks/useForm";

function AuthorizationForm({ name, title, button, isLoginSuggestion, submitHandler }) {
  let location = useLocation();
  const navigate = useNavigate();
  // const { values, handleChange } = useForm({email: '', password: ''});

  function handleSubmit(event) {
    event.preventDefault();
    // submitHandler(values);
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
            <span className="authorization-form__input-key">Имя</span>
            <label className="authorization-form__label">
            <input
              className="authorization-form__input authorization-form__input_title_name"
              type="text"
              name="name"
              id="authorization-form__name"
              placeholder="Имя"
              autoComplete="given-name"
              minLength="1"
              maxLength="30"
              required
              // value={values.name ?? ''}
              // onChange={handleChange}
            />
            {/* TODO: try to rename input name from `title` to `name` */}
            </label>
          </>
           : ""
        }
        <span className="authorization-form__input-key">E-mail</span>
        <label className="authorization-form__label">
          <input
            className="authorization-form__input authorization-form__input_title_email"
            type="email"
            name="email"
            id="authorization-form__email"
            placeholder="Email"
            autoComplete="email"
            minLength="6"
            maxLength="50"
            required
            // value={values.email ?? ''}
            // onChange={handleChange}
          />
          {/* TODO: try to rename input name from  ̀title` to `name` */}
        </label>
        <span className="authorization-form__input-key">Пароль</span>
        <label className="authorization-form__label">
          <input
            className="authorization-form__input authorization-form__input_title_password"
            type="password"
            name="password"
            id="authorization-form__password"
            placeholder="Пароль"
            autoComplete={location.pathname === "/signup" ? "new-password" :
              location.pathname === "/signin" ? "current-password" : ""
          }
            required
            // value={values.password ?? ''}
            // onChange={handleChange}
          />
        </label>
        <span className="authorization-form__input-error"></span>
      </form>
      <button className="authorization-form__submit-button button" type="submit" onClick={() => navigate("/movies")}>{button}</button>
      {location.pathname === "/signup" ?
        <p className="authorization-form__suggestion">
          Уже зарегистрированы? <Link to="/signin" className="authorization-form__suggestion-link">Войти</Link>
        </p> :
        location.pathname === "/signin" ?
          <p className="authorization-form__suggestion">
            Ещё не зарегистрированы? <Link to="/signup" className="authorization-form__suggestion-link link">Регистрация</Link>
          </p> :
          ""
      }
    </main>
  )
}

export { AuthorizationForm };
