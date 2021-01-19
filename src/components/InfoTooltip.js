import React from 'react';

export default function InfoTooltip(props) {
  const {opened, success} = props;

  return (
    <section className={`popup page__popup-photo ${opened ? 'popup_opened' : ''}`} onClick={props.onClose}>
      <div className="popup__container">
        <button type="button" className="button button_action_cross popup__close-button"></button>
        <div className="popup__info-body">
          <span className={`popup__info-icon ${success ? "popup__info-icon_success": "popup__info-icon_error"}`}></span>
          <p className="popup__info-message">{success ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}</p>
        </div>
      </div>
    </section>
  )
}
