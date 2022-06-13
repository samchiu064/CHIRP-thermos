import { defineStore } from 'pinia';
import { apiPostCouponApply } from '@/api/client';
import statusStore from './statusStore';

const status = statusStore();

export const useCouponStore = defineStore('coupon', {
  state: () => ({
    couponCode: '',
    couponList: [],
  }),
  getters: {},
  actions: {
    async applyCoupon() {
      const code = this.couponCode;
      await apiPostCouponApply({ data: { code } })
        .then((res) => {
          // A voucher code can be used once at a time
          if (res.data.success) {
            if (this.couponList.includes(code)) {
              status.couponIsApplied = true;
              return;
            }
            this.couponList.push(code);
            this.couponCode = '';
          } else {
            status.couponIsValid = false;
          }
          console.log(res);
        })
        .catch((err) => console.log(err));
    },
  },
});
