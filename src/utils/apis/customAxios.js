import axios from 'axios';
import { getCookie } from '../cookies';

export const customAxios = axios.create({
  // baseURL: process.env.PUBLIC_URL, // 기본 서버 주소 입력
  baseURL: 'http://localhost:5000/',
  headers: {
    access_token: getCookie('access_token') === undefined? "" : getCookie('access_token'),
  },
});