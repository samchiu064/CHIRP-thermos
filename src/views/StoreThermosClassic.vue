<template>
  <main class="showcase vh-100 position-relative">
    <div class="container-fluid bg-light">
      <div class="row">
        <div class="col-12">
          <article class="showcase__product">
            <div class="product position-absolute start-50 translate-middle">
              <img src="../assets/showcase_hookers_green.png" alt="胡克綠保溫瓶" />
            </div>
            <div class="feature">
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
            <div class="accessory"></div>
            <div class="decoration"></div>
            <div class="benefit"></div>
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
.showcase {
  background: rgb(248, 249, 250);
  background: radial-gradient(
    circle,
    rgba(248, 249, 250, 1) 13%,
    rgba(255, 255, 255, 1) 27%,
    rgba(248, 249, 250, 1) 42%
  );
  color: #383838;
  &__product {
    .product {
      top: 45%;
    }
    .feature {
      position: absolute;
      left: 10%;
      top: 8%;
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
</style>
