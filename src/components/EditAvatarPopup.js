import React from 'react';

import PopupWithForm from './PopupWithForm.js';

export default function EditAvatarPopup(props) {
  const avatarInput = React.useRef(null);
  const [inProcess, setInProcess] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setInProcess(true);

    props.onUpdateAvatar({
      avatar: avatarInput.current.value,
    }).then(() => {
      setInProcess(false);
    });
  }

  return (
    <PopupWithForm name="avatar" title="Обновить аватар" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <label className="popup__input-wrap">
        <input name="avatar-link" id="avatar-link" className="input popup__input input_state_initial" type="url" placeholder="Ссылка на фотографию" required ref={avatarInput}/>
        <span id="avatar-link-error" className="popup__input-error"></span>
      </label>
      <button className="button popup__submit popup__submit_state_enable" type="submit">{inProcess ? 'Сохранение...' : 'Сохранить'}</button>
    </PopupWithForm>
  )
}
