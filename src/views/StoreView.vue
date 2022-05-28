<template>
  <StoreHeader />
  <div class="bg-light">
    <router-view />
  </div>
</template>

<script>
import StoreHeader from '../components/StoreHeader.vue';

export default {
  components: { StoreHeader },
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>

<style lang="scss" scoped></style>
