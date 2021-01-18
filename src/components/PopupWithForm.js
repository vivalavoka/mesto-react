import React from 'react';

export default function PopupWithForm(props) {
  const [inProcess, setInProcess] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setInProcess(true);

    props.onSubmit().then(() => {
      setInProcess(false);
    });
  }

  return (
    <section className={`popup page__popup-${props.name} ${props.isOpen ? 'popup_opened' : ''} popup_smooth`} onClick={props.onClose}>
      <div className="popup__container">
        <button type="button" className="button button_action_cross popup__close-button" onClick={props.onClose}></button>
        <h2 className="popup__title">{props.title}</h2>
        <form name={`${props.name}-form`} className="popup__form" noValidate onSubmit={handleSubmit}>
          {props.children}
          <button className="button popup__submit popup__submit_state_enable" type="submit">
            {inProcess ? props.btnTextProcessing : props.btnText}
          </button>
        </form>
      </div>
    </section>
  );
}
