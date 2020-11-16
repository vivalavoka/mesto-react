import {
  cohortId,
  authToken,
} from './constants.js';

class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _fetch(url, options) {
    return fetch(url, options)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`${res.statusText}: ${res.status}`);
      });
  }

  getProfile() {
    return this._fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    });
  }

  updateProfile(name, about) {
    return this._fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        ...this._headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, about})
    });
  }

  updateAvatar(avatar) {
    return this._fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        ...this._headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({avatar})
    });
  }

  getInitialCards() {
    return this._fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    });
  }

  addCard(name, link) {
    return this._fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: {
        ...this._headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, link})
    });
  }

  deleteCard(cardId) {
    return this._fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    });
  }

  changeLikeCardStatus(cardId, liked) {
    return this._fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: liked ? 'PUT' : 'DELETE',
      headers: this._headers,
    });
  }
}

export default new Api({
  baseUrl: `https://mesto.nomoreparties.co/v1/${cohortId}`,
  headers: {
    authorization: authToken,
  }
});
