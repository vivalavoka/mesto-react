import React from 'react';

import PopupWithForm from './PopupWithForm.js';

export default function AddPlacePopup(props) {
  const [title, setTitle] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleTitleChange(evt) {
    setTitle(evt.target.value);
  }

  function handleLinkChange(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit() {
    return props.onAddPlace({
      title,
      link,
    });
  }

  return (
    <PopupWithForm name="element" title="Новое место" btnText="Создать" btnTextProcessing="Подождите..." isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <label className="popup__input-wrap">
        <input name="element-title" id="element-title" className="input popup__input input_theme_light input_state_initial" type="text" placeholder="Название" required minLength="1" maxLength="30" value={title} onChange={handleTitleChange}/>
        <span id="element-title-error" className="popup__input-error"></span>
      </label>
      <label className="popup__input-wrap">
        <input name="element-link" id="element-link" className="input popup__input input_theme_light input_state_initial" type="url" placeholder="Ссылка на картинку" required value={link} onChange={handleLinkChange}/>
        <span id="element-link-error" className="popup__input-error"></span>
      </label>
    </PopupWithForm>
  )
}
