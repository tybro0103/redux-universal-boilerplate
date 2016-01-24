import React, { Component, PropTypes } from 'react';

export default class Html extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired
  };



  /*
   * RENDERING
   */

  render() {
    return (
      <html>
        <head>
          <meta charset="UTF-8" />
          <title>Redux Universal Boilerplate</title>
        </head>
        <body>
          {this.props.children}
        </body>
      </html>
    );
  }

}
