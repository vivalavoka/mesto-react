import React from 'react';

import PopupWithForm from './PopupWithForm.js';

export default function EditAvatarPopup(props) {
  const avatarInput = React.useRef(null);

  function handleSubmit() {
    return props.onUpdateAvatar({
      avatar: avatarInput.current.value,
    });
  }

  return (
    <PopupWithForm name="avatar" title="Обновить аватар" btnText="Сохранить" btnTextProcessing="Сохранение..." isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <label className="popup__input-wrap">
        <input name="avatar-link" id="avatar-link" className="input popup__input input_theme_light input_state_initial" type="url" placeholder="Ссылка на фотографию" required ref={avatarInput}/>
        <span id="avatar-link-error" className="popup__input-error"></span>
      </label>
    </PopupWithForm>
  )
}
