import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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
    <div className="login" style={{color: 'white'}}>
      <form onSubmit={handleSubmit} className="login__form">
        <label htmlFor="email">
          Почта:
        </label>
        <input id="email" required name="email" type="text" value={email} onChange={handleChange} />
        <label htmlFor="password">
          Пароль:
        </label>
        <input id="password" required name="password" type="password" value={password} onChange={handleChange} />
          <div className="login__button-container">
            <button type="submit" className="login__link">Войти</button>
          </div>
      </form>

      <div className="login__signup">
        <p>Ещё не зарегистрированы?</p>
        <Link to="/sign-up" className="signup__link">Зарегистрироваться</Link>
      </div>
    </div>
  )
}

export default withRouter(Login);
