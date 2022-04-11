<template>
  <!-- :class="{ 'scroll-img--active': isActive === index + 1 }" -->
  <div
    :style="{ height: `${currentHeights[0]}px` }"
    class="scroll-img"
    ref="scrollImg"
  >
    <img
      :src="tempArr[0].url"
      :alt="tempArr[0].title"
      class="scroll-img__item"
    />
  </div>
  <div
    v-for="(item, index) in tempMask"
    :key="index"
    :style="{ height: `${currentHeights[index + 1]}px` }"
    class="scroll-img scroll-img__mask"
  >
    <img :src="item.url" :alt="item.title" class="scroll-img__item" />
  </div>
</template>

<script>
import img1 from '../assets/images/bottle_open_hookers_green.png';
import img2 from '../assets/images/bottle_open_old_rose.png';
import img3 from '../assets/images/bottle_open_blue_younder.png';

export default {
  data() {
    return {
      originalHeight: 0,
      currentHeights: [],
      topVisible: 0,
      vh: 0,
      tempArr: [
        {
          title: '胡克綠保溫瓶',
          url: img1,
          order: 1,
        },
        {
          title: '灰玫紅保溫瓶"',
          url: img2,
          order: 2,
        },
        {
          title: '灰丁寧藍保溫瓶',
          url: img3,
          order: 3,
        },
      ],
      tempMask: [
        {
          title: '灰玫紅保溫瓶"',
          url: img2,
          order: 2,
        },
        {
          title: '灰丁寧藍保溫瓶',
          url: img3,
          order: 3,
        },
      ],
    };
  },
  watch: {},
  computed: {},
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
    max-width: 27.8vw;
    @media (max-width: 992px) {
      max-width: 33.8vw;
    }
  }
  &--active {
    height: var(--image-height);
  }
}
</style>
