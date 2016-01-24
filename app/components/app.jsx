import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

export default class App extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired
  };



  /*
   * RENDERING
   */

  render() {
    return (
      <div className="app">
        <h1>Redux Universal Boilerplate</h1>
        <ul>
          <li><IndexLink to="/">Home</IndexLink></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <div className="route-component">
          {this.props.children}
        </div>
      </div>
    );
  }

}
