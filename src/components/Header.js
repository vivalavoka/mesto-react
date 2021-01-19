import React from "react";
import { Switch, Link, Route, withRouter } from "react-router-dom";

import CurrentUserContext from '../contexts/CurrentUserContext.js';

function Header(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <header className="header">
      <div className="logo header__logo"></div>
      <div className="header__panel">
        <Switch>
          <Route path="/sign-up">
            <Link to="/sign-in" className="header__link">Войти</Link>
          </Route>
          <Route path="/sign-in">
            <Link to="/sign-up" className="header__link">Зарегистрироваться</Link>
          </Route>
          <Route path="/">
            <span className="header__email">{currentUser.email}</span>
            <button className="button header__logout" onClick={props.onSignOut}>Выйти</button>
          </Route>
        </Switch>
      </div>
    </header>
  );
}

export default withRouter(Header);
