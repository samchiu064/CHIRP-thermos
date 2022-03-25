<template>
  <main class="showcase position-relative">
    <div class="container-fluid bg-light h-100">
      <div class="row h-100 p-0 p-0 m-0">
        <div class="col-12 h-100 p-0">
          <article class="showcase__product h-100">
            <section class="feature col-4 order-2">
              <div class="description">
                <!-- <div class="line">
                  <span></span>
                </div> -->
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
              <img src="../assets/bottle_open_hookers_green.png" alt="胡克綠保溫瓶" />
            </section>
            <section class="product col-4 order-3">
              <img src="../assets/showcase_hookers_green.png" alt="胡克綠保溫瓶" />
              <!-- <button type="button" class="btn btn-primary">立即購買</button> -->
            </section>
            <section class="accessory col-4 order-4">
              <img src="../assets/bottle_cap_hookers_green.png" alt="胡克綠保溫瓶瓶蓋" />
              <div class="description">
                <!-- <div class="line">
                  <span></span>
                </div> -->
                <h2>
                  第一行文字字文字 <br />
                  第二行文字文字文字文字 <br />
                </h2>
                <p>黑空確，友市才部這的我的你是友流子去班終以主這道他好</p>
                <span>※黑空確，友市才部這的我的你是友流子去班終以主這道他好空灣為更</span>
              </div>
              <div class="benefit">
                <p>※最長可保溫24小時</p>
                <img src="../assets/benefit_hookers_green.png" alt="胡克綠保溫瓶保溫效果圖" />
              </div>
            </section>
          </article>
          <div class="switch-nav"></div>
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

::-moz-selection {
  /* Code for Firefox */
  background: yellow;
}

::selection {
  background: yellow;
}

// Custom
.showcase {
  color: #383838;
  height: calc(100vh - 5.25rem);
  @media (max-width: 992px) {
    height: calc(100vh - 4.25rem);
  }
  &__product {
    display: flex;
    background: rgb(248, 249, 250);
    background: radial-gradient(
      circle,
      rgba(248, 249, 250, 1) 13%,
      rgba(255, 255, 255, 1) 27%,
      rgba(248, 249, 250, 1) 42%
    );
    section {
      // background-color: seagreen;
      // border: 1px solid black;
      // margin: 1px;
      text-align: left;
      &.feature {
        margin-top: 70px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .description {
          margin-left: 12vw;
          h2 {
            position: relative;
            text-decoration: underline;
            text-underline-offset: 0.1em;
            line-height: 2.875rem;
            &::before {
              font-size: 0.8rem;
              display: flex;
              width: 4.3125rem;
              height: 4.3125rem;
              background-color: #4d6d58;
              border-radius: 50%;
              position: absolute;
              left: -80px;
              content: '臺灣MIT微笑標章';
              color: white;
              text-align: center;
              align-items: center;
              line-height: 1.1rem;
              font-weight: 300;
            }
          }
          p {
            font-weight: 300;
          }
          span {
            font-weight: 300;
          }
        }
        .line {
          span {
            display: block;
            width: 14vw;
            border: 1px #383838 dashed;
            transform: rotate(21deg);
            position: relative;
            left: 19vw;
            top: 12vh;
          }
        }
        img {
          max-width: 27.8vw;
        }
      }
      &.product {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          max-width: 100%;
          height: auto;
        }
      }
      &.accessory {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .line {
          span {
            display: block;
            width: 20vh;
            border: 1px #383838 dashed;
            position: relative;
            left: 12vw;
            bottom: 5.5vw;
            transform: rotate(90deg);
          }
        }
        .description {
          margin-top: 4rem;
          h2 {
            text-decoration: underline;
            text-underline-offset: 0.1em;
            line-height: 2.875rem;
          }
          p {
            font-weight: 300;
          }
          span {
            font-weight: 300;
          }
        }
        & > img {
          max-width: 20vw;
          height: auto;
          align-self: flex-end;
          position: relative;
          right: 5vw;
          top: 1vw;
        }
        .benefit {
          align-self: flex-end;
          position: relative;
          right: 2vw;
          bottom: 3vw;
          display: flex;
          align-items: flex-end;
          img {
            max-width: 14vw;
            height: auto;
          }
        }
      }
    }
  }
}
</style>
