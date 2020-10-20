import React from 'react';

export default function ImagePopup(props) {
  const {card} = props;

  function _handleClickClose(evt) {
    if (evt.target.classList.contains('popup__close-button')
      || evt.target.classList.contains('popup')) {
      props.onClose();
    }
  }

  React.useEffect(() => {
    function _handleEscClose(evt) {
      if (evt.key === 'Escape') {
        props.onClose();
      }
    }

    if (card) {
      document.addEventListener('keyup', _handleEscClose);
    }

    return () => {
      document.removeEventListener('keyup', _handleEscClose);
    }
  });

  return card && (
    <section className={`popup page__popup-photo ${card ? 'popup_opened' : ''}`} onClick={_handleClickClose}>
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
