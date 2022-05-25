import { apiGetProductList } from '@/api/client';
import { defineStore } from 'pinia';
// import statusStore from './statusStore';

// const status = statusStore();

export const useProductStore = defineStore({
  state: () => ({
    origin: [],
  }),
  getters: {
    thermos: (state) => state.origin.filter((item) => item.category === 'thermos'),
  },
  actions: {
    async getProduct() {
      await apiGetProductList()
        .then((res) => {
          if (res.data.success) {
            this.origin = res.data.products;
            console.log(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
