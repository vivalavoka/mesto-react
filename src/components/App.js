import React from 'react';
import {
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';

import CurrentUserContext from '../contexts/CurrentUserContext.js';
import ProtectedRoute from './ProtectedRoute';

import Header from './Header.js';
import Register from './Register.js';
import Login from './Login.js';
import Main from './Main.js';
import Footer from './Footer.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import ConfirmDeleteCardPopup from './ConfirmDeleteCardPopup.js';
import ImagePopup from './ImagePopup.js';
import InfoTooltip from './InfoTooltip.js';

import api from '../utils/api.js';
import { jwtKey } from '../utils/constants.js';
import * as auth from '../utils/auth.js';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      infoTooltip: {},
      currentUser: {},
      isEditAvatarPopupOpen: false,
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      cardToDelete: null,
      selectedCard: null,
      cards: [],
    };
    this.initialize = this.initialize.bind(this);
    this.setUserData = this.setUserData.bind(this);
    this.setCards = this.setCards.bind(this);
    this.handleUpdateUser = this.handleUpdateUser.bind(this);
    this.handleUpdateAvatar = this.handleUpdateAvatar.bind(this);
    this.handleAddPlaceSubmit = this.handleAddPlaceSubmit.bind(this);
    this.handleCardLike = this.handleCardLike.bind(this);
    this.handleCardDelete = this.handleCardDelete.bind(this);
    this.handleCardClick = this.handleCardClick.bind(this);
    this.handleEditAvatarClick = this.handleEditAvatarClick.bind(this);
    this.handleEditProfileClick = this.handleEditProfileClick.bind(this);
    this.handleAddPlaceClick = this.handleAddPlaceClick.bind(this);
    this.handleDeleteCardClick = this.handleDeleteCardClick.bind(this);
    this.handleClickClose = this.handleClickClose.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.setLoggedIn = this.setLoggedIn.bind(this);
    this.handleInfoTooltip = this.handleInfoTooltip.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.closeAllPopups = this.closeAllPopups.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.closeAllPopups();
    }
  }

  componentDidMount() {
    this.handleLogin();
    document.addEventListener('keyup', this._handleEscClose);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this._handleEscClose);
  }

  handleUpdateUser({name, about}) {
    return api.updateProfile(name, about)
      .then((newUser) => {
        this.setUserData(newUser);
        this.closeAllPopups();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleUpdateAvatar({avatar}) {
    return api.updateAvatar(avatar)
      .then((newUser) => {
        this.setUserData(newUser);
        this.closeAllPopups();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleAddPlaceSubmit({title, link}) {
    return api.addCard(title, link)
      .then((newCard) => {
        this.setCards([newCard, ...this.state.cards]);
        this.closeAllPopups();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleCardLike(card) {
    const isLiked = card.likes.some(({_id}) => _id === this.state.currentUser._id);

    return api.changeLikeCardStatus(card._id, !isLiked)
      .then(newCard => {
        const newCards = this.state.cards.map(c => c._id === card._id ? newCard : c);
        this.setCards(newCards);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleCardDelete(card) {
    return api.deleteCard(card._id)
      .then(() => {
        const newCards = this.state.cards.filter(c => c._id !== card._id);
        this.setCards(newCards);
        this.closeAllPopups();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleSignOut() {
    localStorage.removeItem(jwtKey);
    this.setLoggedIn(false);
    this.setUserData({});
    this.setCards([]);
    this.props.history.push('/sign-in');
  }

  setUserData(userData) {
    this.setState({
      currentUser: userData,
    });
  }

  setCards(cards) {
    this.setState({
      cards,
    });
  }

  handleCardClick(card) {
    this.setState({
      selectedCard: card
    });
  }

  handleEditAvatarClick(isEditAvatarPopupOpen) {
    this.setState({
      isEditAvatarPopupOpen,
    });
  }

  handleEditProfileClick(isEditProfilePopupOpen) {
    this.setState({
      isEditProfilePopupOpen,
    });
  }

  handleAddPlaceClick(isAddPlacePopupOpen) {
    this.setState({
      isAddPlacePopupOpen,
    });
  }

  handleDeleteCardClick(card) {
    this.setState({
      cardToDelete: card,
    });
  }

  setLoggedIn(loggedIn) {
    this.setState({
      loggedIn,
    });
  }

  initialize(data) {
    api.getProfile()
      .then((newUser) => {
        this.setUserData({
          email: data.email,
          ...newUser,
        });
      })
      .catch((err) => {
        console.error(err);
      });
    api.getInitialCards()
      .then((cards) => {
        this.setCards([...cards]);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleInfoTooltip(success, opened = true) {
    this.setState({
      infoTooltip: {
        opened,
        success,
      }
    });
  }

  handleClickClose(evt) {
    if (evt.target.classList.contains('popup__close-button')
      || evt.target.classList.contains('popup')) {
      this.closeAllPopups();
    }
  }

  closeAllPopups() {
    this.handleEditAvatarClick(false);
    this.handleEditProfileClick(false);
    this.handleAddPlaceClick(false);
    this.handleInfoTooltip(null, false);
    this.handleDeleteCardClick(null);
    this.handleCardClick(null);
  }

  handleLogin() {
    if (localStorage.getItem(jwtKey)) {
      const jwt = localStorage.getItem(jwtKey);
      auth.validate(jwt)
        .then(res => {
          if (res.data) {
            this.initialize(res.data);
            this.setLoggedIn(true);
            this.props.history.push('/');
          }
        })
        .catch(err => {
          console.error(err);
        });
    }
  }

  render() {
    return (
      <CurrentUserContext.Provider value={this.state.currentUser}>
        <div className="page__content">
          <Header onSignOut={this.handleSignOut} />
          <Switch>
            <Route path="/sign-up">
              <Register handleInfoTooltip={this.handleInfoTooltip}/>
            </Route>
            <Route path="/sign-in">
              <Login
                onLogin={this.handleLogin}
                handleInfoTooltip={this.handleInfoTooltip}
              />
            </Route>
            <ProtectedRoute
              path="/"
              component={Main}
              loggedIn={this.state.loggedIn}
              onEditAvatar={this.handleEditAvatarClick}
              onEditProfile={this.handleEditProfileClick}
              onAddPlace={this.handleAddPlaceClick}
              onDeleteCard={this.handleDeleteCardClick}
              onCardClick={this.handleCardClick}
              cards={this.state.cards}
              onCardLike={this.handleCardLike}
            />
          </Switch>
          <Footer />
          <EditAvatarPopup isOpen={this.state.isEditAvatarPopupOpen} onClose={this.handleClickClose} onUpdateAvatar={this.handleUpdateAvatar}/>
          <EditProfilePopup isOpen={this.state.isEditProfilePopupOpen} onClose={this.handleClickClose} onUpdateUser={this.handleUpdateUser}/>
          <AddPlacePopup isOpen={this.state.isAddPlacePopupOpen} onClose={this.handleClickClose} onAddPlace={this.handleAddPlaceSubmit}/>
          <ConfirmDeleteCardPopup card={this.state.cardToDelete} onClose={this.handleClickClose} onDeleteCard={this.handleCardDelete} />
          <ImagePopup card={this.state.selectedCard} onClose={this.handleClickClose} />
          <InfoTooltip opened={this.state.infoTooltip.opened} success={this.state.infoTooltip.success} onClose={this.handleClickClose} />
        </div>
      </CurrentUserContext.Provider>
    );
  }
}

export default withRouter(App);
