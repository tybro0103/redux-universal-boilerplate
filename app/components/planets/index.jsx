import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadPlanets } from '../../actions/planets';



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
    return (
      <div className="home">
        <h2>Planets Index</h2>

        <button onClick={this.onLoadClick.bind(this)}>Load</button>

      </div>
    );
  }

}

export default connect()(PlanetsIndex);
