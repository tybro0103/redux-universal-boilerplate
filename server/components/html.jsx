import React, { Component, PropTypes } from 'react';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';

export default class Html extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
    serverState: PropTypes.object.isRequired
  };



  /*
   * RENDERING
   */

  render() {
    const {children, serverState} = this.props;
    const serializedState = serialize(serverState);
    const stateHtml = `window.SERVER_STATE=${serializedState};`;
    const compHtml = renderToString(children);

    return (
      <html>
        <head>
          <meta charSet="UTF-8" />
          <title>Redux Universal Boilerplate</title>
          <link rel="stylesheet" href="/app.css" />
        </head>
        <body>
          <div id="app-root" dangerouslySetInnerHTML={{__html: compHtml}} />
          <script dangerouslySetInnerHTML={{__html: stateHtml}} />
          <script src="/app.js" />
        </body>
      </html>
    );
  }

}
