import React, { Component, PropTypes } from 'react';

import history from '../../history';



export default class Link extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element.isRequired,
      PropTypes.string.isRequired
    ]),
    to: PropTypes.string.isRequired
  };



  /*
   *  UI EVENTS
   */

  onClick(e) {
    e.preventDefault();
    history.push(this.props.to);
  }



  /*
   *  RENDERING
   */

  render() {
    const {children, to} = this.props;

    return (
      <a href={to} onClick={this.onClick.bind(this)}>{children}</a>
    );
  }

};
