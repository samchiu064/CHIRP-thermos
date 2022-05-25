<template>
  <main class="container p-3 p-md-5 bg-white">
    <div class="row mb-6 justify-content-center">
      <StoreUserCartProgressBar
        :percentage="progressPercent"
        :enableStepsArray="enableStepsArray"
      />
    </div>
    <div class="row">
      <router-view :cart="cart"></router-view>
      <StoreUserCartSpreadsheet
        v-if="this.$route.name !== 'checkout'"
        :cart="cart"
        :nextPage="nextPage"
      />
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useCartStore } from '@/stores/cartStore';
import StoreUserCartProgressBar from '../components/StoreUserCartProgressBar.vue';
import StoreUserCartSpreadsheet from '../components/StoreUserCartSpreadsheet.vue';

export default {
  components: {
    StoreUserCartProgressBar,
    StoreUserCartSpreadsheet,
  },
  props: {
    // cart: {
    //   type: Object,
    //   default: () => {},
    // },
  },
  computed: {
    nextPage() {
      if (this.$route.name === 'cart') return 'payment';
      if (this.$route.name === 'payment') return 'checkout';
      return 'cart';
    },
    progressPercent() {
      if (this.$route.name === 'cart') return 50;
      if (this.$route.name === 'payment') return 100;
      if (this.$route.name === 'checkout') return 100;
      return 50;
    },
    enableStepsArray() {
      if (this.$route.name === 'cart') return [1];
      if (this.$route.name === 'payment') return [1, 2];
      if (this.$route.name === 'checkout') return [1, 2, 3];
      return [1];
    },
    ...mapState(useCartStore, ['cart', 'getUserName']),
  },
  methods: {
    ...mapActions(useCartStore, ['getCartList']),
  },
  created() {
    console.log(this.$route);
    this.getCartList();
  },
};
</script>

<style lang="scss" scoped></style>
