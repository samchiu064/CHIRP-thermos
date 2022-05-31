import { defineStore } from 'pinia';
// import { apiPostCouponApply } from '@/api/client';
import statusStore from './statusStore';

const status = statusStore();

export const useCouponStore = defineStore('coupon', {
  state: () => ({
    tempOrder: {},
  }),
  getters: {},
  actions: {},
});
