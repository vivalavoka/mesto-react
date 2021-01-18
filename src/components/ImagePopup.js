import React from 'react';

export default function ImagePopup(props) {
  const {card} = props;

  return card && (
    <section className={`popup page__popup-photo ${card ? 'popup_opened' : ''} popup_smooth`} onClick={props.onClose}>
      <div className="popup__figure-container">
        <button type="button" className="button button_action_cross popup__close-button"></button>
        <figure className="popup__figure">
          <img className="popup__photo" src={card.link} alt={card.name} />
          <figcaption className="popup__figcaption">{card.name}</figcaption>
        </figure>
      </div>
    </section>
  );
}
