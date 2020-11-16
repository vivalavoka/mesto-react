import React from 'react';

import CurrentUserContext from '../contexts/CurrentUserContext.js';
import PopupWithForm from './PopupWithForm.js';

export default function EditProfilePopup(props) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  const currentUser = React.useContext(CurrentUserContext);
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleDescriptionChange(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm name="profile" title="Редактировать профиль" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <label className="popup__input-wrap">
        <input name="profile-name" id="profile-name" className="input popup__input input_state_initial" type="text" placeholder="Имя" required minLength="2" maxLength="40" value={name} onChange={handleNameChange}/>
        <span id="profile-name-error" className="popup__input-error"></span>
      </label>
      <label className="popup__input-wrap">
        <input name="profile-about" id="profile-about" className="input popup__input input_state_initial" type="text" placeholder="Профессия" required minLength="2" maxLength="200" value={description} onChange={handleDescriptionChange}/>
        <span id="profile-about-error" className="popup__input-error"></span>
      </label>
    </PopupWithForm>
  )
}
