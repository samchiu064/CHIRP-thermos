<template>
  <main class="container p-3 p-md-5 bg-white">
    <div class="row mb-6 justify-content-center">
      <StoreUserCartProgressBar :percentage="50" :enableStepsArray="[1]" />
    </div>
    <div class="row">
      <div class="col-12 col-lg-8">
        <StoreUserCartProductTable :readonly="false" />
      </div>
      <StoreUserCartSpreadsheet :nextPage="'checkout'" />
    </div>
  </main>
</template>

<script>
import StoreUserCartProgressBar from '../components/StoreUserCartProgressBar.vue';
import StoreUserCartProductTable from '../components/StoreUserCartProductTable.vue';
import StoreUserCartSpreadsheet from '../components/StoreUserCartSpreadsheet.vue';

export default {
  components: {
    StoreUserCartProgressBar,
    StoreUserCartProductTable,
    StoreUserCartSpreadsheet,
  },
};
</script>

<style lang="scss" scoped>
.figure {
  &--spacing-mobile {
    @media (max-width: 576px) {
      margin-bottom: 0;
    }
  }
}
</style>
