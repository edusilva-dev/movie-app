import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  params: {
    language: 'pt-BR'
  },
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_BEARER_TOKEN}`
  }
});

export default api;
