import React from 'react';
import avatar from '../images/avatar.png';

export default function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <div className="button button_action_pencil profile__edit-avatar" onClick={props.onEditAvatar}></div>
          <img className="profile__avatar" src={avatar} alt="Аватар" />
        </div>
        <article className="profile__info">
          <div className="profile__info-top">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button type="button" className="button button_action_pencil profile__edit-button" onClick={props.onEditProfile}></button>
          </div>
          <div className="profile__info-bottom">
            <p className="profile__subtitle">Исследователь океана</p>
          </div>
        </article>
        <button type="button" className="button button_action_cross profile__add-button" onClick={props.onAddPlace}></button>
      </section>
      <ul className="elements">
      </ul>
    </main>
  );
}
