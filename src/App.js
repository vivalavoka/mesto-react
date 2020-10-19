import React from 'react';
import avatar from './images/avatar.png';

function App() {
  return (
    // <div className="page">
      <div className="page__content">
        <header className="header">
          <div className="logo header__logo"></div>
        </header>
        <main className="content">
          <section className="profile">
            <div className="profile__avatar-container">
              <div className="button button_action_pencil profile__edit-avatar"></div>
              <img className="profile__avatar" src={avatar} alt="Аватар"/>
            </div>
            <article className="profile__info">
              <div className="profile__info-top">
                <h1 className="profile__title">Жак-Ив Кусто</h1>
                <button type="button" className="button button_action_pencil profile__edit-button"></button>
              </div>
              <div className="profile__info-bottom">
                <p className="profile__subtitle">Исследователь океана</p>
              </div>
            </article>
            <button type="button" className="button button_action_cross profile__add-button"></button>
          </section>
          <ul className="elements">
          </ul>
        </main>
        <footer className="footer">
          <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
        </footer>
        <section className="popup page__popup-profile">
          <div className="popup__container">
            <button type="button" className="button button_action_cross popup__close-button"></button>
            <h2 className="popup__title">Редактировать профиль</h2>
            <form name="profile-form" className="popup__form" novalidate>
              <label className="popup__input-wrap">
                <input name="profile-name" id="profile-name" className="input popup__input input_state_initial" type="text" placeholder="Имя" required minlength="2" maxlength="40" />
                <span id="profile-name-error" className="popup__input-error"></span>
              </label>
              <label className="popup__input-wrap">
                <input name="profile-about" id="profile-about" className="input popup__input input_state_initial" type="text" placeholder="Профессия" required minlength="2" maxlength="200" />
                <span id="profile-about-error" className="popup__input-error"></span>
              </label>
              <button className="button popup__submit popup__submit_state_enable" type="submit">Сохранить</button>
            </form>
          </div>
        </section>
        <section className="popup page__popup-confirm">
          <div className="popup__container">
            <button type="button" className="button button_action_cross popup__close-button"></button>
            <h2 className="popup__title">Вы уверены?</h2>
            <form name="confirm-form" className="popup__form" novalidate>
              <button className="button popup__submit popup__submit_state_enable" type="submit">Да</button>
            </form>
          </div>
        </section>
        <section className="popup page__popup-avatar">
          <div className="popup__container">
            <button type="button" className="button button_action_cross popup__close-button"></button>
            <h2 className="popup__title">Обновить аватар</h2>
            <form name="avatar-form" className="popup__form" novalidate>
              <label className="popup__input-wrap">
                <input name="avatar-link" id="avatar-link" className="input popup__input input_state_initial" type="url" placeholder="Ссылка на фотографию" required />
                <span id="avatar-link-error" className="popup__input-error"></span>
              </label>
              <button className="button popup__submit popup__submit_state_enable" type="submit">Сохранить</button>
            </form>
          </div>
        </section>
        <section className="popup page__popup-element">
          <div className="popup__container">
            <button type="button" className="button button_action_cross popup__close-button"></button>
            <h2 className="popup__title">Новое место</h2>
            <form name="element-form" className="popup__form" novalidate>
              <label className="popup__input-wrap">
                <input name="element-title" id="element-title" className="input popup__input input_state_initial" type="text" placeholder="Название" required minlength="1" maxlength="30" />
                <span id="element-title-error" className="popup__input-error"></span>
              </label>
              <label className="popup__input-wrap">
                <input name="element-link" id="element-link" className="input popup__input input_state_initial" type="url" placeholder="Ссылка на картинку" required />
                <span id="element-link-error" className="popup__input-error"></span>
              </label>
              <button className="button popup__submit popup__submit_state_disable" type="submit" disabled>Создать</button>
            </form>
          </div>
        </section>
        <section className="popup page__popup-photo">
          <div className="popup__figure-container">
            <button type="button" className="button button_action_cross popup__close-button"></button>
            <figure className="popup__figure">
              <img className="popup__photo" src="./images/elbrus.png" alt="Эльбрус" />
              <figcaption className="popup__figcaption"></figcaption>
            </figure>
          </div>
        </section>
      </div>
    // </div>
  );
}

export default App;
