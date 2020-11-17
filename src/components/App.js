import React from 'react';

import CurrentUserContext from '../contexts/CurrentUserContext.js';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import ConfirmDeleteCardPopup from './ConfirmDeleteCardPopup.js';
import ImagePopup from './ImagePopup.js';

import api from '../utils/api.js';

function App() {
  const [currentUser, setUserData] = React.useState({});
  const [isEditAvatarPopupOpen, setAvatarPopupOpened] = React.useState(false);
  const [isEditProfilePopupOpen, setProfilePopupOpened] = React.useState(false);
  const [isAddPlacePopupOpen, setPlacePopupOpened] = React.useState(false);
  const [cardToDelete, setCardToDelete] = React.useState(null);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialCards()
      .then((cards) => {
        setCards([...cards]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    api.getProfile()
      .then((newUser) => {
        setUserData(newUser)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleUpdateUser({name, about}) {
    return api.updateProfile(name, about)
      .then((newUser) => {
        setUserData(newUser);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateAvatar({avatar}) {
    return api.updateAvatar(avatar)
      .then((newUser) => {
        setUserData(newUser);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleAddPlaceSubmit({title, link}) {
    return api.addCard(title, link)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(({_id}) => _id === currentUser._id);

    return api.changeLikeCardStatus(card._id, !isLiked)
      .then(newCard => {
        const newCards = cards.map(c => c._id === card._id ? newCard : c);
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardDelete(card) {
    return api.deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter(c => c._id !== card._id);
        setCards(newCards);
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

  function handleDeleteCardClick(card) {
    setCardToDelete(card);
  }

  function closeAllPopups() {
    setAvatarPopupOpened(false);
    setProfilePopupOpened(false);
    setPlacePopupOpened(false);
    setSelectedCard(null);
    setCardToDelete(null);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__content">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onDeleteCard={handleDeleteCardClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
        />
        <Footer />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>
        <ConfirmDeleteCardPopup card={cardToDelete} onClose={closeAllPopups} onDeleteCard={handleCardDelete} />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
