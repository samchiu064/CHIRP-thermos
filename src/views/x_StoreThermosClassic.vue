<template>
  <StoreHeader :positionType="'position-fixed'" />
  <main class="container-fluid showcase h-100">
    <article
      class="
        showcase__content
        showcase__content--position-center
        showcase__content--bg-radius
        row
        position-sticky
        start-0
        top-0
        overflow-hidden
        vh-100
      "
      ref="firstArticle"
    >
      <section
        class="
          feature feature--position-mobile
          col-7 col-md-4
          d-none d-md-flex
          flex-column
          justify-content-between
          mt-4
          p-0
        "
      >
        <div class="feature__description feature__description--position-end">
          <h2 class="heading heading__badge heading__badge--position-front">
            第一行文字字
            <br />第二行文字 <br />第三行文字文字文字
          </h2>
          <p class="paragraph">
            後自地作法畫法裡然政：精指條提長
            <br />氣理不走皮開動。電花飛主人各 <br />散他有年演那臺麼子。
          </p>
          <span class="paragraph paragraph--size-sm"
            >※黑空確，友市才部這的我的你是友流子去班終以主這道他好空灣為更</span
          >
        </div>
        <div
          class="
            feature-image feature-image--position-bottomleft
            position-relative
            h-100
          "
        >
          <ScrollImage
            :product="products"
            :imageCategory="'feature'"
            v-if="products.hasOwnProperty(0)"
          />
        </div>
      </section>

      <section class="col-12 col-md-4 merchandise p-0">
        <div
          class="
            merchandise-image merchandise-image--position-top
            position-absolute
            start-50
            translate-middle
          "
        >
          <ScrollImage
            :product="products"
            :imageCategory="'main'"
            v-if="products.hasOwnProperty(0)"
          />
        </div>
        <router-link
          to="/thermos/classic/details"
          class="
            btn btn-outline-secondary btn--theme-classic btn--position-bottom
            mb-3 mb-sm-4
            position-absolute
            start-50
            translate-middle-x
          "
        >
          查看更多
        </router-link>
      </section>

      <section
        class="
          col-4
          accessory
          p-0
          flex-column
          align-items-end
          justify-content-between
          d-none d-md-flex
        "
      >
        <div class="accessory-image accessory-image--position-left">
          <ScrollImage
            :product="products"
            :imageCategory="'accessory'"
            v-if="products.hasOwnProperty(0)"
          />
        </div>

        <div class="accessory__description align-self-start me-4 mt-4">
          <h2 class="heading">
            第一行文字字
            <br />第二行文字文字文
            <br />
          </h2>
          <p class="paragraph">
            黑空確，友市才部這的我的你是友流子去班終以主這道他好
          </p>
          <span class="paragraph paragraph--size-sm"
            >※黑空確，友市才部這的我的你是友流子去班終以主這道他好空灣為更</span
          >
        </div>
        <div class="benefit align-self-end mt-3 me-3 position-relative">
          <div class="benefit__description position-relative">
            <p class="paragraph paragraph--size-sm">※最長可保溫24小時</p>
          </div>

          <div class="benefit-image">
            <ScrollImage
              :product="products"
              :imageCategory="'benefit'"
              v-if="products.hasOwnProperty(0)"
            />
          </div>
        </div>
      </section>
    </article>
    <section class="scroll-block p-0 position-static invisible"></section>
    <section class="scroll-block p-0 position-static invisible"></section>
    <StoreNavbarFullscreenArticle :products="products" />
  </main>
</template>

<script>
import StoreHeader from '../components/StoreHeader.vue';
import ScrollImage from '../components/ScrollImage.vue';
import StoreNavbarFullscreenArticle from '../components/StoreNavbarFullscreenArticle.vue';
import fetchDataMixin from '../mixins/fetchDataMixin';

