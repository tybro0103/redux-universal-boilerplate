import peopleApi from '../api-wrappers/people';

export function loadPageIndex() {
  return {
    type: 'LOAD_PAGE_PEOPLE_INDEX',
    payload: {promise: peopleApi.load()}
  };
};
