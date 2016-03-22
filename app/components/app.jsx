import React, { Component } from 'react';

import Header from './common/header';
import Link from './routing/link';
import CurrentPage from './routing/current-page';



export default class App extends Component {

  render() {
    return (
      <div className="app">
        <Header />
        <ul className="menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/people">People (auth)</Link></li>
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
