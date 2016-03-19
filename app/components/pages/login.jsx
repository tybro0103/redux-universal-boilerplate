import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as sessionsAx from '../../actions/sessions';



@connect()
export default class Login extends Component {



  /*
   *  UI EVENTS
   */

  onLoginClick() {
    const password = this.refs.passwordInput.value;
    this.props.dispatch(sessionsAx.login(password));
  }



  /*
   *  RENDERING
   */

  render() {
    return (
      <div className="home">
        <h2>Login</h2>
        <label htmlFor="password-input">Password</label>
        &nbsp;
        <input ref="passwordInput" id="password-input" type="password" />
        &nbsp;
        <button onClick={this.onLoginClick.bind(this)}>Login</button>
        <p>The password is "taco".</p>
      </div>
    );
  }

}
