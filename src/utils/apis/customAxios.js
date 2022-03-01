import axios from 'axios';
import { getCookie } from '../Cookies';

export const customAxios = axios.create({
  baseURL: process.env.PUBLIC_URL, // 기본 서버 주소 입력
  headers: {
    access_token: getCookie('access_token') === undefined? "" : getCookie('access_token'),
  },
});