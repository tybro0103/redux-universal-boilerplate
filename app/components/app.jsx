import React, { Component, PropTypes } from 'react';

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
        <ul className="menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/people">People</Link></li>
          <li><Link to="/planets">Planets</Link></li>
        </ul>
        <div className="route-component">
          {this.props.children}
        </div>
      </div>
    );
  }

}



// TODO: make one of these that works with history
class Link extends Component {
  render() {
    const {to, children} = this.props;
    return (
      <a href={to}>{children}</a>
    );
  }
}
