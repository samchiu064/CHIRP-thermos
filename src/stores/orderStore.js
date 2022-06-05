import { defineStore } from 'pinia';
import { apiPostOrder, apiGetOrderListById } from '@/api/client';
import statusStore from './statusStore';

const status = statusStore();

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
    order: {},
    orderId: '',
  }),
  getters: {},
  actions: {
    async createOrder() {
      status.isLoading = true;
      await apiPostOrder({ data: this.form })
        .then((res) => {
          if (res.data.success === true) {
            this.orderId = res.data.orderId;
          }
          status.isLoading = false;
          console.log(res);
        })
        .catch((err) => console.log(err));
    },
    async getOrderList(orderId) {
      await apiGetOrderListById(orderId)
        .then((res) => {
          if (res.data.success === true) {
            this.order = res.data.order;
            this.form.message = res.data.order.message;
            this.form.user = { ...res.data.order.user };
          }
          console.log(res);
        })
        .catch((res) => console.log(res));
    },
  },
});
