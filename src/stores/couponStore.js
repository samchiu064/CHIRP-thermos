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

      try {
        const result = await apiPostCouponApply({ data: { code } });

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
      } catch (err) {
        status.apiRequestIsFailed = true;
        status.apiErrorMessage = err;
      }
    },
  },
});
