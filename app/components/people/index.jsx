import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import peopleSlx from '../../selectors/people';



class PeopleIndex extends Component {

  /*
   * RENDERING
   */

  render() {
    let people = this.props.people;

    return (
      <div>
        <h2>People Index</h2>
        <ul>
          {people.map(person => (
            <li key={person.id}>{person.name}</li>
          ))}
        </ul>
      </div>
    );
  }

}

let selector = createSelector(
  peopleSlx.pageIndex.people,
  people => ({people})
);

export default connect(selector)(PeopleIndex);
