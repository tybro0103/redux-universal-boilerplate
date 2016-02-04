import React, { Component, PropTypes } from 'react';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';

export default class Html extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
    store: PropTypes.object.isRequired
  };



  /*
   * RENDERING
   */

  render() {
    let {children, store} = this.props;
    let __html = renderToString(children);
    let __data = serialize(store.getState());

    return (
      <html>
        <head>
          <meta charSet="UTF-8" />
          <title>Redux Universal Boilerplate</title>
          <link rel="stylesheet" href="/app.css" />
        </head>
        <body>
          <div id="app-root" dangerouslySetInnerHTML={{ __html }} />
          <script dangerouslySetInnerHTML={{__html: `window.__data=${__data};`}} />
          <script src="/app.js" />
        </body>
      </html>
    );
  }

}
