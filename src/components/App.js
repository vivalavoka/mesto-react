import React from 'react';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {

  const [isEditAvatarPopupOpen, setAvatarPopupOpened] = React.useState(false);
  const [isEditProfilePopupOpen, setProfilePopupOpened] = React.useState(false);
  const [isAddPlacePopupOpen, setPlacePopupOpened] = React.useState(false);


  function handleEditAvatarClick() {
    setAvatarPopupOpened(true)
  }

  function handleEditProfileClick() {
    setProfilePopupOpened(true)
  }

  function handleAddPlaceClick() {
    setPlacePopupOpened(true);
  }

  function closeAllPopups() {
    setAvatarPopupOpened(false);
    setProfilePopupOpened(false);
    setPlacePopupOpened(false);
  }

  return (
    <div className="page__content">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
      />
      <Footer />
      <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <label className="popup__input-wrap">
          <input name="avatar-link" id="avatar-link" className="input popup__input input_state_initial" type="url" placeholder="Ссылка на фотографию" required />
          <span id="avatar-link-error" className="popup__input-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <label className="popup__input-wrap">
          <input name="profile-name" id="profile-name" className="input popup__input input_state_initial" type="text" placeholder="Имя" required minLength="2" maxLength="40" />
          <span id="profile-name-error" className="popup__input-error"></span>
        </label>
        <label className="popup__input-wrap">
          <input name="profile-about" id="profile-about" className="input popup__input input_state_initial" type="text" placeholder="Профессия" required minLength="2" maxLength="200" />
          <span id="profile-about-error" className="popup__input-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm name="element" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <label className="popup__input-wrap">
          <input name="element-title" id="element-title" className="input popup__input input_state_initial" type="text" placeholder="Название" required minLength="1" maxLength="30" />
          <span id="element-title-error" className="popup__input-error"></span>
        </label>
        <label className="popup__input-wrap">
          <input name="element-link" id="element-link" className="input popup__input input_state_initial" type="url" placeholder="Ссылка на картинку" required />
          <span id="element-link-error" className="popup__input-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm name="confirm" title="Вы уверены?"/>
      <ImagePopup />
    </div>
  );
}

export default App;
