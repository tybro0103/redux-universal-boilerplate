import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Link } from 'react-router';

import SLX from '../../selectors/planets';



class PlanetsIndex extends Component {

  render() {
    let {planets} = this.props;

    return (
      <div>
        <h2>Planets Index</h2>
        <ul>
          {planets.map(planet => (
            <li key={planet.id}>
              <Link to={`/planets/${planet.id}`}>{planet.name}</Link>
            </li>
          ))}
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
