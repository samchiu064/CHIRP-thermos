<template>
  <router-view />
  <StoreFooter />
</template>

<script>
// import StoreHeader from '../components/StoreHeader.vue';
import StoreFooter from '../components/StoreFooter.vue';

export default {
  components: {
    StoreFooter,
  },
};
</script>

<style lang="scss" scoped>
</style>
