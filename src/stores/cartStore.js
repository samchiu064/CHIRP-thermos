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

      try {
        const result = await apiGetCartList();
        this.cart = result.data.data;
      } catch (err) {
        status.apiRequestIsFailed = true;
        status.apiErrorMessage = err;
      }

      status.isLoading = false;
    },
    async addCartItem(productId, qty) {
      status.cartLoadingItem = productId;
      status.cartItemIsAdded = false;

      try {
        await apiPostCartItem({ data: { product_id: productId, qty } });

        status.cartLoadingItem = '';
        status.cartItemIsAdded = true;
      } catch (err) {
        status.cartItemIsAdded = false;
        status.apiRequestIsFailed = true;
        status.apiErrorMessage = err;
      }

      this.getCartList();
    },
    async updateCartItem({ productId, qty }, cartItemId) {
      status.cartLoadingItem = productId;

      try {
        const newQty = qty <= 0 ? 1 : qty;

        await apiPutCartItem({ data: { product_id: productId, qty: newQty } }, cartItemId);

        this.getCartList();
      } catch (err) {
        status.apiRequestIsFailed = true;
        status.apiErrorMessage = err;
      }

      status.cartLoadingItem = '';
    },
    async deleteCartItem(itemId) {
      status.cartDeletedItem = itemId;

      try {
        await apiDeleteCartItem(itemId);

        this.getCartList();
      } catch (err) {
        status.apiRequestIsFailed = true;
        status.apiErrorMessage = err;
      }

      this.cancelOverlay();
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
