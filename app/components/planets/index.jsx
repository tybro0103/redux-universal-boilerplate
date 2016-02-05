import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import SLX from '../../selectors/planets';



class PlanetsIndex extends Component {

  render() {
    let {planets} = this.props;

    return (
      <div className="home">
        <h2>Planets Index</h2>
        <ul>
          {planets.map(planet => <li key={planet.id}>
            {planet.name}
          </li>)}
        </ul>
      </div>
    );
  }

}



let selector = createSelector(
  SLX.planetsIndex.planets,
  planets => ({planets})
);

export default connect(selector)(PlanetsIndex);
