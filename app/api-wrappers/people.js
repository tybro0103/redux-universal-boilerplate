import apiClient from '../api-client';

export default {

  load: () => {
    return apiClient.get('/people')
      .then(res => res.data);
  },

  find: (personId) => {
    return apiClient.get(`/people/${personId}`)
      .then(res => res.data);
  } 

};