export default {
  components: {
    StoreHeader,
    ScrollImage,
    StoreNavbarFullscreenArticle,
  },
  mixins: [fetchDataMixin],
  data() {
    return {
      isLoading: true,
    };
  },
  methods: {
    async initData() {
      await this.$_fetchDataMixin_getProducts();
      this.$_fetchDataMixin_filterCategory('thermos');
      this.$_fetchDataMixin_addProperty('color');
      this.$_fetchDataMixin_addProperty('order');
      this.$_fetchDataMixin_sortProduct();
    },
  },
  created() {
    this.initData();
    // this.isLoading = false;
  },
};
</script>

<style lang="scss" scoped>
// Globe
::-moz-selection {
  /* Code for Firefox */
  // background: yellow;
}

::selection {
  background: yellow;
}

.scroll-block {
  height: 100vh;
  background-color: palegoldenrod;
}

.heading {
  color: #383838;
  line-height: 2.875rem;
  text-decoration: underline;
  text-underline-offset: 0.1em;
  &__badge {
    &::before {
      display: flex;
      font-size: 0.8rem;
      width: 4.3125rem;
      height: 4.3125rem;
      border-radius: 50%;
      content: "臺灣MIT微笑標章";
      background-color: #000;
      color: white;
      text-align: center;
      align-items: center;
      line-height: 1.1rem;
      font-weight: 300;
      @media (max-width: 576px) {
        display: none;
      }
    }
    &--position {
      &-front {
        &::before {
          position: absolute;
          left: -80px;
        }
      }
    }
  }
}

.paragraph {
  color: #383838;
  font-weight: 300;
  &--size {
    &-sm {
      font-size: 0.875rem;
    }
  }
}

.btn {
  &--theme-classic {
    border-radius: 30px;
    padding: 10px 25px;
  }
  &--position-bottom {
    bottom: 1rem;
    @media (max-width: 576px) {
      bottom: 4rem;
    }
  }
}

.showcase {
  &__content {
    &--bg-radius {
      background: rgb(248, 249, 250);
      background: radial-gradient(
        circle,
        rgba(248, 249, 250, 1) 13%,
        rgba(255, 255, 255, 1) 27%,
        rgba(248, 249, 250, 1) 42%
      );
    }
    &--size-vh {
      height: 100vh;
      @media (max-width: 992px) {
        height: 100vh;
      }
    }
    &--position-center {
      padding-top: 8rem;
    }
  }
}

.feature {
  &-image {
    width: 408px;
    height: 245px;
    max-width: 24.8vw;
    @media (max-width: 992px) {
      max-width: 33.8vw;
    }
    &--position-bottomleft {
      top: 35vh;
      @media (max-width: 1200px) {
        top: 26vh;
      }
      @media (max-width: 992px) {
        top: 35vh;
      }
    }
  }
  &--position-mobile {
    @media (max-width: 576px) {
      position: absolute;
    }
  }
  &__description {
    &--position-end {
      position: relative;
      margin-left: 9vw;
    }
  }
}

.merchandise {
  &-image {
    width: 209px;
    height: 636px;
    max-width: 44.8vw;
    @media (min-width: 1200px) {
      max-width: 17vw;
    }
    @media (min-width: 992px) and (max-width: 1200px) {
      max-width: 16vw;
    }
    &--position-top {
      top: 55%;
    }
  }
}

.accessory {
  &-image {
    width: 203px;
    height: 198px;
    max-width: 16vw;
    @media (max-width: 992px) {
      max-width: 20.8vw;
    }
    &--position-left {
      position: relative;
      right: 4vw;
      // top: 1vw;
    }
  }
}

.benefit {
  &-image {
    width: 191px;
    height: 191px;
    max-width: 10.5vw;
    @media (max-width: 992px) {
      max-width: 16vw;
    }
  }
  &__description {
    right: 10vw;
    bottom: -17vh;
    @media (max-width: 1200px) {
      right: 13vw;
    }
  }
}
</style>
