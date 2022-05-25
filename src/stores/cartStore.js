import { apiGetCartList, apiPutCartItem, apiDeleteCartItem } from '@/api/client';
import { defineStore } from 'pinia';
import statusStore from './statusStore';

const status = statusStore();

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: {},
    itemQty: 0,
  }),
  getters: {
    getUserName: (state) => `我的名字叫做${state.name}`,
  },
  actions: {
    async getCartList() {
      status.isLoading = true;
      await apiGetCartList()
        .then((res) => {
          this.cart = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
      status.isLoading = false;
    },
    async updateItem({ itemId, qty }) {
      const newQty = qty <= 0 ? 1 : qty; // CartItem qty should be either 1 or more than 1

      status.cartLoadingItem = itemId;
      await apiPutCartItem({ data: { product_id: itemId, qty: newQty } }, itemId)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));

      this.getCartList(); // Update cart list to refresh data in the table
      status.cartLoadingItem = '';
    },
    async deleteItem(itemId) {
      status.cartDeleteItem = itemId;
      await apiDeleteCartItem(itemId)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
      this.getCartList(); // Update cart list to refresh data in the table
      status.cartDeleteItem = '';
    },
  },
});
