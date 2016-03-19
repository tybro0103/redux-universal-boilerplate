import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import * as appSlx from '../../selectors/app';
import * as sessionsAx from '../../actions/sessions';
import Link from './routing/link';



const propsMap = createSelector(appSlx.signedIn, signedIn => ({signedIn}));

@connect(propsMap)
export default class Header extends Component {

  static propTypes = {
    signedIn: PropTypes.bool.isRequired
  };



  /*
   *  UI EVENTS
   */

  onLogoutClick(e) {
    e.preventDefault();
    this.props.dispatch(sessionsAx.logout());
  }



  /*
   *  RENDERING
   */

  render() {
    const {signedIn} = this.props;

    return (
      <div className="header">
        {signedIn
          ? <a href="#" onClick={this.onLogoutClick.bind(this)}>Logout</a>
          : <Link to="/login">Login</Link>
        }
        <h1>Redux Universal Boilerplate</h1>
      </div>
    );
  }

}
