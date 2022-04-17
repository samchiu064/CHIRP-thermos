<template>
  <div
    :style="{ height: `${currentHeights[0]}px` }"
    ref="scrollImg"
    class="scroll-img"
  >
    <img
      :src="product[0].imagesUrl[1]"
      :alt="product[0].title"
      class="scroll-img__item"
    />
    <!-- {{ product[2].imagesUrl[1] }} -->
  </div>
  <div
    v-for="(item, index) in productMask"
    :key="index"
    :style="{ height: `${currentHeights[index + 1]}px` }"
    class="scroll-img scroll-img__mask"
  >
    <img :src="item.imagesUrl[1]" :alt="item.title" class="scroll-img__item" />
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      originalHeight: 0,
      currentHeights: [],
      topVisible: 0,
      vh: 0,
    };
  },
  computed: {
    productMask() {
      return this.product.filter((item) => item.order !== 1);
    },
  },
  methods: {
    initHeight() {
      const srcImg = this.$refs.scrollImg;
      const originalHeight = Math.round(srcImg?.getBoundingClientRect().height);
      const currentHeights = [originalHeight, originalHeight, originalHeight];

      this.currentHeights = currentHeights;
      this.originalHeight = originalHeight;
    },
    revealMask() {
      const currentHeight = this.originalHeight - this.topVisible * (this.originalHeight / this.vh);

      this.currentHeights = [
        currentHeight,
        currentHeight + this.originalHeight,
        currentHeight + this.originalHeight * 2,
      ];

      this.topVisible = document.documentElement.scrollTop;
      this.vh = window.innerHeight;
    },
  },
  mounted() {
    // use timeout because document is not fully rendered in mounted().
    const timeoutId = setTimeout(() => {
      this.initHeight();
      document.addEventListener('scroll', this.revealMask);
      clearTimeout(timeoutId);
    }, 500);

    document.addEventListener('scroll', this.divideSections);
  },
  beforeUnmount() {
    document.removeEventListener('scroll', this.revealMask);
  },
};
</script>

<style lang="scss" scoped>
:root {
  --image-height: "";
}

.scroll-img {
  position: absolute;
  overflow: hidden;
  top: 35vh;
  &:nth-child(1) {
    z-index: 3;
  }
  &:nth-child(2) {
    z-index: 2;
  }
  &:nth-child(3) {
    z-index: 1;
  }
  &__item {
    max-width: 24.8vw;
    @media (max-width: 992px) {
      max-width: 33.8vw;
    }
  }
  &--active {
    height: var(--image-height);
  }
}
</style>
