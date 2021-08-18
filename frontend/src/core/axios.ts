import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3001/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export { axiosInstance };
