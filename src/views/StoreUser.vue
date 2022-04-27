<template>
  <div class="bg-light">
    <StoreHeader />
    <router-view />
    <StoreFooter />
  </div>
</template>

<script>
import StoreHeader from '../components/StoreHeader.vue';
import StoreFooter from '../components/StoreFooter.vue';

export default {
  components: {
    StoreHeader,
    StoreFooter,
  },
};
</script>

<style lang="scss" scoped>
</style>
