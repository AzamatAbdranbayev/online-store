import axios from 'axios';

export const BASE_URL = `http://${process.env.BACK_HOST}:${process.env.BACK_PORT}`;

export const instance = axios.create({
  // baseURL: 'http://localhost:8000/',
  baseURL: `http://${process.env.BACK_HOST}:${process.env.BACK_PORT}/`,
  withCredentials: true,
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
});

console.log(process.env.BACK_HOST);
console.log(process.env.BACK_PORT);
console.log(`http://${process.env.BACK_HOST}:${process.env.BACK_PORT}/`);
