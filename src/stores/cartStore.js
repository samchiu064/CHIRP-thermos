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
      status.cartItemIsAdded = false;
      await apiPostCartItem({ data: { product_id: productId, qty } })
        .then((res) => {
          status.cartLoadingItem = '';
          status.cartItemIsAdded = true;
          console.log(res);
        })
        .catch((res) => {
          status.cartItemIsAdded = false;
          console.log(res);
        });

      this.getCartList();
    },
    async updateCartItem({ itemId, qty }) {
      // CartItem qty should be either 1 or more than 1
      const newQty = qty <= 0 ? 1 : qty;

      status.cartLoadingItem = itemId;
      await apiPutCartItem({ data: { product_id: itemId, qty: newQty } }, itemId)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));

      // Update cart list to refresh data in the table
      this.getCartList();
      status.cartLoadingItem = '';
    },
    async deleteCartItem(itemId) {
      status.cartDeletedItem = itemId;
      await apiDeleteCartItem(itemId)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));

      // Update cart list to refresh data in the table
      this.getCartList();
      status.cartDeletedItem = '';
    },
  },
});
