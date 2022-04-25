<template>
  <div class="bg-light">
    <StoreHeader />
    <router-view />
  </div>
</template>

<script>
import StoreHeader from '../components/StoreHeader.vue';

export default {
  components: {
    StoreHeader,
  },
};
</script>

<style lang="scss" scoped>
</style>
