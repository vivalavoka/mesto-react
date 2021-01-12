
export const BASE_URL = 'https://auth.nomoreparties.co';

const _fetch = (url, options) => {
  return fetch(url, options)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`${res.statusText}: ${res.status}`);
    });
}

export const validate = (token) => {
  return _fetch(`${BASE_URL}/user/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
};

export const register = (password, email) => {
  return _fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({password, email})
  })
};

export const auth = (password, email) => {
  return _fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({password, email})
  })
};
