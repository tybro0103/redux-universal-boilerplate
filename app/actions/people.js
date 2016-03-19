import peopleApi from '../api-wrappers/people';

export function loadPageIndex() {
  return {
    type: 'LOAD_PAGE_PEOPLE_INDEX',
    promise: peopleApi.load()
  };
};

export function selectPerson(personId) {
  return {
    type: 'PEOPLE_INDEX_SELECT_PERSON',
    personId
  }
};
