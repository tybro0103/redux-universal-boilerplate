import React, { Component } from 'react';

import Link from './common/routing/link';
import CurrentPage from './common/routing/current-page';



export default class App extends Component {

  render() {
    return (
      <div className="app">
        <h1>Redux Universal Boilerplate</h1>
        <ul className="menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/people">People</Link></li>
          <li><Link to="/planets">Planets</Link></li>
          <li><Link to="/foo">Foo &gt; Home</Link></li>
        </ul>
        <div className="page-con">
          <CurrentPage />
        </div>
      </div>
    );
  }

}
