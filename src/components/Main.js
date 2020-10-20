import React from 'react';

import api from '../utils/api.js';

export default function Main(props) {
  const [userName, setName] = React.useState();
  const [userDescription, setDescription] = React.useState();
  const [userAvatar, setAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialCards()
      .then(items => {
        const sortedCards = items.sort((cardA, cardB) => new Date(cardA.createdAt) - new Date(cardB.createdAt));
        setCards(sortedCards);
      })
  });

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
        {cards.map((card) => (
          <li class="element">
            <a class="element__photo-link">
              <img class="element__photo" src={card.link} alt={card.name} />
            </a>
            <div class="button button_action_trash element__delete"></div>
            <div class="element__panel">
              <h2 class="element__title">{card.name}</h2>
              <div class="element__like-wrapper">
                <div class="button button_action_empty-heart element__like-btn"></div>
                <span class="element__like-count">{card.likes.length}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
