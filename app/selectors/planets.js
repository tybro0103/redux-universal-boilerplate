import { createSelector } from 'reselect'



let SLX = {
  entities: state => state.entities.planets
};



/*
 *  PAGE - PLANETS INDEX
 */

SLX.planetsIndex = state => state.pages.planetsIndex;

SLX.planetsIndex.planets = createSelector(
  [SLX.entities, SLX.planetsIndex],
  (entities, page) => {
    return page.list.map(id => entities[id]);
  }
);



export default SLX;
