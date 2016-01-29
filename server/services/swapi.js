import axios from 'axios';

export default axios.create({
  baseURL: 'http://swapi.co/api/'
});
