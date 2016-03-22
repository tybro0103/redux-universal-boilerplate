import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as sessionsAx from '../../actions/sessions';



@connect()
export default class Login extends Component {



  /*
   *  UI EVENTS
   */

  onLoginSubmit(e) {
    e.preventDefault();
    const password = this.refs.passwordInput.value;
    this.props.dispatch(sessionsAx.login(password));
  }



  /*
   *  RENDERING
   */

  render() {
    return (
      <form className="home" onSubmit={this.onLoginSubmit.bind(this)}>
        <h2>Login</h2>
        <label htmlFor="password-input">Password</label>
        &nbsp;
        <input ref="passwordInput" id="password-input" type="password" />
        &nbsp;
        <input type="submit" value="Login" />
        <p>The password is "taco".</p>
      </form>
    );
  }

}
