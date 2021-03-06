import React from 'react';

import CurrentUserContext from '../contexts/CurrentUserContext.js';

export default function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const {card, onCardClick, onCardLike, onDeleteCard} = props;

  function handleCardClick(e) {
    e.preventDefault();

    onCardClick(card);
  }

  function handleCardLike() {
    onCardLike(card);
  }

  function handleCardDelete() {
    onDeleteCard(card);
  }

  const _isOwner = currentUser._id === card.owner._id;
  const _isLiked = card.likes.some(({_id}) => _id === currentUser._id);

  return (
    <li className="element">
      <a className="element__photo-link" onClick={handleCardClick} href="/">
        <img className="element__photo" src={card.link} alt={card.name} />
      </a>
      <div className={`button button_action_trash element__delete ${!_isOwner && 'button_state_invisible'}`} onClick={handleCardDelete}></div>
      <div className="element__panel">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-wrapper" onClick={handleCardLike}>
          <div className={`button button_action_empty-heart element__like-btn ${_isLiked && 'button_action_fill-heart'}`}></div>
          <span className="element__like-count">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}
