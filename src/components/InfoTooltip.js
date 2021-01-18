import React from 'react';

export default function InfoTooltip(props) {
  const {status, message} = props;

  return (
    <section className={`popup page__popup-photo ${status ? 'popup_opened' : ''}`} onClick={props.onClose}>
      <div className="popup__container">
        <button type="button" className="button button_action_cross popup__close-button"></button>
        <div className="popup__info-body">
          <span className={`popup__info-icon ${status === 'success' ? "popup__info-icon_success": "popup__info-icon_error"}`}></span>
          <p className="popup__info-message">{message}</p>
        </div>
      </div>
    </section>
  )
}
