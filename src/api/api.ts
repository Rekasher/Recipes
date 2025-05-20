import axios from 'axios';
import { API_LINK } from '../utils/constants.ts';

const api = axios.create({
  baseURL: API_LINK,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { api };
