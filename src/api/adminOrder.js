import axios from 'axios';

const orderRequest = axios.create({
  baseURL: `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/`,
});

if (document.cookie) {
  const token = document.cookie
    .split('; ')
    .find((row) => row.startsWith('hexToken='))
    .split('=')[1];

  orderRequest.interceptors.request.use(
    (request) => {
      request.headers.Authorization = token;
      return request;
    },
    (error) => Promise.reject(error)
  );
}

export const getOrderList = (page) => {
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
  orderRequest.defaults.headers.common.Authorization = token;
  const result = orderRequest.get(`/orders?page=${page}`);

  return result;
};
export const putOrderItemDetail = (data, orderId) => orderRequest.put(`/order/${orderId}`, data);
export const deleteOrder = (orderId) => orderRequest.delete(`/order/${orderId}`);
export const deleteOrderAll = () => orderRequest.delete('/orders/all');
