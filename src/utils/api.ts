import axios from "axios";
import { API_URL } from '@env';

export const api = axios.create({
  // baseURL: process.env.API_URL,
  // baseURL: 'http://{ip_address}:3000',
  baseURL: API_URL,
});
