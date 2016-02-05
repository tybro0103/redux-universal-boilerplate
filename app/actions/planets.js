import planets from '../api-wrappers/planets';

export function loadPageIndex() {
  return {
    type: 'LOAD_PAGE_PLANETS_INDEX',
    payload: { promise: planets.load() }
  };
};

export function loadPageShow(planetId) {
  return {
    type: 'LOAD_PAGE_PLANETS_SHOW',
    payload: { promise: planets.find(planetId) }
  };
};
