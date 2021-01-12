import React from 'react';
import { Link, withRouter } from 'react-router-dom';

// import './styles/Register.css';

import * as auth from '../utils/auth.js';

class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      message: '',
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
    if (this.state.password === this.state.confirmPassword){
      const {password, email } = this.state;
      auth.register(password, email)
        .then(res => {
          if (res) {
            this.setState({
              message: '',
            }, () => {
              this.props.history.push('/sign-in');
            });
          } else {
            this.setState({
              message: 'Что-то не так'
            })
          }
        })
        .catch(err => {
          this.setState({
            message: err
          })
        })
    }
  }
  render(){
    return(
      <div className="register" style={{color: 'white'}}>
        <p className="register__welcome">
          Please register.
        </p>
        <form onSubmit={this.handleSubmit} className="register__form">
          <label htmlFor="email">
            Email:
          </label>
          <input id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
          <label htmlFor="password">
            Password:
          </label>
          <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange} />
          <label htmlFor="confirmPassword">
            Confirm password:
          </label>
          <input id="confirmPassword" name="confirmPassword" type="password" value={this.state.confirmPassword} onChange={this.handleChange} />
            <div className="register__button-container">
              <button type="submit" className="register__link">Sign up</button>
            </div>
        </form>
        <h2>{this.state.message}</h2>
        <div className="register__signin">
          <p>Already a member?</p>
          <Link to="/sign-in" className="register__login-link">Log in here</Link>
        </div>
      </div>
    )
  }
}

export default withRouter(Register);
