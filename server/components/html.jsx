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
          <div id="app-main">
            {this.props.children}
          </div>
          <script src="/app.js" />
        </body>
      </html>
    );
  }

}
