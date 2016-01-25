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
          <meta charSet="UTF-8" />
          <title>Redux Universal Boilerplate</title>
          <link rel="stylesheet" href="/app.css" />
        </head>
        <body>
          {this.props.children}
          <script src="/app.js" />
        </body>
      </html>
    );
  }

}
