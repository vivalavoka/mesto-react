import React from 'react';

export default function PopupWithForm(props) {
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

    if (props.isOpen) {
      document.addEventListener('keyup', _handleEscClose);
    }

    return () => {
      document.removeEventListener('keyup', _handleEscClose);
    }
  });

  return (
    <section className={`popup page__popup-${props.name} ${props.isOpen ? 'popup_opened' : ''}`} onClick={_handleClickClose}>
      <div className="popup__container">
        <button type="button" className="button button_action_cross popup__close-button" onClick={props.onClose}></button>
        <h2 className="popup__title">{props.title}</h2>
        <form name={`${props.name}-form`} className="popup__form" noValidate>
          {props.children}
          <button className="button popup__submit popup__submit_state_enable">Сохранить</button>
        </form>
      </div>
    </section>
  );
}
