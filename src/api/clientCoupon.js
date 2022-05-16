import axios from 'axios';

const couponRequest = axios.create({
  baseURL: `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/`,
});

// Coupons related
export const postCouponApply = (data) => couponRequest.post('/coupon', data);
