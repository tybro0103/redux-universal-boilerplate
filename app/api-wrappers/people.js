import apiClient from '../api-client';

export default {

  load: (signedIn=false) => {
    return apiClient.get('/people', {headers: {'X-Signed-In': signedIn}})
      .then(res => res.data);
  },

  find: (personId) => {
    return apiClient.get(`/people/${personId}`)
      .then(res => res.data);
  } 

};
