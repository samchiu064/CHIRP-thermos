import axios from 'axios';

const userRequest = axios.create({
  baseURL: `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/`,
});

// Checkout related
export const postCheckout = (orderId) => userRequest.post(`/pay/${orderId}`);
