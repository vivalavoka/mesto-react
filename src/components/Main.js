import React from 'react';

import CurrentUserContext from '../contexts/CurrentUserContext.js';

import Card from './Card.js';

import api from '../utils/api.js';

export default function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialCards()
      .then((cards) => {
        setCards([...cards]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(({_id}) => _id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked)
      .then(newCard => {
        const newCards = cards.map(c => c._id === card._id ? newCard : c);
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter(c => c._id !== card._id);
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <div className="button button_action_pencil profile__edit-avatar" onClick={props.onEditAvatar}></div>
          <img className="profile__avatar" src={currentUser.avatar} alt="Аватар" />
        </div>
        <article className="profile__info">
          <div className="profile__info-top">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button type="button" className="button button_action_pencil profile__edit-button" onClick={props.onEditProfile}></button>
          </div>
          <div className="profile__info-bottom">
            <p className="profile__subtitle">{currentUser.about}</p>
          </div>
        </article>
        <button type="button" className="button button_action_cross profile__add-button" onClick={props.onAddPlace}></button>
      </section>
      <ul className="elements">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={props.onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>
        ))}
      </ul>
    </main>
  );
}
