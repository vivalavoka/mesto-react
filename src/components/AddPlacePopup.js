import React from 'react';

import PopupWithForm from './PopupWithForm.js';

export default function AddPlacePopup(props) {
  const [title, setTitle] = React.useState('');
  const [link, setLink] = React.useState('');
  const [inProcess, setInProcess] = React.useState(false);

  function handleTitleChange(evt) {
    setTitle(evt.target.value);
  }

  function handleLinkChange(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setInProcess(true);

    props.onAddPlace({
      title,
      link,
    }).then(() => {
      setInProcess(false);
    });
  }

  return (
    <PopupWithForm name="element" title="Новое место" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <label className="popup__input-wrap">
        <input name="element-title" id="element-title" className="input popup__input input_state_initial" type="text" placeholder="Название" required minLength="1" maxLength="30" value={title} onChange={handleTitleChange}/>
        <span id="element-title-error" className="popup__input-error"></span>
      </label>
      <label className="popup__input-wrap">
        <input name="element-link" id="element-link" className="input popup__input input_state_initial" type="url" placeholder="Ссылка на картинку" required value={link} onChange={handleLinkChange}/>
        <span id="element-link-error" className="popup__input-error"></span>
      </label>
      <button className="button popup__submit popup__submit_state_enable" type="submit">{inProcess ? 'Подождите...' : 'Создать'}</button>
    </PopupWithForm>
  )
}
