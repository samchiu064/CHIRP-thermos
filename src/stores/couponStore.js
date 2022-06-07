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
          if (res.data.success) {
            if (this.couponList.includes(code)) {
              status.couponIsApplied = true;
              return;
            } // A voucher code can be used once at a time
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
