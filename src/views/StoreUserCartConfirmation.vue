<template>
  <div class="container p-3 p-md-5 bg-white">
    <div class="row mb-6 justify-content-center">
      <StoreUserCartProgressBar :percentage="100" :enableStepsArray="[1, 2]" />
    </div>
    <div class="row"></div>
    <div class="row"></div>
  </div>
</template>

<script>
import StoreUserCartProgressBar from '../components/StoreUserCartProgressBar.vue';

export default {
  components: {
    StoreUserCartProgressBar,
  },
};
</script>

<style lang="scss" scoped>
</style>
