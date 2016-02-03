import { createSelector } from 'reselect'



export const slctPlanetEntities = state => state.entities.planets;
export const slctPlanetIndex = state => state.ui.planets.index;

export const slctIndexPlanets = createSelector(
  slctPlanetEntities,
  slctPlanetIndex,
  (entities, index) => {
    return index.map(id => entities[id]);
  }
);
