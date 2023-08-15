import { Header } from '../Header/Header';

function Profile() {
  return(
    <>
      <Header />
      <main className="profile">
        <p className="profile__welcome">Привет, Виталий!</p>
        <div className="profile__data">
          <div className="profile__name-wrapper">
            <h2 className="profile__name-key">Имя</h2>
            <p className="profile__name-value">Виталий</p>
          </div>
          <div className="profile__email-wrapper">
            <h2 className="profile__email-key">E-mail</h2>
            <p className="profile__email-value">pochta@yandex.ru</p>
          </div>
        </div>
        <button className="profile__edit-button button" type="button">Редактировать</button>
        <a href="/signin" className="profile__logout link">Выйти из аккаунта</a>
      </main>
    </>
  )
}

export { Profile };
