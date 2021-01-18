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
          props.history.push('/sign-in');
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  return(
    <div className="register">
      <p className="register__welcome">Регистрация</p>
      <form onSubmit={handleSubmit} className="register__form">
        <input id="email" name="email" type="email" className="input register__input input_state_initial input_theme_dark" value={email} onChange={handleChange} placeholder="Email"/>
        <input id="password" name="password" type="password" className="input register__input input_state_initial input_theme_dark" value={password} onChange={handleChange} placeholder="Пароль"/>
        <div className="register__button-container">
          <button type="submit" className="button register__link">Зарегистрироваться</button>
          <div className="register__signin">
            <p>Уже зарегистрированы? <Link to="/sign-in" className="register__login-link">Войти</Link></p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default withRouter(Register);
