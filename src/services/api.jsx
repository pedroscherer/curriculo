import axios from 'axios';

const api = axios.create({
  baseURL: "https://curriculo-server.herokuapp.com",
});

export default api;
