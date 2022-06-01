import { defineStore } from 'pinia';
// import { apiPostCouponApply } from '@/api/client';
// import statusStore from './statusStore';

// const status = statusStore();

export const useOrderStore = defineStore('order', {
  state: () => ({
    form: {
      user: {
        email: '',
        name: '',
        tel: '',
        address: '',
      },
      message: '',
    },
  }),
  getters: {},
  actions: {},
});
