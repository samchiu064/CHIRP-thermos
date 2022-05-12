import axios from 'axios';

const userRequest = axios.create({
  baseURL: `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/`,
});

// Coupons related
export const getCouponList = (page) => userRequest.get(`/coupons?page=${page}`);
export const postCouponItem = (data) => userRequest.post('/coupon', data);
export const putCouponItemDetail = (data, couponId) => userRequest.put(`/coupon/${couponId}`, data);
export const deleteCoupon = (productId) => userRequest.delete(`/coupon/${productId}`);
