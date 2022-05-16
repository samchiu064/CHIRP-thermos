import axios from 'axios';

const orderRequest = axios.create({
  baseURL: `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/`,
});

const token = document.cookie
  .split('; ')
  .find((row) => row.startsWith('hexToken='))
  .split('=')[1];

orderRequest.interceptors.request.use(
  (request) => {
    request.headers.Authorization = token;
    return request;
  },
  (error) => Promise.reject(error),
);

export const getOrderList = (page) => orderRequest.get(`/orders?page=${page}`);
export const putOrderItemDetail = (data, orderId) => orderRequest.put(`/order/${orderId}`, data);
export const deleteOrder = (orderId) => orderRequest.delete(`/order/${orderId}`);
export const deleteOrderAll = () => orderRequest.delete('/orders/all');
