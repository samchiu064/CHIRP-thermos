import { defineStore } from 'pinia';

export default defineStore('statusStore', {
  state: () => ({
    isLoading: false,
    cartLoadingItem: '',
    cartDeletedItem: '',
    cartItemIsAdded: false,
    couponIsApplied: false,
    couponIsValid: false,
    orderIsValid: false,
  }),
});
