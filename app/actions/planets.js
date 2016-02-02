import planets from '../api-wrappers/planets';

export function loadPlanets() {
  return {
    type: 'PLANETS_LOAD',
    payload: { promise: planets.load() }
  };
};
