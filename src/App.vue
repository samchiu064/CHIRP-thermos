<template>
  <StoreHeader />
  <router-view />
</template>

<script>
import StoreHeader from './components/StoreHeader.vue';

export default {
  components: { StoreHeader },
};
</script>

<style lang="scss">
@import "./assets/all.scss";
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap");
</style>
