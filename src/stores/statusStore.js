import { defineStore } from 'pinia';

export default defineStore('statusStore', {
  state: () => ({
    isLoading: false,
    cartLoadingItem: '',
    cartDeletedItem: '',
    couponIsApplied: false,
    couponIsInvalid: false,
  }),
});
