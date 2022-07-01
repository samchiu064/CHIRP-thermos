<template>
  <section class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-3">
    <span class="col-12 col-md-12 col-lg-12"> 即將上架 </span>
    <div class="col" v-for="(item, index) in products" :key="item + index">
      <div class="card pe-auto">
        <div class="position-relative">
          <img :src="item.imageUrl" class="img-box rounded w-100" alt="商品圖片" />
          <div class="overlay w-100 h-100 position-absolute top-0 start-0">
            <div class="calendar-box position-absolute top-50 start-50 translate-middle">
              <p class="text-center my-1">上架時通知我</p>
              <div class="calendar-links d-flex">
                <a
                  href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20220729%2F20220730&details=%E9%97%9C%E6%B3%A8%E6%88%91%E5%80%91%3A%20https%3A%2F%2Fsamchiu064.github.io%2FCHIRP-thermos%2F%23%2F&text=CHIRP%20%E9%B3%A5%E7%89%8C%E4%BF%9D%E6%BA%AB%E7%93%B6%E6%96%B0%E5%93%81%E4%B8%8A%E6%9E%B6%20-%20%E6%96%B0%E4%B8%80%E4%BB%A3%E4%BF%9D%E5%86%B7%E7%93%B6%20-%20%E7%B9%BD%E7%B4%9B%E8%89%B2%E5%BD%A9"
                  title="將活動加入到我的行事曆"
                  class="calendar-link m-3 mt-2"
                  target="_blank"
                >
                  <span class="visually-hidden">加入到我的 Google 行事曆</span>
                  <img src="@/assets/images/calendar_links/google.svg" alt="google 行事曆連結" />
                </a>
                <a
                  href="https://outlook.live.com/calendar/0/deeplink/compose?allday=true&body=%E9%97%9C%E6%B3%A8%E6%88%91%E5%80%91%3A%20https%3A%2F%2Fsamchiu064.github.io%2FCHIRP-thermos%2F%23%2F&enddt=2022-07-30T16%3A00%3A00%2B00%3A00&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2022-07-29T16%3A00%3A00%2B00%3A00&subject=CHIRP%20%E9%B3%A5%E7%89%8C%E4%BF%9D%E6%BA%AB%E7%93%B6%E6%96%B0%E5%93%81%E4%B8%8A%E6%9E%B6%20-%20%E6%96%B0%E4%B8%80%E4%BB%A3%E4%BF%9D%E5%86%B7%E7%93%B6%20-%20%E7%B9%BD%E7%B4%9B%E8%89%B2%E5%BD%A9"
                  title="將活動加入到我的行事曆"
                  class="calendar-link m-3 mt-2"
                  target="_blank"
                >
                  <span class="visually-hidden">加入到我的 Outlook 行事曆</span>
                  <img src="@/assets/images/calendar_links/outlook.svg" alt="outlook 行事曆連結" />
                </a>
                <a
                  href="https://calendar.yahoo.com/?desc=%E9%97%9C%E6%B3%A8%E6%88%91%E5%80%91%3A%20https%3A%2F%2Fsamchiu064.github.io%2FCHIRP-thermos%2F%23%2F&dur=allday&et=20220730&st=20220729&title=CHIRP%20%E9%B3%A5%E7%89%8C%E4%BF%9D%E6%BA%AB%E7%93%B6%E6%96%B0%E5%93%81%E4%B8%8A%E6%9E%B6%20-%20%E6%96%B0%E4%B8%80%E4%BB%A3%E4%BF%9D%E5%86%B7%E7%93%B6%20-%20%E7%B9%BD%E7%B4%9B%E8%89%B2%E5%BD%A9&v=60"
                  title="將活動加入到我的行事曆"
                  class="calendar-link m-3 mt-2"
                  target="_blank"
                >
                  <span class="visually-hidden">加入到我的 Yahoo 行事曆</span>
                  <img src="@/assets/images/calendar_links/yahoo.svg" alt="yahoo 行事曆連結" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body">
          <p class="text-center mb-1">
            <i class="bi bi-hand-index fs-5 click-hint"></i>
          </p>
          <h5 class="card-sub-title text-center fs-7 fw-normal">
            {{ item.chtColor }}
          </h5>
          <h4 class="card-title text-center fs-6">{{ item.title }}</h4>
          <hr />
          <p class="card-text text-center fs-6">NT$ {{ item.price.toLocaleString('en-us') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.overlay {
  transition: all 0.5s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    transition: all 0.5s;
    .calendar-box {
      transition: all 0.5s;
      visibility: visible;
      opacity: 1;
    }
  }
}

.calendar {
  &-box {
    visibility: hidden;
    opacity: 0;
    background-color: rgba(248, 249, 250, 0.8);
  }
  &-link {
    width: 28px;
    height: 28px;
  }
}

.click-hint {
  position: relative;
  animation: click-hint 0.9s ease-in-out infinite alternate;
}

@keyframes click-hint {
  from {
    bottom: 0px;
  }
  to {
    bottom: 12px;
  }
}
</style>
