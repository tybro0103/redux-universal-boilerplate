## Redux Universal Boilerplate

Main goals of this project:

  + Serve as boilerplate for universal apps using React+Redux.
  + Develop some organization and conventions for such an app - particularly with the Redux parts and the tools involved.

This project does _not_ include Webpack, HMR, or inline styles.

Stack:

  + ES6/7 via Babel
  + Node & Express
  + React Router
  + React
  + Redux, React-Redux, Reselect, Redux-Promise-Middleware
  + Sass
  + Browserify



## Install and run

```bash
git clone git@github.com:tybro0103/redux-universal-boilerplate.git
cd redux-universal-boilerplate/
npm install -g nodemon
npm install
open http://localhost:3069/
```



## Organization, Conventions, and Styles

### The store

Getting the store's structure right is key. It's already been covered [here](http://rackt.org/redux/docs/basics/Reducers.html), but the main points are:

  + keep the business data separate from the UI state
  + keep the business data normalized

The entities are stored as `{id: object}` pairs. This makes it much easier to get or update an entity, as opposed to looping through an array until the right object is found.

Example:
```javascript
{
  pages: {
    browsePlanets: {
      personIds: [2, 3, 1],
      selectedPersonId: 3
    },
    home: {
      activeTab: 'contact'
    }
  },
  entities: {
    planets: {
      1: { id: 1, name: 'earth' },
      2: { id: 2, name: 'mars' },
      3: { id: 3, name: 'uranus' }
    },
    users: {
      1: { id: 1, username: 'tybro0103' }
    }
  },
  config: {
    isMobile: true,
    pollInterval: 3000
  },
  app: {
    currentUserId: 1, // null indicates no user
    activeModal: 'signIn'
  }
}
```

### Reducers

  + Reducers are organized around the structure of the store. To achieve the namespaced fashion of the store, multiple `combineReducers()` are nested.
  + Since actions are organized around components and reducers are not, many reducers will need to listen for actions from multiple actions modules.
  + All values in the store should have defaults (initial state from the reducers). Arrays especially should default to [] as not to break any `map()` calls that might happen before the data is loaded.

Example:

```javascript
// app/reducers/index.js
export default combineReducers({
  pages,
  entities,
  app,
  config
});

// app/reducers/entities/index.js
export default combineReducers({
  planets,
  people
});

// app/reducers/pages/index.js
export default combineReducers({
  planetsIndex,
  planetProfile,
  people
});

// app/reducers/pages/people.js
let initialState = {
  personIds: [],
  selectedPersonId: null
};
export default function(state=initialState, action) {
  switch(action.type) {
    // cases...
    default: return state;
  };
};

// app/reducers/entities/planets.js
export default function(state={}, action) {
  switch (action.type) {
    // cases...
    default: return state;
  }
};
```

### Selectors

  + Selectors are organized mostly around components - A module per page, modal, widget, etc. Some selectors have a more common/global scope such as settings, currentUser, etc.
  + When importing in a component, the whole module is imported (`* as`) with suffix "Slx" for brevity such as `planetProfileSlx` or `currentUserSlx`.
  + Rather than exporting a selector to be used in `connect()`, selector modules export individual items that a component needs. This way, it's obvious when looking at the component what data is being obtained from the store. Also, components will often need to use selectors from multiple modules such as `currentUserSlx` and `profilePageSlx`.

Example:

```javascript
// app/selectors/pages/people.js
const peopleEntities = state => state.entities.people;

export const page = state => state.pages.planetsIndex;

export const people = createSelector(
  [peopleEntities, page],
  (entities, page) => page.personIds.map(id => entities[id])
);

export const selectedPerson = createSelector(
  [peopleEntities, page],
  (entities, page) => entities[page.selectedPersonId]
);


// app/selectors/pages/planetProfile.js
const planetEntities = state => state.entities.planets;

export const page = state => state.pages.planetProfile;

export const planet = createSelector(
  [planetEntities, page],
  (entities, page) => entities[page.planetId]
);


// app/components/pages/planet-profile.jsx
import * as pageSlx from '../../selectors/pages/planet-profile';
import * as appSlx from '../../selectors/app';
//...
let selector = createSelector(
  pageSlx.planet, appSlx.currentUser,
  (planet, currentUser) => ({planet, currentUser})
);
export default connect(selector)(PlanetProfile);
```


### Actions

pending...



### Components

pending...



### Routers

pending...


