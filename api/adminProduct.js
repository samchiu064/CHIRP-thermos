import axios from 'axios';

const userRequest = axios.create({
  baseURL: `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/`,
});

// Products related
export const getProductListByPage = (page) => userRequest.get(`/products?page=${page}`);
export const getProductListAll = () => userRequest.get('/products/all');
export const postProductItem = (data) => userRequest.post('/product', data);
export const putProductItemDetail = (data, productId) => userRequest.put(`/product/${productId}`, data);
export const deleteProduct = (productId) => userRequest.delete(`/product/${productId}`);
