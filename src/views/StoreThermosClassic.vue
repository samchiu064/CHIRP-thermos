<template>
  <main
    class="container-fluid position-sticky top-0 bg--thermos"
    :style="{ height: `${innerHeight}px` }"
  >
    <section
      v-for="(item, index) in thermos"
      :key="index"
      :id="item.engColor"
      class="row overflow-hidden position-absolute top-0 w-100 bg-light"
      style="z-index: 5"
      :style="{
        height: `${this.currentHeights[index]}px`,
        'z-index': thermos.length - index,
      }"
    >
      <article
        class="col text-classic-black flex-column d-none d-md-flex ps-0"
        :style="{
          'margin-top': `9rem`,
        }"
      >
        <div class="ms-auto ps-2">
          <div class="lh-sm d-flex">
            <span class="badge px-1 me-2" :class="`bg-${item.engColor}`">
              <span class="visually-hidden">{{ item.title }}</span>
            </span>
            <h2 class="m-0">
              <span class="d-block">將外型與實用性</span>
              <span class="d-block">合而為一的</span>
              <span class="d-block">「流線型瓶身」設計</span>
            </h2>
          </div>
          <p class="mt-3">
            <span class="d-block">全瓶身採用３０４可水洗不鏽鋼製成</span>
            <span class="d-block">堅固耐用，瓶內特殊的防沾塗層</span>
            <span class="d-block">讓您透過簡易的清洗，達到去除污垢的效果。</span>
          </p>
          <span class="text-muted" style="max-width: 90%">
            <span class="d-none d-xl-block">※此保溫瓶全零件皆可沖洗，可以清水沖洗後晾乾</span>
            <span class="d-none d-xl-block">或以海綿沾中性清潔劑清洗保養。</span>
          </span>
        </div>
        <img
          :src="item.imagesUrl[1]"
          :alt="`${item.title}瓶身圖片`"
          style="max-width: 20.8vw"
          class="img-fluid mt-auto align-self-start"
        />
      </article>
      <article class="col-12 col-md-3 text-center vh-100">
        <figure class="figure d-flex flex-column justify-content-center h-100">
          <img
            :src="item.imageUrl"
            :alt="`${item.title}產品圖片`"
            class="figure-img main-image img-fluid align-self-center mt-6"
          />
          <figcaption class="figure-caption">
            <router-link
              :to="`/thermos/classic/details/${item.engColor}`"
              class="btn rounded-pill py-2 px-4 mt-3"
              :class="`btn-outline-${item.engColor}`"
            >
              查看更多
            </router-link>
          </figcaption>
        </figure>
      </article>
      <article
        class="col d-none d-md-flex flex-column align-items-end justify-content-between text-classic-black pe-2"
        :style="{
          'margin-top': `10rem`,
        }"
      >
        <img
          :src="item.imagesUrl[0]"
          :alt="`${item.title}瓶蓋圖片`"
          style="max-width: 12vw"
          class="img-fluid mx-auto flex-shrink-0"
        />
        <div class="ms-auto mt-auto mb-3" dir="rtl">
          <div class="lh-sm d-flex">
            <span class="badge py-4 px-1 ms-2" :class="`bg-${item.engColor}`">
              <span class="visually-hidden">胡克綠保溫瓶</span>
            </span>
            <h2 class="m-0">
              <span class="d-block">一體式上蓋</span>
              <span class="d-block">極佳的保冷保溫效力</span>
            </h2>
          </div>
          <p class="mt-3">
            <span class="d-inline d-lg-block">一體式上蓋設計可簡易拆卸，讓您從此不再有</span>
            <span class="d-inline d-lg-block">墊圈老化的困擾</span>
          </p>
          <span class="d-none d-xl-block text-muted"
            >經實測此款保溫瓶經過 24 小時後仍保留 70% 的熱度※</span
          >
          <span class="d-inline d-lg-block text-muted"></span>
        </div>
        <figure class="figure">
          <figcaption class="figure-caption mb-3 d-inline-block align-bottom">
            ※最長可保溫24小時
          </figcaption>
          <img
            :src="item.imagesUrl[2]"
            :alt="`${item.title}保溫效果圖片`"
            style="max-width: 10.5vw"
            class="figure-img--mobile rounded"
          />
        </figure>
      </article>
    </section>
  </main>
  <section class="p-0" :style="{ height: `${innerHeight}px` }"></section>
  <section class="p-0" :style="{ height: `${innerHeight}px` }"></section>
  <StoreThermosClassicNavbar :products="thermos" />
</template>

<script>
import { useProductStore } from '@/stores/productStore';
import { mapState, mapActions } from 'pinia';
import StoreThermosClassicNavbar from '@/components/StoreThermosClassicNavbar.vue';

export default {
  components: {
    StoreThermosClassicNavbar,
  },
  data() {
    return {
      currentHeights: [],
      topVisible: 0,
      innerHeight: window.innerHeight,
    };
  },
  computed: {
    ...mapState(useProductStore, ['thermos']),
  },
  methods: {
    revealSection() {
      this.thermos.forEach((e, index) => {
        this.currentHeights[index] = this.calcCurrentHeight(index);
      });
      this.topVisible = document.documentElement.scrollTop;
    },
    calcCurrentHeight(order) {
      return Math.min(
        this.innerHeight,
        Math.max(0, this.innerHeight - this.topVisible + this.innerHeight * order)
      );
    },
    ...mapActions(useProductStore, ['getProduct']),
  },
  async created() {
    this.$Progress.start();
    await this.getProduct();
    this.$Progress.finish();
  },
  mounted() {
    document.addEventListener('scroll', this.revealSection);
  },
  beforeUnmount() {
    document.removeEventListener('scroll', this.revealSection);
  },
};
</script>

<style lang="scss" scoped>
.bg--thermos {
  background: rgb(248, 249, 250);
  background: radial-gradient(
    circle,
    rgba(248, 249, 250, 1) 13%,
    rgba(255, 255, 255, 1) 27%,
    rgba(248, 249, 250, 1) 42%
  );
}

.main-image {
  max-width: 45%;
  @media (min-width: 768px) {
    max-width: 60%;
  }
  @media (min-width: 992px) {
    width: auto;
  }
}
</style>
