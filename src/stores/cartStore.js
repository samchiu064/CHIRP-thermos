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
      const result = await apiGetCartList();
      if (result.data.success) {
        this.cart = result.data.data;
      }
      status.isLoading = false;
    },
    async addCartItem(productId, qty) {
      status.cartLoadingItem = productId;
      status.cartItemIsAdded = false;
      const result = await apiPostCartItem({ data: { product_id: productId, qty } });
      if (result.data.success) {
        status.cartLoadingItem = '';
        status.cartItemIsAdded = true;
      } else {
        status.cartItemIsAdded = false;
      }
      this.getCartList();
    },
    async updateCartItem({ itemId, qty }) {
      // Prevent qty being less than 0
      const newQty = qty <= 0 ? 1 : qty;
      status.cartLoadingItem = itemId;
      const result = await apiPutCartItem({ data: { product_id: itemId, qty: newQty } }, itemId);
      if (result.data.success) {
        status.cartLoadingItem = '';
        this.getCartList();
      }
    },
    async deleteCartItem(itemId) {
      status.cartDeletedItem = itemId;
      const result = await apiDeleteCartItem(itemId);
      if (result.data.success) {
        this.cancelOverlay();
        this.getCartList();
      }
    },
    overlayCartItem(id) {
      status.cartItemIsOverlaid = true;
      status.cartDeletedItem = id;
    },
    cancelOverlay() {
      status.cartItemIsOverlaid = false;
      status.cartDeletedItem = '';
    },
  },
});
