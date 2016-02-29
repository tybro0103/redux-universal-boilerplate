import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import * as routingSlx from '../../../selectors/routing';
import Home from '../../pages/home';
import People from '../../pages/people';
import PlanetsIndex from '../../pages/planets-index';
import PlanetProfile from '../../pages/planet-profile';



const propsMap = createSelector(routingSlx.page, page => ({page}));

@connect(propsMap)
export default class CurrentPage extends Component {

  static propTypes = {
    page: PropTypes.string
  };

  render() {
    const {page} = this.props;
    return {
      'home': <Home />,
      'people': <People />,
      'planets-index': <PlanetsIndex />,
      'planet-profile': <PlanetProfile />
    }[page];
  }

}
