import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import * as auth from '../utils/auth.js';

function Register(props) {
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

  function handleSubmit(e) {
    e.preventDefault();
    auth.register(password, email)
      .then(res => {
        if (res) {
          props.handleInfoTooltip(true);
          props.history.push('/sign-in');
        }
      })
      .catch(err => {
        console.error(err);
        props.handleInfoTooltip(false);
      });
  }

  return(
    <div className="sign">
      <p className="sign__welcome">Регистрация</p>
      <form onSubmit={handleSubmit} className="sign__form">
        <input id="email" name="email" type="email" className="input sign__input input_state_initial input_theme_dark" value={email} onChange={handleChange} placeholder="Email"/>
        <input id="password" name="password" type="password" className="input sign__input input_state_initial input_theme_dark" value={password} onChange={handleChange} placeholder="Пароль"/>
        <div className="sign__button-container">
          <button type="submit" className="button sign__link">Зарегистрироваться</button>
          <div className="sign__signin">
            <p>Уже зарегистрированы? <Link to="/sign-in" className="sign__login-link">Войти</Link></p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default withRouter(Register);
