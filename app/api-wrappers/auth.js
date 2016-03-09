import apiClient from '../api-client';

export default {

  login: (password) => {
    const body = {password};
    return apiClient.post('/auth/login', body)
      .then(res => res.data);
  },

  logout: () => {
    return apiClient.post('/auth/logout')
      .then(res => res.data);
  }

};
