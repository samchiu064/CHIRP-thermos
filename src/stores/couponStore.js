import { defineStore } from 'pinia';
import { apiPostCouponApply } from '@/api/client';
import statusStore from './statusStore';

const status = statusStore();

export const useCouponStore = defineStore('coupon', {
  state: () => ({
    couponCode: '',
    couponList: [],
  }),
  actions: {
    async applyCoupon() {
      const code = this.couponCode;
      const result = await apiPostCouponApply({ data: { code } });
      try {
        if (result.data.success) {
          if (this.couponList.includes(code)) {
            status.couponIsApplied = true;
            return;
          }
          this.couponList.push(code);
          this.couponCode = '';
        } else {
          status.couponIsValid = false;
        }
        console.log(result);
      } catch (e) {
        console.log(e);
      }
    },
  },
});
