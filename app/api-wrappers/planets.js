import apiClient from '../api-client';

export default {

  load: () => {
    return apiClient.get('/planets')
      .then(res => res.data);
  },

  find: (planetId) => {
    return apiClient.get(`/planets/${planetId}`)
      .then(res => res.data);
  }

};
