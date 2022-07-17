import { apiGetProductList } from '@/api/client';
import { defineStore } from 'pinia';
import statusStore from './statusStore';

const status = statusStore();

export const useProductStore = defineStore('product', {
  state: () => ({
    origin: [],
  }),
  getters: {
    thermos: (state) =>
      state.origin
        .filter((item) => item.category === 'thermos')
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
    upcoming: (state) =>
      state.origin
        .filter((item) => item.category === 'upcoming')
        .map((item) => {
          // Add properties 1.chtColor, 2. engColor
          const chtColor = item.title.slice(item.title.indexOf('-') + 2, item.length);
          const colorClassMap = {
            繽紛色彩: 'colorful',
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
      try {
        const result = await apiGetProductList();

        this.origin = result.data.products;
      } catch (err) {
        status.apiRequestIsFailed = true;
        status.apiErrorMessage = err;
      }
    },
  },
});
