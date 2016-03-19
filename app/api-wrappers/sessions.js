import apiClient from '../api-client';

export default {

  login: (password) => {
    const body = {password};
    return apiClient.post('/sessions/login', body)
      .then(res => res.data);
  },

  logout: () => {
    return apiClient.post('/sessions/logout')
      .then(res => res.data);
  }

};
