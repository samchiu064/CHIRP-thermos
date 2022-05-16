import axios from 'axios';

const productRequest = axios.create({
  baseURL: `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/`,
});

// Products related
export const getProductList = () => productRequest.get('/products');
export const getProductListByPage = (page) => productRequest.get(`/products?page=${page}`);
export const getProductListAll = () => productRequest.get('/products/all');
export const getProductDetail = (productId) => productRequest.get(`/product/${productId}`);
