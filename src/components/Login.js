import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import * as auth from '../utils/auth.js';
import {jwtKey} from '../utils/constants.js';

// import './styles/Login.css';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(e){
    e.preventDefault()
    if (!this.state.email || !this.state.password){
      return;
    }
    const { password, email } = this.state;
    auth.auth(password, email)
      .then(res => {
        if (res.token) {
          this.setState({
            email: '',
            password: '',
          }, () => {
            localStorage.setItem(jwtKey, res.token);
            this.props.handleLogin(true);
            this.props.history.push('/');
          });
        } else {
          console.error('Что-то не так');
        }
      })
      .catch(err => {
        console.error(err);
      });
  }
  render(){
    return(
      <div className="login" style={{color: 'white'}}>
        <form onSubmit={this.handleSubmit} className="login__form">
          <label htmlFor="email">
            Почта:
          </label>
          <input id="email" required name="email" type="text" value={this.state.email} onChange={this.handleChange} />
          <label htmlFor="password">
            Пароль:
          </label>
          <input id="password" required name="password" type="password" value={this.state.password} onChange={this.handleChange} />
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
}

export default withRouter(Login);
