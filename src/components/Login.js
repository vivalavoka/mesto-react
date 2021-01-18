import React from 'react';
import { withRouter } from 'react-router-dom';

import * as auth from '../utils/auth.js';
import {jwtKey} from '../utils/constants.js';

function Login(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleChange(e) {
    const {name, value} = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  }

  function handleSubmit(e){
    e.preventDefault()
    if (!email || !password){
      return;
    }
    auth.auth(password, email)
      .then(res => {
        if (res.token) {
          setEmail('');
          setPassword('');

          localStorage.setItem(jwtKey, res.token);
          props.handleLogin(true);
          props.history.push('/');
        } else {
          console.error('Что-то не так');
        }
      })
      .catch(err => {
        console.error(err);
      });
  }

  return(
    <div className="register">
      <p className="register__welcome">Вход</p>
      <form onSubmit={handleSubmit} className="register__form">
        <input id="email" name="email" type="email" className="input register__input input_state_initial input_theme_dark" value={email} onChange={handleChange} placeholder="Email"/>
        <input id="password" name="password" type="password" className="input register__input input_state_initial input_theme_dark" value={password} onChange={handleChange} placeholder="Пароль"/>
        <div className="register__button-container">
          <button type="submit" className="button register__link">Войти</button>
        </div>
      </form>
    </div>
  )
}

export default withRouter(Login);
