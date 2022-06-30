import { defineStore } from 'pinia';

export default defineStore('statusStore', {
  state: () => ({
    isLoading: false,
    cartIsShown: true,
    cartLoadingItem: '',
    cartDeletedItem: '',
    cartItemIsAdded: false,
    cartItemIsOverlaid: false,
    couponIsApplied: false,
    couponIsValid: false,
    orderIsValid: false,
  }),
});
