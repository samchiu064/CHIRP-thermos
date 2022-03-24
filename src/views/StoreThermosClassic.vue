<template>
  <main class="showcase position-relative">
    <div class="container-fluid bg-light h-100">
      <div class="row h-100">
        <div class="col-12 h-100">
          <article class="showcase__product h-100">
            <div class="product col-2 order-3">
              <img src="../assets/showcase_hookers_green.png" alt="胡克綠保溫瓶" />
              <!-- <button type="button" class="btn btn-primary">立即購買</button> -->
            </div>
            <div class="feature col-4 order-2">
              <div class="line">
                <span></span>
              </div>
              <div class="text">
                <h2>
                  第一行文字字 <br />
                  第二行文字 <br />
                  第三行文字文字文字
                </h2>
                <p>
                  後自地作法畫法裡然政：精指條提長<br />
                  氣理不走皮開動。電花飛主人各<br />
                  散他有年演那臺麼子。
                </p>
                <span>※黑空確，友市才部這的我的你是友流子去班終以主這道他好空灣為更</span>
              </div>
            </div>
            <div class="accessory col-4 order-4">Accessory</div>
            <div class="decoration col-1 order-1">
              <!-- Decoration -->
              <img src="../assets/bottle_open_hookers_green.png" alt="胡克綠保溫瓶" />
            </div>
            <div class="benefit col-1 order-5">benefit</div>
          </article>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// Globe
.container-fluid {
  padding: 0;
}

.showcase {
  background: rgb(248, 249, 250);
  background: radial-gradient(
    circle,
    rgba(248, 249, 250, 1) 13%,
    rgba(255, 255, 255, 1) 27%,
    rgba(248, 249, 250, 1) 42%
  );
  color: #383838;
  height: calc(100vh - 5.25rem);
  @media (max-width: 992px) {
    height: calc(100vh - 4.25rem);
  }
  &__product {
    display: flex;
    div {
      // width: 300px;
      // height: 200px;
      background-color: seagreen;
      // border: 1px solid black;
      margin: 1px;
      text-align: left;
      &.decoration {
        align-self: end;
        z-index: 1;
      }
      &.feature {
        margin-top: 70px;
      }
      &.product {
        margin-top: 90px;
        text-align: center;
      }
      &.accessory {
        //   margin-top: 500px;
      }
      // &.benefit {
      //   align-self: end;
      //   margin-bottom: 120px;
      // }
    }
    .product {
      // top: 45%;
    }
    .feature {
      // position: absolute;
      // left: 10%;
      // top: 8%;
      .line {
        span {
          display: block;
          width: 200px;
          border: 2px brown dashed;
        }
      }
      .text {
        h2 {
          text-decoration: underline;
          text-underline-offset: 0.1em;
          line-height: 2.875rem;
          // border-bottom: 1px solid #000;
        }
        p {
          font-weight: 300;
        }
        span {
          font-weight: 300;
        }
      }
    }
  }
}
</style>
