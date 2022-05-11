const userRequest = axios.create({
  baseURL: `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/`,
});

// Products related
export const postAddProduct = (data) => userRequest.post('/product', data);
export const getProductListByPage = (page) =>
  userRequest.get(`/products?page=${page}`);
export const getProductListAll = () => userRequest.get('/products/all');
export const putEditProduct = (data, productId) =>
  userRequest.put(`/product/${productId}`, data);
export const deleteRemoveProduct = (productId) =>
  userRequest.delete(`/product/${productId}`);

// Orders related
export const getOrderList = (page) => userRequest.get(`/orders?page=${page}`);
export const putEditOrder = (data, orderId) =>
  userRequest.put(`/order/${orderId}`, data);
export const deleteRemoveOrder = (orderId) =>
  userRequest.delete(`/order/${orderId}`);
export const deleteRemoveOrderAll = () => userRequest.delete('/orders/all');

// Coupons related
export const postAddCoupon = (data) => userRequest.post('/coupon', data);
export const getCouponList = (page) => userRequest.get(`/coupons?page=${page}`);
export const putEditCoupon = (data, couponId) =>
  userRequest.put(`/coupon/${couponId}`, data);
export const deleteRemoveCoupon = (productId) =>
  userRequest.delete(`/coupon/${productId}`);

// Upload-image related
export const postUploadImage = (data) => userRequest.post('/upload', data);
