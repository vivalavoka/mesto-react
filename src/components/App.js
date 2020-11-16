import React from 'react';

import CurrentUserContext from '../contexts/CurrentUserContext.js';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import EditProfilePopup from './EditProfilePopup.js';
import ImagePopup from './ImagePopup.js';

import api from '../utils/api.js';

function App() {
  const [currentUser, setUserData] = React.useState({});
  const [isEditAvatarPopupOpen, setAvatarPopupOpened] = React.useState(false);
  const [isEditProfilePopupOpen, setProfilePopupOpened] = React.useState(false);
  const [isAddPlacePopupOpen, setPlacePopupOpened] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  React.useEffect(() => {
    api.getProfile()
      .then(({_id, name, about, avatar}) => {
        setUserData({_id, name, about, avatar})
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleUpdateUser({name, about}) {
    api.updateProfile(name, about)
      .then(({_id, name, about, avatar}) => {
        setUserData({_id, name, about, avatar});
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setAvatarPopupOpened(true);
  }

  function handleEditProfileClick() {
    setProfilePopupOpened(true);
  }

  function handleAddPlaceClick() {
    setPlacePopupOpened(true);
  }

  function closeAllPopups() {
    setAvatarPopupOpened(false);
    setProfilePopupOpened(false);
    setPlacePopupOpened(false);
    setSelectedCard(null);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__content">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <label className="popup__input-wrap">
            <input name="avatar-link" id="avatar-link" className="input popup__input input_state_initial" type="url" placeholder="Ссылка на фотографию" required />
            <span id="avatar-link-error" className="popup__input-error"></span>
          </label>
        </PopupWithForm>
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
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
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
