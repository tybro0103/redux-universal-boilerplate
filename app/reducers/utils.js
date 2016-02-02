import _ from 'lodash';

// takes an array like [{n: 'a', id: 1}, {n: 'b', id: 2} {n: 'c', id: 3}]
// returns object like {1: {n: 'a', id: 1}, 2: {n: 'b', id: 2} 3: {n: 'c', id: 3}}
// useful for normalizing data to put in the store
export function arrayToIdObjectPairs(array) {
  let pairs = _.map(array, item => [item.id, item]);
  return _.fromPairs(pairs);
};
