const userRequest = axios.create({
  baseURL: `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/`,
});

// Products related
export const getProductListByPage = (page) =>
  userRequest.get(`/products?page=${page}`);
export const getProductListAll = () => userRequest.get('/products/all');
export const getProductDetail = (productId) =>
  userRequest.get(`/product/${productId}`);

// Cart related
export const getCartList = () => userRequest.get('/cart');
export const postAddToCart = (data) => userRequest.get('/cart');
export const putEditCart = (data, productId) =>
  userRequest.put(`/cart/${productId}`, data);
export const deleteRemoveCartItem = (productId) =>
  userRequest.delete(`/cart/${productId}`);
export const deleteRemoveCartAll = () => userRequest.delete('/carts');

// Coupons related
export const postApplyCoupon = (data) => userRequest.post('/coupon', data);

// Orders related
export const postCreateOrder = (data) => userRequest.post('/order', data);
export const getOrderList = (page) => userRequest.get(`/orders?page=${page}`);
export const getOrderListById = (orderId) =>
  userRequest.get(`/order/${orderId}`);

// Checkout related
export const postCheckout = (orderId) => userRequest.post(`/pay/${orderId}`);
