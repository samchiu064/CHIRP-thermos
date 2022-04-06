<template>
  <div
    class="scroll-img scroll-img scroll-img--active"
    v-for="(item, index) in tempArr"
    ref="scrollImg"
    :key="index"
    :class="{ active: isActive }"
  >
    <img :src="item.url" :alt="item.title" class="scroll-img__item" />
  </div>
  <!-- <div class="scroll-img scroll-img" ref="scrollImg">
    <img
      src="../assets/images/bottle_open_old_rose.png"
      alt="灰玫紅保溫瓶"
      class="scroll-img__item"
    />
  </div>
  <div class="scroll-img scroll-img" ref="scrollImg">
    <img
      src="../assets/images/bottle_open_blue_younder.png"
      alt="灰丁寧藍保溫瓶"
      class="scroll-img__item"
    />
  </div> -->
</template>

<script>
import img1 from '../assets/images/bottle_open_hookers_green.png';
import img2 from '../assets/images/bottle_open_old_rose.png';
import img3 from '../assets/images/bottle_open_blue_younder.png';

export default {
  data() {
    return {
      originalHeight: 0,
      currentHeight: 'init value',
      isFirst: false,
      isSecond: false,
      isThird: false,
      topVisible: 0,
      vh: 0,
      tempArr: [
        {
          title: '胡克綠保溫瓶',
          url: img1,
        },
        {
          title: '灰玫紅保溫瓶"',
          url: img2,
        },
        {
          title: '灰丁寧藍保溫瓶',
          url: img3,
        },
      ],
    };
  },
  watch: {},
  computed: {
    isActive() {
      // if (this.topVisible < this.vh && this.isFirst) {
      //   return true;
      // }
      // if (
      //   this.topVisible >= this.vh
      //   && this.topVisible <= this.vh * 2
      //   && this.isSecond
      // ) {
      //   return true;
      // }
      // if (
      //   this.topVisible >= this.vh * 2
      //   && this.topVisible <= this.vh * 3
      //   && this.isThird
      // ) {
      //   return true;
      // }
      return true;
    },
  },
  methods: {
    initHeight() {
      const srcImg = document.querySelector('.scroll-img.active');
      const originalHeight = Math.round(srcImg?.getBoundingClientRect().height);

      this.currentHeight = originalHeight;
      this.originalHeight = originalHeight;
    },
    revealMask() {
      // Height of the image box should be positive value or zero
      this.currentHeight = Math.max(0, this.originalHeight - this.topVisible);

      document.documentElement.style.setProperty(
        '--image-height',
        `${this.currentHeight}px`,
      );

      this.topVisible = document.documentElement.scrollTop;
      this.vh = window.innerHeight;
    },
    divideSections() {
      this.isFirst = this.topVisible < this.vh;
      this.isSecond = this.topVisible >= this.vh && this.topVisible <= this.vh * 2;
      this.isThird = this.topVisible > this.vh * 3;
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
