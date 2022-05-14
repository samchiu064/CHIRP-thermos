<template>
  <div
    :style="{ height: `${currentHeights[0]}px` }"
    ref="scrollImg"
    class="scroll-img"
  >
    <img
      :src="product[0].imagesUrl[indexOfImage] || product[0].imageUrl"
      :alt="product[0].title"
      class="scroll-img__item"
    />
    <!-- {{ imageCategory }} -->
  </div>
  <div
    v-for="(item, index) in productMask"
    :key="index"
    :style="{ height: `${currentHeights[index + 1]}px` }"
    class="scroll-img scroll-img__mask"
  >
    <img
      :src="item.imagesUrl[indexOfImage] || item.imageUrl"
      :alt="item.title"
      class="scroll-img__item"
    />
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Array,
      required: true,
    },
    imageCategory: {
      type: String,
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
    indexOfImage() {
      if (this.imageCategory === 'accessory') return 0;
      if (this.imageCategory === 'feature') return 1;
      if (this.imageCategory === 'benefit') return 2;
      if (this.imageCategory === 'main') return false;
      return false;
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
      const firstItem = this.calcCurrentHeight(0);
      const secondItem = this.calcCurrentHeight(1);
      const thirdItem = this.calcCurrentHeight(2);

      this.currentHeights = [firstItem, secondItem, thirdItem];

      this.topVisible = document.documentElement.scrollTop;
      this.vh = window.innerHeight;
    },
    calcCurrentHeight(order) {
      return Math.max(
        0,
        this.originalHeight
          - this.topVisible * (this.originalHeight / this.vh)
          + this.originalHeight * order,
      );
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
.scroll-img {
  position: absolute;
  overflow: hidden;
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
    width: 100%;
    height: auto;
  }
}
</style>
