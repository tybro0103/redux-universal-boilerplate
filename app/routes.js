import * as main from './route-handlers/main';
import * as people from './route-handlers/people';
import * as planets from './route-handlers/planets';

import Home from './components/pages/home';
import People from './components/pages/people';
import PlanetsIndex from './components/pages/planets-index';
import PlanetProfile from './components/pages/planet-profile';

export default {
  path: '/',
  handler: main.home,
  component: Home,
  childRoutes: [
    {
      path: '/foo',
      handler: main.foo
    },
    {
      path: '/people',
      handler: people.index,
      component: People
    },
    {
      path: '/planets',
      handler: planets.index,
      component: PlanetsIndex,
      childRoutes: [
        {
          path: '/planets/:planetId',
          handler: planets.profile,
          component: PlanetProfile,
        }
      ]
    }
  ]
}

