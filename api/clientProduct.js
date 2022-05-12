import axios from 'axios';

const userRequest = axios.create({
  baseURL: `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/`,
});

// Products related
export const getProductListByPage = (page) => userRequest.get(`/products?page=${page}`);
export const getProductListAll = () => userRequest.get('/products/all');
export const getProductDetail = (productId) => userRequest.get(`/product/${productId}`);
