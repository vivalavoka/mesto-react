import React from 'react';

export default function Card(props) {
  const {card} = props;

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li class="element">
      <a class="element__photo-link" onClick={handleClick}>
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
  );
}
