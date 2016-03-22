import peopleApi from '../api-wrappers/people';

export function loadPageIndex(signedIn) {
  return {
    type: 'LOAD_PAGE_PEOPLE_INDEX',
    promise: peopleApi.load(signedIn)
  };
};

export function selectPerson(personId) {
  return {
    type: 'PEOPLE_INDEX_SELECT_PERSON',
    personId
  }
};
