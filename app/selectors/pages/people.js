import { createSelector } from 'reselect';



/*
 *  PRIVATE
 */

const peopleEntities = state => state.entities.people;



/*
 *  PUBLIC
 */

export const page = state => state.pages.people;

// provides array of person objects
export const people = createSelector(
  [peopleEntities, page],
  (entities, page) => {
    return page.personIds.map(id => entities[id]);
  }
);

// provides the selected person object
export const selectedPerson = createSelector(
  [peopleEntities, page],
  (entities, page) => {
    return entities[page.selectedPersonId];
  }
);
