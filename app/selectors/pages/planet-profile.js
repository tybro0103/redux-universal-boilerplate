import { createSelector } from 'reselect'



/*
 *  PRIVATE
 */

const planetsEntities = state => state.entities.planets;



/*
 *  PUBLIC
 */

export const page = state => state.pages.planetProfile;

export const planet = createSelector(
  [planetsEntities, page],
  (entities, page) => {
    return entities[page.planetId];
  }
);
