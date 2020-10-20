import React from 'react';

import api from '../utils/api.js';

export default function Main(props) {
  const [userName, setName] = React.useState();
  const [userDescription, setDescription] = React.useState();
  const [userAvatar, setAvatar] = React.useState();

  React.useEffect(() => {
    api.getProfile()
      .then(data => {
        setName(data.name);
        setDescription(data.about);
        setAvatar(data.avatar);
      })
  });

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <div className="button button_action_pencil profile__edit-avatar" onClick={props.onEditAvatar}></div>
          <img className="profile__avatar" src={userAvatar} alt="Аватар" />
        </div>
        <article className="profile__info">
          <div className="profile__info-top">
            <h1 className="profile__title">{userName}</h1>
            <button type="button" className="button button_action_pencil profile__edit-button" onClick={props.onEditProfile}></button>
          </div>
          <div className="profile__info-bottom">
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </article>
        <button type="button" className="button button_action_cross profile__add-button" onClick={props.onAddPlace}></button>
      </section>
      <ul className="elements">
      </ul>
    </main>
  );
}
