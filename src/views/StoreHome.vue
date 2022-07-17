<template>
  <main class="kv bg-light">
    <div
      class="container-fluid overflow-hidden position-relative"
      :style="{ height: `${pageHeight}px` }"
    >
      <section class="kv__content row text-center">
        <div class="col-12 p-0 h-100">
          <div id="carouselHome" class="carousel slide w-100 h-100" data-bs-ride="carousel">
            <div class="carousel-indicators mb-8 mb-lg-7">
              <button
                type="button"
                data-bs-target="#carouselHome"
                data-bs-slide-to="0"
                class="active bg-dark border border-2"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselHome"
                data-bs-slide-to="1"
                class="bg-dark border border-2"
                aria-label="Slide 2"
              ></button>
            </div>
            <div class="carousel-inner h-100 d-flex align-items-center position-relative">
              <div class="carousel-item active">
                <h1>
                  單色不鏽鋼保溫瓶 <br />
                  輕便保溫，易洗防沾 <br />
                </h1>
                <p class="px-3">
                  商品可寄送至臺澎金馬地區，目前暫不提供海外運送服務。所有商品皆於臺灣製造。
                </p>
              </div>
              <div class="carousel-item w-100">
                <img
                  src="@/assets/images/static/banner_01.jpg"
                  alt="產品banner"
                  class="img-fluid d-none d-lg-inline"
                />
                <img
                  src="@/assets/images/static/banner_01_laptop.jpg"
                  class="img-fluid d-none d-sm-inline d-lg-none"
                  alt="產品banner"
                />
                <img
                  src="@/assets/images/static/banner_01_mobile.jpg"
                  class="img-fluid d-inline d-sm-none"
                  alt="產品banner"
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselHome"
              data-bs-slide="prev"
            >
              <i class="bi bi-chevron-left chevron text-dark fs-3" aria-hidden="true"></i>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselHome"
              data-bs-slide="next"
            >
              <i class="bi bi-chevron-right chevron text-dark fs-3" aria-hidden="true"></i>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
      <section class="kv__product-slide row">
        <div class="col-12">
          <div
            class="product-group d-flex justify-content-center position-absolute bottom-0 start-50 w-100"
          >
            <div class="product-group__item">
              <router-link to="/thermos/classic-green" class="text-decoration-none">
                <span class="color-dot bg-classic-green mx-auto my-3"></span>
                <div class="title fw-bold fs-6 text-classic-green text-center mb-3">
                  <span class="bg-light px-1 rounded">胡克綠</span>
                </div>
                <img
                  src="@/assets/images/static/bottle_hookers_green.svg"
                  alt="胡克綠保溫瓶圖片"
                  class="w-100 static-item"
              /></router-link>
            </div>
            <div class="product-group__item">
              <router-link to="/thermos/classic-red" class="text-decoration-none">
                <span class="color-dot bg-classic-red mx-auto my-3"></span>
                <div class="title fw-bold fs-6 text-classic-red text-center mb-3">
                  <span class="bg-light px-1 rounded">灰玫紅</span>
                </div>
                <img
                  src="@/assets/images/static/bottle_old_rose.svg"
                  alt="灰玫紅保溫瓶圖片"
                  class="w-100 static-item"
              /></router-link>
            </div>
            <div class="product-group__item">
              <router-link to="/thermos/classic-blue" class="text-decoration-none">
                <span class="color-dot bg-classic-blue mx-auto my-3"></span>
                <div class="title fw-bold fs-6 text-classic-blue text-center mb-3">
                  <span class="bg-light px-1 rounded">灰丁寧藍</span>
                </div>
                <img
                  src="@/assets/images/static/bottle_blue_yonder.svg"
                  alt="灰丁寧藍保溫瓶圖片"
                  class="w-100 static-item"
              /></router-link>
            </div>
          </div>
        </div>
      </section>
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
  computed: {
    pageHeight() {
      return this.innerHeight - 90;
    },
  },
  methods: {
    initHeight() {
      const vh = window.innerHeight;
      this.innerHeight = vh;
    },
  },
  created() {
    window.addEventListener('resize', this.initHeight);
  },
};
</script>

<style lang="scss" scoped>
.kv {
  &__content {
    height: 75%;
  }
  &__product-slide {
    height: 20%;
  }
}

.product-group {
  transform: translate(-50%, 60%);
  @media (max-width: 768px) {
    transform: translate(-50%, 40%);
  }
  &__item {
    transition: transform 250ms;
    transition-timing-function: linear;
    margin: 3rem;
    position: relative;
    animation: float 3s ease-in-out infinite;
    @media (max-width: 768px) {
      margin: 0.5rem;
    }
    .color-dot {
      display: block;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 100%;
      border: 2px solid white;
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

.chevron {
  background: rgba(0, 0, 0, 0.06);
  padding: 0rem 0.4375rem;
  border-radius: 50%;
}

.static-item {
  max-height: 600px;
}

@keyframes float {
  0% {
    top: 0px;
  }
  50% {
    top: 20px;
  }
  100% {
    top: 0px;
  }
}
</style>
