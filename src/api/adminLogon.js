import axios from 'axios';

const logonRequest = axios.create({
  baseURL: `${process.env.VUE_APP_API}/`,
});

const token = document.cookie
  .split('; ')
  .find((row) => row.startsWith('hexToken='))
  .split('=')[1];

logonRequest.interceptors.request.use(
  (request) => {
    request.headers.Authorization = token;
    return request;
  },
  (error) => Promise.reject(error),
);

export const postUserLogin = (data) => logonRequest.post('/admin/signin', data);
export const postUserLogout = () => logonRequest.post('/logout');
export const postUserCheck = () => logonRequest.post('/api/user/check');
