<template>
  <StoreHeader :positionType="'position-fixed'" />
  <main class="kv bg-light">
    <div class="container-fluid h-100">
      <div class="row align-items-center">
        <div class="col-12 position-relative">
          <section class="kv__content">
            <h1>
              單色不鏽鋼保溫瓶 <br />
              廣口瓶身，堅固耐用 <br />
            </h1>
            <p>
              商品可寄送至臺澎金馬地區，目前暫不提供海外運送服務。所有商品皆於臺灣製造。
            </p>
          </section>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <section class="kv__products">
            <div class="kv__products-card">
              <span class="color-dot"></span>
              <div class="title">胡克綠</div>
              <div class="body">
                <img
                  src="../assets/images/Hookers_green_bottle.png"
                  alt="胡克綠保溫瓶"
                />
              </div>
            </div>
            <div class="kv__products-card">
              <span class="color-dot"></span>
              <div class="title">灰玫紅</div>
              <div class="body">
                <img
                  src="../assets/images/Old_rose_bottle.png"
                  alt="灰玫紅保溫瓶"
                />
              </div>
            </div>
            <div class="kv__products-card">
              <span class="color-dot"></span>
              <div class="title">灰丁寧藍</div>
              <div class="body">
                <img
                  src="../assets/images/Blue_yonder_bottle.png"
                  alt="灰丁寧藍保溫瓶"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import StoreHeader from '../components/StoreHeader.vue';

export default {
  components: {
    StoreHeader,
  },
};
</script>

<style lang="scss" scoped>
.kv {
  height: 100vh;
  overflow: hidden;
  @media (max-width: 992px) {
    height: 100vh;
  }
  .row {
    &:nth-child(1) {
      height: 90%;
      @media (max-width: 576px) {
        height: 93%;
      }
      .col-12 {
        bottom: 6rem;
      }
    }
    &:nth-child(2) {
      height: 10%;
      background-color: #fff;
      @media (max-width: 576px) {
        height: 7%;
      }
    }
  }
  &__content {
    text-align: center;
    p {
      color: #383838;
      margin: 15px 20px;
      font-weight: 400;
    }
  }
  &__products {
    display: flex;
    justify-content: center;
    text-align: center;
    height: 262px;
    position: relative;
    left: 50%;
    bottom: 25vh;
    transform: translate(-50%, 40px);
    width: 100%;
    @media (max-width: 768px) {
      bottom: 22vh;
    }
    &-card {
      font-weight: Bold;
      font-size: 16px;
      margin: 0 4vw;
      transition: transform 250ms;
      transition-timing-function: linear;
      &:nth-child(1) {
        color: #4d6d58;
        .color-dot {
          background-color: #4d6d58;
        }
      }
      &:nth-child(2) {
        color: #cc7e85;
        .color-dot {
          background-color: #cc7e85;
        }
      }
      &:nth-child(3) {
        color: #496da5;
        .color-dot {
          background-color: #496da5;
        }
      }
      .title {
        margin-bottom: 20px;
      }
      .color-dot {
        display: block;
        margin: 1rem auto;
        width: 24px;
        height: 24px;
        border-radius: 100%;
        @media (max-width: 768px) {
          width: 16px;
          height: 16px;
        }
      }
      &:hover {
        // height: 325px;
        transform: translateY(-40px);
        transition: all 0.3s;
        cursor: pointer;
      }
    }
    img {
      // max-width: 100%;
      // height: auto;
      @media (max-width: 992px) {
        width: 83%;
      }
    }
  }
}
</style>
