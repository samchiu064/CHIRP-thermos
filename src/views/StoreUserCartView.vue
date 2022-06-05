<template>
  <main class="container p-3 p-md-5 bg-white">
    <div class="row justify-content-center">
      <router-view
        name="progressBar"
        :percentage="progressPercent"
        :enableStepsArray="enableStepsArray"
        class="mb-6"
      />
    </div>
    <div class="row">
      <router-view name="productTable" :class="columns" />
      <router-view name="orderForm" class="col-12 col-lg-8" @validateForm="validateForm" />
      <router-view name="orderTable" />
      <router-view name="spreadSheet" :nextPage="nextPage" :formIsValid="formIsValid" />
    </div>
    <router-view></router-view>
  </main>
  <StoreFooter />
</template>

<script>
import StoreFooter from '@/components/StoreFooter.vue';

export default {
  components: {
    StoreFooter,
  },
  data() {
    return {
      formIsValid: false,
    };
  },
  computed: {
    nextPage() {
      if (this.$route.name === 'cart') return 'order';
      if (this.$route.name === 'order') return 'checkout';
      return 'cart';
    },
    progressPercent() {
      if (this.$route.name === 'order') return 50;
      if (this.$route.name === 'checkout') return 100;
      return 0;
    },
    enableStepsArray() {
      if (this.$route.name === 'order') return [1, 2];
      if (this.$route.name === 'checkout') return [1, 2, 3];
      return [1];
    },
    columns() {
      if (this.$route.name === 'checkout') return 'col-12';
      return 'col-12 col-lg-8';
    },
  },
  methods: {
    validateForm(result) {
      this.formIsValid = result;
    },
  },
};
</script>

<style lang="scss" scoped></style>
