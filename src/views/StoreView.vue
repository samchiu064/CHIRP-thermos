<template>
  <div class="d-flex flex-column" :class="{ 'min-vh-100': !pagesWithoutFooter }">
    <StoreHeader class="flex-shrink-0" @blurPages="blurPages" />
    <div class="unblur flex-grow-1" :class="{ blur: hamburgerIsOpened }">
      <router-view />
    </div>
    <StoreFooter
      class="unblur flex-shrink-0"
      :class="{ 'd-none': pagesWithoutFooter, blur: hamburgerIsOpened }"
    />
  </div>
</template>

<script>
import StoreHeader from '@/components/StoreHeader.vue';
import StoreFooter from '@/components/StoreFooter.vue';

export default {
  components: { StoreHeader, StoreFooter },
  data() {
    return {
      hamburgerIsOpened: false,
    };
  },
  computed: {
    pagesWithoutFooter() {
      const whiteList = ['home', 'thermosClassic'];

      if (whiteList.includes(this.$route.name)) return true;
      return false;
    },
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
