import axios from 'axios';

const orderRequest = axios.create({
  baseURL: `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/`,
});

// Orders related
export const getOrderList = (page) => orderRequest.get(`/orders?page=${page}`);
export const getOrderListById = (orderId) => orderRequest.get(`/order/${orderId}`);
export const postOrder = (data) => orderRequest.post('/order', data);
