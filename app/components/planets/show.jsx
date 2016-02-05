import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { map } from 'lodash';

import planetsSLX from '../../selectors/planets';



class PlanetsShow extends Component {

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



let selector = createSelector(
  planetsSLX.planetsShow.planet,
  planet => ({planet})
);

export default connect(selector)(PlanetsShow);
