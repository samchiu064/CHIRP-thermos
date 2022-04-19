<template>
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
            :product="classicProduct"
            :imageCategory="'feature'"
            v-if="classicProduct.hasOwnProperty(0)"
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
            :product="classicProduct"
            :imageCategory="'main'"
            v-if="classicProduct.hasOwnProperty(0)"
          />
        </div>
        <button
          type="button"
          class="
            btn btn-outline-secondary btn--theme-classic btn--position-bottom
            mb-3 mb-sm-4
            position-absolute
            start-50
            translate-middle-x
          "
        >
          查看更多
        </button>
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
            :product="classicProduct"
            :imageCategory="'accessory'"
            v-if="classicProduct.hasOwnProperty(0)"
          />
          <!-- <img
            src="../assets/images/bottle_cap_hookers_green.png"
            alt="胡克綠保溫瓶瓶蓋"
          /> -->
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
              :product="classicProduct"
              :imageCategory="'benefit'"
              v-if="classicProduct.hasOwnProperty(0)"
            />
          </div>
        </div>
      </section>
    </article>
    <section class="scroll-block p-0 position-static invisible"></section>
    <section class="scroll-block p-0 position-static invisible"></section>
    <StoreNavbarViewport :classicProduct="classicProduct" />
  </main>
</template>

<script>
import ScrollImage from '../components/ScrollImage.vue';
import StoreNavbarViewport from '../components/StoreNavbarViewport.vue';
import img1 from '../assets/images/bottle_open_hookers_green.png';
import img2 from '../assets/images/bottle_open_old_rose.png';
import img3 from '../assets/images/bottle_open_blue_younder.png';

export default {
  components: {
    ScrollImage,
    StoreNavbarViewport,
  },
  data() {
    return {
      origin: [],
      classicProduct: [],
      tempArr: [
        {
          title: '胡克綠保溫瓶',
          url: img1,
          order: 1,
          color: 'classic-green',
        },
        {
          title: '灰玫紅保溫瓶"',
          url: img2,
          order: 2,
          color: 'classic-red',
        },
        {
          title: '灰丁寧藍保溫瓶',
          url: img3,
          order: 3,
          color: 'classic-blue',
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
  computed: {},
  methods: {
    getProducts() {
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products`,
        )
        .then((res) => {
          if (res.data.success) {
            this.origin = res.data.products; // Save origin data
            this.classicProduct = this.origin.filter(
              (item) => item.category === 'thermos',
            );
          }
          this.addProperty();
          this.sortProduct();
          console.log(this.classicProduct);
        });
    },
    addProperty() {
      this.classicProduct.forEach((item) => {
        const startIndex = item.title.indexOf('-') + 2;
        const chineseName = item.title.slice(startIndex, item.length);

        this.addColor(item, chineseName);
        this.addOrder(item, chineseName);
      });
    },
    convertColor(chineseName) {
      if (chineseName === '胡克綠') return 'classic-green';
      if (chineseName === '灰玫紅') return 'classic-red';
      if (chineseName === '灰丁寧藍') return 'classic-blue';
      return false;
    },
    convertOrder(chineseName) {
      if (chineseName === '胡克綠') return 1;
      if (chineseName === '灰玫紅') return 2;
      if (chineseName === '灰丁寧藍') return 3;
      return false;
    },
    addColor(item, chineseName) {
      Object.defineProperty(item, 'chtColor', {
        value: chineseName,
        writable: false,
      });
      Object.defineProperty(item, 'engColor', {
        value: this.convertColor(chineseName),
        writable: false,
      });
    },
    addOrder(item, chineseName) {
      Object.defineProperty(item, 'order', {
        value: this.convertOrder(chineseName),
        writable: false,
      });
    },
    sortProduct() {
      this.classicProduct.sort((a, b) => a.order - b.order);
    },
  },
  created() {
    this.getProducts();
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
