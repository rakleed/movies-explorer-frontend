import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { shallowEqualObjects } from 'shallow-equal';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Header } from '../Header/Header';
import { useFormWithValidation } from '../../hooks/useFormValidation';

function Profile({ isLoggedIn, onSignOut, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, setValues} = useFormWithValidation();
  const [isEditing, setIsEditing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const firstInputRef = useRef(null);

  React.useEffect(() => {
    setValues(currentUser);
  }, [currentUser, setValues]);

  React.useEffect(() => {
    if (isEditing) {
      firstInputRef.current.focus();
    }
  }, [isEditing]);

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateUser(values)
      .then(() => {
        setIsSuccess(true);
        setIsEditing(false);
      })
      .catch(console.error);
  }

  return(
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="profile">
        <p className="profile__welcome">Привет, {currentUser.name}!</p>
        <form className="profile__form" name="profile__data" onSubmit={handleSubmit}>
          <fieldset className="profile__form-wrapper" disabled={!isEditing}>
            <div className="profile__input-name-wrapper">
              <label className="profile__input-label">Имя</label>
              <input
                className="profile__input"
                defaultValue={currentUser.name}
                type="text"
                name="name"
                id="profile__name"
                placeholder="Имя"
                autoComplete="given-name"
                minLength="2"
                maxLength="30"
                required
                onChange={handleChange}
                ref={firstInputRef}
              />
            </div>
            <span className="profile__input-error">{errors.name}</span>
            <div className="profile__input-email-wrapper">
              <label className="profile__input-label">E-mail</label>
              <input
                className="profile__input"
                defaultValue={currentUser.email}
                type="email"
                name="email"
                id="profile__email"
                placeholder="Email"
                autoComplete="email"
                minLength="6"
                required
                pattern="[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,4}"
                onChange={handleChange}
              />
            </div>
            <span className="profile__input-error">{errors.email}</span>
          </fieldset>
          {isEditing && <button className="profile__save-button button" disabled={!isValid || shallowEqualObjects(currentUser, values)}>Сохранить</button>}
        </form>
        {!isEditing &&
          <>
            <span className="profile__success-message">{isSuccess && "Профиль успешно обновлён."}</span>
            <button className="profile__edit-button button" type="button" onClick={handleEditClick}>
              Редактировать
            </button>
            <NavLink to="/" className="profile__logout link" onClick={onSignOut}>Выйти из аккаунта</NavLink>
          </>
        }
      </main>
    </>
  )
}

export { Profile };
