import { apiGetCartList, apiPostCartItem, apiPutCartItem, apiDeleteCartItem } from '@/api/client';
import { defineStore } from 'pinia';
import statusStore from './statusStore';

const status = statusStore();

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: {},
    itemQty: 0,
  }),
  getters: {
    discount() {
      return this.cart.total - this.cart.final_total;
    },
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
    async addCartItem(productId, qty) {
      status.cartLoadingItem = productId;
      await apiPostCartItem({ data: { product_id: productId, qty } })
        .then((res) => {
          status.cartLoadingItem = '';
          console.log(res);
        })
        .catch((res) => console.log(res));

      this.getCartList();
    },
    async updateCartItem({ itemId, qty }) {
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
    async deleteCartItem(itemId) {
      status.cartDeletedItem = itemId;
      await apiDeleteCartItem(itemId)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
      this.getCartList(); // Update cart list to refresh data in the table
      status.cartDeletedItem = '';
    },
  },
});
