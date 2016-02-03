import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { loadPlanets } from '../../actions/planets';
import { slctIndexPlanets } from '../../selectors/planets';



class PlanetsIndex extends Component {



  /*
   *  UI EVENTS
   */

  onLoadClick() {
    console.log('load!');
    this.props.dispatch(loadPlanets());
  }



  /*
   *  RENDERING
   */

  render() {
    let {planets} = this.props;

    return (
      <div className="home">
        <h2>Planets Index</h2>
        <button onClick={this.onLoadClick.bind(this)}>Load</button>
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
  slctIndexPlanets,
  planets => ({planets})
);

export default connect(selector)(PlanetsIndex);
