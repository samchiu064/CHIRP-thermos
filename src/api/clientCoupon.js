import axios from 'axios';

const userRequest = axios.create({
  baseURL: `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/`,
});

// Coupons related
export const postCouponApply = (data) => userRequest.post('/coupon', data);
