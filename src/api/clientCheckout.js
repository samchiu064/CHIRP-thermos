import axios from 'axios';

const checkoutRequest = axios.create({
  baseURL: `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/`,
});

// Checkout related
export const postCheckout = (orderId) => checkoutRequest.post(`/pay/${orderId}`);
