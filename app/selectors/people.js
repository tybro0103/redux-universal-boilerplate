import { createSelector } from 'reselect';



let SLX = {
  entities: state => state.entities.people
};



/*
 *  PAGE - INDEX
 */

SLX.pageIndex = state => state.pages.peopleIndex;

SLX.pageIndex.people = createSelector(
  [SLX.entities, SLX.pageIndex],
  (entities, page) => {
    return page.personIds.map(id => entities[id]);
  }
);



export default SLX;
