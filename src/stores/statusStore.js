import { defineStore } from "pinia";

export const statusStore = defineStore({
  state: () => ({
    isLoading: false,
    cartLoadingItem: "",
  }),
});
