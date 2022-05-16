import axios from 'axios';

const uploadRequest = axios.create({
  baseURL: `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/`,
});

export const postUploadImage = (data) => uploadRequest.post('/upload', data);
