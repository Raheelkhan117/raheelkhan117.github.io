import axios from 'axios';

const API_KEY = '3bf2ca687647f2d627a95735587dfcbe'; 

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
  },
});

export default api;
