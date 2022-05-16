import axios from 'axios';

const couponRequest = axios.create({
  baseURL: `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/`,
});

const token = document.cookie
  .split('; ')
  .find((row) => row.startsWith('hexToken='))
  .split('=')[1];

couponRequest.interceptors.request.use(
  (request) => {
    request.headers.Authorization = token;
    return request;
  },
  (error) => Promise.reject(error),
);

export const getCouponList = (page) => couponRequest.get(`/coupons?page=${page}`);
export const postCouponItem = (data) => couponRequest.post('/coupon', data);
export const putCouponItemDetail = (data, couponId) => couponRequest.put(`/coupon/${couponId}`, data);
export const deleteCoupon = (productId) => couponRequest.delete(`/coupon/${productId}`);
