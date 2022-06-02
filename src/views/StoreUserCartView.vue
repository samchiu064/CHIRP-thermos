<template>
  <main class="container p-3 p-md-5 bg-white">
    <div class="row mb-6 justify-content-center">
      <StoreUserCartProgressBar
        :percentage="progressPercent"
        :enableStepsArray="enableStepsArray"
      />
    </div>
    <div class="row">
      <!-- <router-view @validateForm="validateForm"></router-view> -->
      <router-view name="productTable" :class="columns" />
      <router-view name="orderForm" class="col-12 col-lg-8" @validateForm="validateForm" />
      <router-view name="confirmationTable" />
      <router-view name="spreadSheet" :nextPage="nextPage" :formIsValid="formIsValid" />

      <router-view name="checkout"></router-view>
    </div>
  </main>
</template>

<script>
import StoreUserCartProgressBar from '../components/StoreUserCartProgressBar.vue';
// import StoreUserCartSpreadsheet from '../components/StoreUserCartSpreadsheet.vue';

export default {
  components: {
    StoreUserCartProgressBar,
    // StoreUserCartSpreadsheet,
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
      if (this.$route.name === 'order') return 100;
      if (this.$route.name === 'checkout') return 100;
      return 50;
    },
    enableStepsArray() {
      if (this.$route.name === 'order') return [1, 2];
      if (this.$route.name === 'checkout') return [1, 2, 3];
      return [1];
    },
    columns() {
      if (this.$route.name === 'checkout') return 'col-12';
      return 'col-8';
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
