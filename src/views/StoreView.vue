<template>
  <StoreHeader @blurPages="blurPages" />
  <div class="unblur" :class="{ blur: hamburgerIsOpened }">
    <router-view />
  </div>
</template>

<script>
import StoreHeader from '@/components/StoreHeader.vue';

export default {
  components: { StoreHeader },
  data() {
    return {
      hamburgerIsOpened: false,
    };
  },
  methods: {
    blurPages(isOpened) {
      if (isOpened) {
        this.hamburgerIsOpened = true;
      } else {
        this.hamburgerIsOpened = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.blur {
  filter: blur(5px) !important;
  transition: 0.5s filter linear;
}
.unblur {
  transition: 0.5s filter linear;
}
</style>
