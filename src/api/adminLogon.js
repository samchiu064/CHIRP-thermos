import axios from 'axios';

const logonRequest = axios.create({
  baseURL: `${process.env.VUE_APP_API}/`,
});

if (document.cookie) {
  const token = document.cookie
    .split('; ')
    .find((row) => row.startsWith('hexToken='))
    .split('=')[1];

  logonRequest.interceptors.request.use(
    (request) => {
      request.headers.Authorization = token;
      return request;
    },
    (error) => Promise.reject(error)
  );
}

export const postUserLogin = async (data) => {
  const result = await logonRequest.post('/admin/signin', data);
  const { token, expired } = result.data;

  document.cookie = `hexToken = ${token}; expires = ${new Date(expired)}`;
  axios.defaults.headers.common.Authorization = token;

  logonRequest.defaults.headers.common.Authorization = token;

  return result;
};
export const postUserLogout = () => logonRequest.post('/logout');
export const postUserCheck = () => logonRequest.post('/api/user/check');
