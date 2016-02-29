import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import * as routingSlx from '../selectors/routing';
import Home from './pages/home';
import People from './pages/people';
import PlanetsIndex from './pages/planets-index';
import PlanetProfile from './pages/planet-profile';
import Link from './common/routing/link';

const propsMap = createSelector(routingSlx.page, page => ({page}));

@connect(propsMap)
export default class App extends Component {

  static propTypes = {
    page: PropTypes.string
  };



  /*
   * RENDERING
   */

  renderPage() {
    const {page} = this.props;
    return {
      'home': <Home />,
      'people': <People />,
      'planets-index': <PlanetsIndex />,
      'planet-profile': <PlanetProfile />
    }[page];
  }

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
          {this.renderPage()}
        </div>
      </div>
    );
  }

}
