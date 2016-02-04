import axios from 'axios';

let baseURL = __IS_CLIENT__
  ? '/api/'
  : 'http://127.0.0.1:3069/api/';

export default axios.create({baseURL});
