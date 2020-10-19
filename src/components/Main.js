import React from 'react';
import avatar from '../images/avatar.png';

function handleEditAvatarClick() {
  
}

function handleEditProfileClick() {

}

function handleAddPlaceClick() {
  const addButton = document.querySelector('.profile__add-button');

  addButton.addEventListener('click', evt => {
  });
}

export default function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <div className="button button_action_pencil profile__edit-avatar"></div>
          <img className="profile__avatar" src={avatar} alt="Аватар" onClick={handleEditAvatarClick} />
        </div>
        <article className="profile__info">
          <div className="profile__info-top">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button type="button" className="button button_action_pencil profile__edit-button" onClick={handleEditProfileClick}></button>
          </div>
          <div className="profile__info-bottom">
            <p className="profile__subtitle">Исследователь океана</p>
          </div>
        </article>
        <button type="button" className="button button_action_cross profile__add-button" onClick={handleAddPlaceClick}></button>
      </section>
      <ul className="elements">
      </ul>
    </main>
  );
}
