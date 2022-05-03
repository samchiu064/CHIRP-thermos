<template>
  <div class="container p-3 p-md-5 bg-white">
    <div class="row mb-6 justify-content-center">
      <StoreUserCartProgressBar :percentage="50" :enableStepsArray="[1, 2]" />
    </div>
    <div class="row">
      <StoreUserCartPaymentForm />
      <StoreUserCartSpreadsheet :nextPage="'summary'" />
    </div>
  </div>
</template>

<script>
import StoreUserCartProgressBar from '../components/StoreUserCartProgressBar.vue';
import StoreUserCartSpreadsheet from '../components/StoreUserCartSpreadsheet.vue';
import StoreUserCartPaymentForm from '../components/StoreUserCartPaymentForm.vue';

export default {
  components: {
    StoreUserCartProgressBar,
    StoreUserCartSpreadsheet,
    StoreUserCartPaymentForm,
  },
};
</script>

<style lang="scss" scoped>
</style>
