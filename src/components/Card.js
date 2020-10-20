import React from 'react';

export default function Card(props) {
  const {card, onCardClick} = props;

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="element">
      <a className="element__photo-link" onClick={handleClick}>
        <img className="element__photo" src={card.link} alt={card.name} />
      </a>
      <div className="button button_action_trash element__delete"></div>
      <div className="element__panel">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-wrapper">
          <div className="button button_action_empty-heart element__like-btn"></div>
          <span className="element__like-count">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}
