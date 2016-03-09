import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import * as pageSlx from '../../selectors/pages/people';
import * as peopleAx from '../../actions/people';


const selector = createSelector(
  pageSlx.people,
  pageSlx.selectedPerson,
  (people, selectedPerson) => (
    {people, selectedPerson}
  )
);

@connect(selector)
export default class PeopleIndex extends Component {

  /*
   *  UI EVENTS
   */

  onPersonClick(personId, e) {
    e.preventDefault();
    this.props.dispatch(peopleAx.selectPerson(personId));
  }



  /*
   *  RENDERING
   */

  render() {
    const {people, selectedPerson} = this.props;

    return (
      <div>
        <h2>People Index</h2>
        <ul>
          {people.map(person => (
            <li key={person.id}>
              <a onClick={this.onPersonClick.bind(this, person.id)} href="#">{person.name}</a>
            </li>
          ))}
        </ul>
        {selectedPerson &&
          <h4>Selected: {selectedPerson.name}</h4>
        }
      </div>
    );
  }

}
