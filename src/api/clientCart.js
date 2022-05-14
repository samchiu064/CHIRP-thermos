import axios from 'axios';

const userRequest = axios.create({
  baseURL: `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/`,
});

// Cart related
export const getCartList = () => userRequest.get('/cart');
export const postCartItem = (data) => userRequest.post('/cart', data);
export const putCartItemDetail = (data, productId) => userRequest.put(`/cart/${productId}`, data);
export const deleteCartItem = (productId) => userRequest.delete(`/cart/${productId}`);
export const deleteCartAll = () => userRequest.delete('/carts');
