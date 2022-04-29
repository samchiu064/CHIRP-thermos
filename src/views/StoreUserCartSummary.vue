<template>
  <div class="container p-3 p-md-5 bg-white">
    <div class="row mb-6 justify-content-center">
      <StoreUserCartProgressBar :percentage="100" :enableStepsArray="[1, 2]" />
    </div>
    <div class="row">
      <div class="col">
        <p><i class="bi bi-check2-circle"></i> 我們收到您的訂單了！</p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <StoreUserCartProductTable />
      </div>
    </div>
    <div class="row"><div class="col">3</div></div>
  </div>
</template>

<script>
import StoreUserCartProgressBar from '../components/StoreUserCartProgressBar.vue';
import StoreUserCartProductTable from '../components/StoreUserCartProductTable.vue';

export default {
  components: {
    StoreUserCartProgressBar,
    StoreUserCartProductTable,
  },
};
</script>

<style lang="scss" scoped>
</style>
