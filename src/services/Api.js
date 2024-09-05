import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://api.openalex.org',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default Api;
