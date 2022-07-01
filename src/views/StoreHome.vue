<template>
  <main class="kv bg-light">
    <div
      class="container-fluid apple overflow-hidden position-relative"
      :style="{ height: `${innerHeight}px` }"
    >
      <div class="row text-center">
        <div class="col-12">
          <section class="position-absolute top-40 start-50 translate-middle w-100">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
              <!-- <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div> -->
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <h1 ref="title">
                    單色不鏽鋼保溫瓶 <br />
                    輕便保溫，易洗防沾 <br />
                  </h1>
                  <p class="px-3">
                    商品可寄送至臺澎金馬地區，目前暫不提供海外運送服務。所有商品皆於臺灣製造。
                  </p>
                </div>
                <div class="carousel-item"></div>
                <div class="carousel-item"></div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <i class="bi bi-chevron-left chevron text-dark fs-3" aria-hidden="true"></i>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <i class="bi bi-chevron-right chevron text-dark fs-3" aria-hidden="true"></i>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </section>
          <!-- <section class="position-absolute top-40 start-50 translate-middle w-100">
            <h1 ref="title">
              單色不鏽鋼保溫瓶 <br />
              輕便保溫，易洗防沾 <br />
            </h1>
            <p class="px-3">
              商品可寄送至臺澎金馬地區，目前暫不提供海外運送服務。所有商品皆於臺灣製造。
            </p>
          </section> -->
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <section
            class="kv__product d-flex justify-content-center position-absolute bottom-0 start-50 w-100"
          >
            <div class="kv__product-card">
              <router-link to="/thermos/classic-green" class="text-decoration-none">
                <span class="color-dot bg-classic-green mx-auto my-3"></span>
                <div class="title fw-bold fs-6 text-classic-green text-center mb-3">胡克綠</div>
                <img
                  src="@/assets/images/static/bottle_hookers_green.svg"
                  alt="胡克綠保溫瓶圖片"
                  class="w-100 static-item"
              /></router-link>
            </div>
            <div class="kv__product-card">
              <router-link to="/thermos/classic-red" class="text-decoration-none">
                <span class="color-dot bg-classic-red mx-auto my-3"></span>
                <div class="title fw-bold fs-6 text-classic-red text-center mb-3">灰玫紅</div>
                <img
                  src="@/assets/images/static/bottle_old_rose.svg"
                  alt="灰玫紅保溫瓶圖片"
                  class="w-100 static-item"
              /></router-link>
            </div>
            <div class="kv__product-card">
              <router-link to="/thermos/classic-blue" class="text-decoration-none">
                <span class="color-dot bg-classic-blue mx-auto my-3"></span>
                <div class="title fw-bold fs-6 text-classic-blue text-center mb-3">灰丁寧藍</div>
                <img
                  src="@/assets/images/static/bottle_blue_yonder.svg"
                  alt="灰丁寧藍保溫瓶圖片"
                  class="w-100 static-item"
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
    @media (max-width: 768px) {
      transform: translate(-50%, 40%);
    }
    &-card {
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

.chevron {
  background: rgba(0, 0, 0, 0.06);
  padding: 0rem 0.4375rem;
  border-radius: 50%;
}

.static-item {
  max-height: 650px;
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
