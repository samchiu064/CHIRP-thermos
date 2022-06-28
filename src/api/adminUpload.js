import axios from 'axios';

const uploadRequest = axios.create({
  baseURL: `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/`,
});

if (document.cookie) {
  const token = document.cookie
    .split('; ')
    .find((row) => row.startsWith('hexToken='))
    .split('=')[1];

  uploadRequest.interceptors.request.use(
    (request) => {
      request.headers.Authorization = token;
      return request;
    },
    (error) => Promise.reject(error)
  );
}

export const postUploadImage = (data) => uploadRequest.post('/upload', data);
