<template>
  <main class="container-fluid vh-100 position-sticky top-0 bg--thermos">
    <section
      v-for="(item, index) in thermos"
      :key="index"
      class="row overflow-hidden position-absolute top-0 w-100 bg-light"
      style="z-index: 5"
      :style="{
        height: `${this.currentHeights[index]}px`,
        'z-index': thermos.length - index,
      }"
    >
      <article class="col mt-9 text-classic-black flex-column d-none d-md-flex ps-0">
        <div class="ms-auto ps-2">
          <div class="lh-sm d-flex">
            <span class="badge px-1 me-2" :class="`bg-${item.engColor}`">
              <span class="visually-hidden">{{ item.title }}</span>
            </span>
            <h2 class="m-0">
              <span class="d-block">就讓這支在外型</span>
              <span class="d-block">材質和容量上</span>
              <span class="d-block">都不馬虎的保溫瓶陪你</span>
            </h2>
          </div>
          <p class="mt-3">
            <span class="d-block">全瓶身採用３０４可水洗不鏽鋼製成，</span>
            <span class="d-block">不僅便於攜帶，內部的防沾塗層</span>
            <span class="d-block">讓您透過簡易的清洗，達到去除污垢的效果。</span>
          </p>
          <span class="text-muted" style="max-width: 90%">
            <span class="d-inline d-lg-block">※此保溫瓶全零件皆可沖洗，可以清水沖洗後晾乾</span>
            <span class="d-inline d-lg-block">或以海綿沾中性清潔劑清洗保養。</span>
          </span>
        </div>
        <img
          :src="item.imagesUrl[1]"
          :alt="item.title + '瓶身圖片'"
          style="max-width: 20.8vw"
          class="img-fluid mt-auto align-self-start"
        />
      </article>
      <article class="col-12 col-md-3 text-center vh-100">
        <figure class="figure d-flex flex-column justify-content-center h-100">
          <img
            :src="item.imageUrl"
            :alt="item.title + '產品圖片'"
            class="figure-img img-fluid align-self-center mt-4"
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
        class="col d-none d-md-flex flex-column align-items-end mt-8 text-classic-black pe-2"
      >
        <img
          :src="item.imagesUrl[0]"
          :alt="item.title + '瓶蓋圖片'"
          style="max-width: 12vw"
          class="img-fluid mx-auto"
        />
        <div class="ms-auto" dir="rtl">
          <div class="mt-9 lh-sm d-flex">
            <span class="badge py-4 px-1 ms-2" :class="`bg-${item.engColor}`">
              <span class="visually-hidden">胡克綠保溫瓶</span>
            </span>
            <h2 class="m-0">
              <span class="d-block">一體式中栓瓶蓋</span>
              <span class="d-block">極佳的保冷保溫效力</span>
            </h2>
          </div>
          <p class="mt-3">
            <span class="d-inline d-lg-block">一體式上蓋設計可簡易拆卸，讓您從此不再有</span>
            <span class="d-inline d-lg-block">墊圈老化的困擾。</span>
          </p>
          <span class="d-inline d-lg-block text-muted"
            >經實測此款保溫瓶經過 24 小時後仍保留 70% 的熱度※</span
          >
          <span class="d-inline d-lg-block text-muted"></span>
        </div>
        <figure class="figure me-4 mb-4 mt-auto">
          <figcaption class="figure-caption mb-3 d-inline-block align-bottom">
            ※最長可保溫24小時
          </figcaption>
          <img
            :src="item.imagesUrl[2]"
            :alt="item.title + '保溫效果圖片'"
            style="max-width: 10.5vw"
            class="figure-img rounded"
          />
        </figure>
      </article>
    </section>
  </main>
  <section class="vh-100 p-0"></section>
  <section class="vh-100 p-0"></section>
  <StoreNavbarFullscreenArticle :products="thermos" />
</template>

<script>
import { useProductStore } from '@/stores/productStore';
import { mapState, mapActions } from 'pinia';
import StoreNavbarFullscreenArticle from '@/components/StoreNavbarFullscreenArticle.vue';

export default {
  components: {
    StoreNavbarFullscreenArticle,
  },
  data() {
    return {
      currentHeights: [],
      topVisible: 0,
      innerHeight: 0,
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
      /*
      Conditions of calculating currentHeight
      1. CurrentHeight is larger than 0. (Math.max)
      2. CurrentHeiht is smaller than innerHeight. (Math.min)
      */
      return Math.min(
        this.innerHeight,
        Math.max(0, this.innerHeight - this.topVisible + this.innerHeight * order)
      );
    },
    ...mapActions(useProductStore, ['getProduct']),
  },
  created() {
    this.getProduct();
    this.innerHeight = window.innerHeight;
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
</style>
