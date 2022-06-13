<template>
  <StoreHeader />
  <router-view />
</template>

<script>
import StoreHeader from '@/components/StoreHeader.vue';

export default {
  components: { StoreHeader },
};
</script>
