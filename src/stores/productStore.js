import { apiGetProductList } from '@/api/client';
import { defineStore } from 'pinia';
// import statusStore from './statusStore';

// const status = statusStore();

export const useProductStore = defineStore('product', {
  state: () => ({
    origin: [],
  }),
  getters: {
    thermos: (state) =>
      state.origin
        .filter((item) => item.category === 'thermos') // Type: Thermos
        .map((item) => {
          // Add properties 1.chtColor, 2. engColor
          const chtColor = item.title.slice(item.title.indexOf('-') + 2, item.length);
          const colorClassMap = {
            胡克綠: 'classic-green',
            灰玫紅: 'classic-red',
            灰丁寧藍: 'classic-blue',
          };
          const engColor = colorClassMap[chtColor] ?? 'unassigned';
          return {
            ...item,
            chtColor,
            engColor,
          };
        })
        .sort((a, b) => b.num - a.num),
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
