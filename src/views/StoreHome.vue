<template>
  <main class="kv bg-light">
    <div
      class="container-fluid apple overflow-hidden position-relative"
      :style="{ height: `${innerHeight}px` }"
    >
      <div class="row text-center">
        <div class="col-12">
          <section class="kv__content position-absolute top-40 start-50 translate-middle w-100">
            <h1 ref="title">
              單色不鏽鋼保溫瓶 <br />
              輕便保溫，易洗防沾 <br />
            </h1>
            <p class="px-3">
              商品可寄送至臺澎金馬地區，目前暫不提供海外運送服務。所有商品皆於臺灣製造。
            </p>
          </section>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <section
            class="kv__product d-flex justify-content-center position-absolute bottom-0 start-50 w-100"
          >
            <div class="kv__product-card">
              <router-link to="/thermos/classic/details/classic-green" class="text-decoration-none">
                <span class="color-dot bg-classic-green mx-auto my-3"></span>
                <div class="title fw-bold fs-6 text-classic-green text-center mb-3">胡克綠</div>
                <img
                  src="../assets/images/Hookers_green_bottle.png"
                  alt="胡克綠保溫瓶圖片"
                  class="w-100"
              /></router-link>
            </div>
            <div class="kv__product-card">
              <router-link to="/thermos/classic/details/classic-red" class="text-decoration-none">
                <span class="color-dot bg-classic-red mx-auto my-3"></span>
                <div class="title fw-bold fs-6 text-classic-red text-center mb-3">灰玫紅</div>
                <img
                  src="../assets/images/Old_rose_bottle.png"
                  alt="灰玫紅保溫瓶圖片"
                  class="w-100"
              /></router-link>
            </div>
            <div class="kv__product-card">
              <router-link to="/thermos/classic/details/classic-blue" class="text-decoration-none">
                <span class="color-dot bg-classic-blue mx-auto my-3"></span>
                <div class="title fw-bold fs-6 text-classic-blue text-center mb-3">灰丁寧藍</div>
                <img
                  src="../assets/images/Blue_yonder_bottle.png"
                  alt="灰丁寧藍保溫瓶圖片"
                  class="w-100"
              /></router-link>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      innerHeight: window.innerHeight,
    };
  },
  methods: {
    initHeight() {
      const vh = window.innerHeight;
      this.innerHeight = vh;
    },
  },
  created() {
    window.addEventListener('resize', this.initHeight());
  },
};
</script>

<style lang="scss" scoped>
.kv {
  &__product {
    transform: translate(-50%, 60%);
    &-card {
      transition: transform 250ms;
      transition-timing-function: linear;
      margin: 3rem;
      @media (max-width: 768px) {
        margin: 0.5rem;
      }
      .color-dot {
        display: block;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 100%;
        @media (max-width: 768px) {
          width: 1rem;
          height: 1rem;
        }
      }
      &:hover {
        transform: translateY(-40px);
        transition: all 0.3s;
        cursor: pointer;
      }
    }
  }
}
</style>
