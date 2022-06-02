import { defineStore } from 'pinia';
import { apiPostOrder } from '@/api/client';
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
    payment: '',
  }),
  getters: {},
  actions: {
    async createOrder() {
      await apiPostOrder({ data: this.form })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
  },
});
