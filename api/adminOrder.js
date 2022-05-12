import axios from 'axios';

const userRequest = axios.create({
  baseURL: `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/`,
});

// Orders related
export const getOrderList = (page) => userRequest.get(`/orders?page=${page}`);
export const putOrderItemDetail = (data, orderId) => userRequest.put(`/order/${orderId}`, data);
export const deleteOrder = (orderId) => userRequest.delete(`/order/${orderId}`);
export const deleteOrderAll = () => userRequest.delete('/orders/all');
