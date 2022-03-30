<template>
  <main class="container-fluid showcase">
    <article
      class="
        row
        showcase__content
        showcase__content--bg-radius
        showcase__content--size-vh
        showcase__content--position-center
        vh-100
      "
    >
      <section
        class="
          col-7 col-md-4
          feature
          flex-column
          justify-content-between
          mt-4
          p-0
          feature--position-mobile
          d-flex
        "
      >
        <div class="feature__description feature__description--position-end">
          <!-- <div class="line">
                  <span></span>
                </div> -->
          <h2 class="heading heading__badge heading__badge--position-front">
            第一行文字字 <br />
            第二行文字 <br />
            第三行文字文字文字
          </h2>
          <p class="paragraph">
            後自地作法畫法裡然政：精指條提長<br />
            氣理不走皮開動。電花飛主人各<br />
            散他有年演那臺麼子。
          </p>
          <span class="paragraph paragraph--size-sm"
            >※黑空確，友市才部這的我的你是友流子去班終以主這道他好空灣為更</span
          >
        </div>
        <img
          class="feature__image feature__image--size-flex d-none d-md-flex"
          src="../assets/images/bottle_open_hookers_green.png"
          alt="胡克綠保溫瓶"
        />
      </section>
      <section
        class="
          col-4
          merchandise
          m-auto
          text-center
          p-0
          d-flex
          align-items-center
          flex-column
        "
      >
        <img
          class="merchandise__image merchandise__image--size-flex z-index-2"
          src="../assets/images/showcase_hookers_green.png"
          alt="胡克綠保溫瓶"
        />
        <button
          type="button"
          class="btn btn-outline-secondary btn--theme-classic mt-3 mt-sm-4"
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
        <img
          class="
            accessory__image
            accessory__image--size-flex
            accessory__image--slide-left
          "
          src="../assets/images/bottle_cap_hookers_green.png"
          alt="胡克綠保溫瓶瓶蓋"
        />
        <div class="accessory__description align-self-start me-4 mt-4">
          <!-- <div class="line">
                  <span></span>
                </div> -->
          <h2 class="heading">
            第一行文字字文字 <br />
            第二行文字文字文字文字 <br />
          </h2>
          <p class="paragraph">
            黑空確，友市才部這的我的你是友流子去班終以主這道他好
          </p>
          <span class="paragraph paragraph--size-sm"
            >※黑空確，友市才部這的我的你是友流子去班終以主這道他好空灣為更</span
          >
        </div>
        <div class="benefit benefit--slide-topleft d-flex align-items-end">
          <div class="benefit__description">
            <p class="paragraph paragraph--size-sm">※最長可保溫24小時</p>
          </div>
          <img
            class="
              benefit__image
              benefit__image--size-flex
              benefit__image--position-flex
            "
            src="../assets/images/benefit_hookers_green.png"
            alt="胡克綠保溫瓶保溫效果圖"
          />
        </div>
      </section>
      <!-- <div class="switch-nav"></div> -->
    </article>
    <!-- <section class="scroll-block"></section> -->
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// Globe
::-moz-selection {
  /* Code for Firefox */
  background: yellow;
}

::selection {
  background: yellow;
}

.scroll-block {
  width: 100vw;
  height: 100vh;
  background-color: #000;
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
    &--color {
      &-green {
        &::before {
          background-color: #4d6d58;
        }
      }
      &-red {
        &::before {
          background-color: #cc7e85;
        }
      }
      &-blue {
        &::before {
          background-color: #496da5;
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
  &--position-mobile {
    @media (max-width: 576px) {
      position: absolute;
    }
  }
  &__image {
    position: relative;
    &--size-flex {
      max-width: 27.8vw;
      @media (max-width: 992px) {
        max-width: 33.8vw;
      }
    }
  }
  &__description {
    &--position-end {
      position: relative;
      margin-left: 12vw;
    }
  }
}

.merchandise {
  &__image {
    width: auto;
    z-index: 1;
    &--size-flex {
      @media (min-width: 992px) and (max-width: 1200px) {
        max-width: 17vw;
      }
    }
  }
  &__btn {
    &--theme-classic {
      border-radius: 50%;
    }
  }
}

.accessory {
  &__image {
    position: relative;
    &--size-flex {
      max-width: 16vw;
      @media (max-width: 992px) {
        max-width: 20.8vw;
      }
    }
    &--slide-left {
      right: 5vw;
      // top: 1vw;
    }
  }
}

.benefit {
  position: relative;
  &--slide-topleft {
    right: 2vw;
    bottom: 3vw;
  }
  &__image {
    &--size-flex {
      max-width: 9vw;
      @media (max-width: 992px) {
        max-width: 16vw;
      }
    }
  }
}

// .showcase {

//   &__content {
//     display: flex;

//     section {
//       // background-color: seagreen;
//       // border: 1px solid black;
//       // margin: 1px;
//       text-align: left;
//       &.feature {
//         margin-top: 70px;
//         display: flex;
//         flex-direction: column;
//         justify-content: space-between;
//         .description {
//           margin-left: 12vw;
//           h2 {
//             position: relative;
//             text-decoration: underline;
//             text-underline-offset: 0.1em;
//             line-height: 2.875rem;
//             &::before {
//               font-size: 0.8rem;
//               display: flex;
//               width: 4.3125rem;
//               height: 4.3125rem;
//               background-color: #4d6d58;
//               border-radius: 50%;
//               position: absolute;
//               left: -80px;
//               content: '臺灣MIT微笑標章';
//               color: white;
//               text-align: center;
//               align-items: center;
//               line-height: 1.1rem;
//               font-weight: 300;
//             }
//           }
//           p {
//             font-weight: 300;
//           }
//           span {
//             font-weight: 300;
//           }
//         }
//         .line {
//           span {
//             display: block;
//             width: 14vw;
//             border: 1px #383838 dashed;
//             transform: rotate(21deg);
//             position: relative;
//             left: 19vw;
//             top: 12vh;
//           }
//         }
//         img {
//           max-width: 27.8vw;
//         }
//       }
//       &.product {
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         img {
//           max-width: 100%;
//           height: auto;
//         }
//       }
//       &.accessory {
//         display: flex;
//         flex-direction: column;
//         justify-content: space-between;
//         .line {
//           span {
//             display: block;
//             width: 20vh;
//             border: 1px #383838 dashed;
//             position: relative;
//             left: 12vw;
//             bottom: 5.5vw;
//             transform: rotate(90deg);
//           }
//         }
//         .description {
//           margin-top: 4rem;
//           h2 {
//             text-decoration: underline;
//             text-underline-offset: 0.1em;
//             line-height: 2.875rem;
//           }
//           p {
//             font-weight: 300;
//           }
//           span {
//             font-weight: 300;
//           }
//         }
//         & > img {
//           max-width: 20vw;
//           height: auto;
//           align-self: flex-end;
//           position: relative;
//           right: 5vw;
//           top: 1vw;
//         }
//         .benefit {
//           align-self: flex-end;
//           position: relative;
//           right: 2vw;
//           bottom: 3vw;
//           display: flex;
//           align-items: flex-end;
//           img {
//             max-width: 14vw;
//             height: auto;
//           }
//         }
//       }
//     }
//   }
// }
</style>
