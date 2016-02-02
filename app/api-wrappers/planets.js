import apiClient from '../api-client';

export default {

  load: () => {
    return apiClient.get('/planets')
      .then(res => res.data);
  },

};
