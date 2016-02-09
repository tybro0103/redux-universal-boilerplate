import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { map } from 'lodash';

import * as pageSlx from '../../selectors/pages/planet-profile';


let selector = createSelector(
  pageSlx.planet,
  planet => ({planet})
);

@connect(selector)
export default class PlanetsShow extends Component {

  render() {
    let planet = this.props.planet;

    return (
      <div>
        <h2>Planet - {planet.name}</h2>
        <table><tbody>
          {map(planet, (val, key) => <tr key={key}>
            <td>{key}</td>
            <td>{val}</td>
          </tr>)}
        </tbody></table>
      </div>
    );
  }

}
