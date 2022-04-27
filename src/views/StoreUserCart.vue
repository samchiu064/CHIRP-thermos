<template>
  <main class="container p-3 p-md-5 bg-white">
    <StoreUserCartProgressBar :percentage="50" :enableStepsArray="[1]" />
    <StoreUserCartProductTable />
  </main>
</template>

<script>
import StoreUserCartProgressBar from '../components/StoreUserCartProgressBar.vue';
import StoreUserCartProductTable from '../components/StoreUserCartProductTable.vue';

export default {
  components: { StoreUserCartProgressBar, StoreUserCartProductTable },
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

.table-row {
  &--divider-light {
    border-bottom: 3px solid #f4f4f6;
  }
}

.accordion-button {
  &:not(.collapsed) {
    color: #212529;
    background-color: white;
  }
}
</style>
