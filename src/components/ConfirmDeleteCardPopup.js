import React from 'react';

import PopupWithForm from './PopupWithForm.js';

export default function ConfirmDeleteCardPopup(props) {
  const [inProcess, setInProcess] = React.useState(false);


  function handleSubmit(e) {
    e.preventDefault();

    setInProcess(true);

    props.onDeleteCard(props.card).then(() => {
      setInProcess(false);
    });
  }

  return (
    <PopupWithForm name="confirm" title="Вы уверены?" isOpen={!!props.card} onClose={props.onClose} onSubmit={handleSubmit}>
      <button className="button popup__submit popup__submit_state_enable" type="submit">{inProcess ? 'Подождите...' : 'Да'}</button>
    </PopupWithForm>
  )
}
