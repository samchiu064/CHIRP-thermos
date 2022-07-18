import axios from 'axios';

const productRequest = axios.create({
  baseURL: `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/`,
});

if (document.cookie) {
  const token = document.cookie
    .split('; ')
    .find((row) => row.startsWith('hexToken='))
    .split('=')[1];

  productRequest.interceptors.request.use(
    (request) => {
      request.headers.Authorization = token;
      return request;
    },
    (error) => Promise.reject(error)
  );
}

export const getProductListByPage = (page) => {
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
  productRequest.defaults.headers.common.Authorization = token;
  const result = productRequest.get(`/products?page=${page}`);

  return result;
};
export const getProductListAll = () => productRequest.get('/products/all');
export const postProductItem = (data) => productRequest.post('/product', data);
export const putProductItemDetail = (data, productId) =>
  productRequest.put(`/product/${productId}`, data);
export const deleteProduct = (productId) => productRequest.delete(`/product/${productId}`);
