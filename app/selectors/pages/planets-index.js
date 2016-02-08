import { createSelector } from 'reselect'



/*
 *  PRIVATE
 */

const planetsEntities = state => state.entities.planets;



/*
 *  PUBLIC
 */

export const page = state => state.pages.planetsIndex;

export const planets = createSelector(
  [planetsEntities, page],
  (entities, page) => {
    return page.planetIds.map(id => entities[id]);
  }
);
