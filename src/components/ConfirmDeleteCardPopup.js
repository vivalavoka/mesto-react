import React from 'react';

import PopupWithForm from './PopupWithForm.js';

export default function ConfirmDeleteCardPopup(props) {
  function handleSubmit() {
    return props.onDeleteCard(props.card);
  }

  return (
    <PopupWithForm
      name="confirm"
      title="Вы уверены?"
      btnText="Да"
      btnTextProcessing="Подождите..."
      isOpen={!!props.card}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
    </PopupWithForm>
  )
}
