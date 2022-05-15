import axios from 'axios';

const userRequest = axios.create({
  baseURL: `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/`,
});

const token = document.cookie
  .split('; ')
  .find((row) => row.startsWith('hexToken='))
  .split('=')[1];

userRequest.interceptors.request.use(
  (request) => {
    request.headers.Authorization = token;
    return request;
  },
  (error) => Promise.reject(error),
);

// Products related
export const getProductListByPage = (page) =>
  userRequest.get(`/products?page=${page}`);
export const getProductListAll = () => userRequest.get('/products/all');
export const postProductItem = (data) => userRequest.post('/product', data);
export const putProductItemDetail = (data, productId) =>
  userRequest.put(`/product/${productId}`, data);
export const deleteProduct = (productId) =>
  userRequest.delete(`/product/${productId}`);
