import axios from 'axios';

const userRequest = axios.create({
  baseURL: `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/`,
});

// Orders related
export const getOrderList = (page) => userRequest.get(`/orders?page=${page}`);
export const getOrderListById = (orderId) => userRequest.get(`/order/${orderId}`);
export const postOrder = (data) => userRequest.post('/order', data);
