<template>
  <template v-for="(item, index) in tempArr" :key="index">
    <div
      v-show="isActive === index + 1"
      class="scroll-img"
      :class="{
        'scroll-img--active': isActive === index + 1,
      }"
      ref="scrollImg"
    >
      <img :src="item.url" :alt="item.title" class="scroll-img__item" />
    </div>
  </template>
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
      isFirst: true,
      isSecond: false,
      isThird: false,
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
    };
  },
  watch: {},
  computed: {
    isActive() {
      if (this.topVisible > this.vh * 2) {
        return 3;
      }
      if (this.topVisible > this.vh) {
        return 2;
      }
      if (this.topVisible <= this.vh) {
        return 1;
      }
      return false;
    },
  },
  methods: {
    initHeight(order) {
      // const srcImg = document.querySelector('.scroll-img.active');
      const srcImg = this.$refs.scrollImg[order];
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
      // First view
      this.isFirst = this.topVisible < this.vh;

      // Second view
      this.isSecond = this.topVisible >= this.vh && this.topVisible <= this.vh * 2;

      // Third view
      this.isThird = this.topVisible > this.vh * 3;

      if (this.isFirst) {
        this.initHeight(0);
      } else if (this.isSecond) {
        this.initHeight(1);
      } else if (this.isThird) {
        this.initHeight(2);
      }
    },
  },
  mounted() {
    // use timeout because document is not fully rendered in mounted().
    const timeoutId = setTimeout(() => {
      this.initHeight(0);
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
