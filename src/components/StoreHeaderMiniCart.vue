<template>
  <div class="dropdown position-relative">
    <button id="cart" class="btn" type="button" @click="show = !show">
      <i class="bi bi-cart fs-4"></i>
      <span
        class="
          position-absolute
          top-28
          start-75
          translate-middle
          badge
          rounded-pill
          bg-danger
        "
      >
        <!-- L:75 T:28 -->
        0
        <span class="visually-hidden">unread messages</span>
      </span>
    </button>
    <Transition>
      <div
        v-if="show"
        class="
          container-fluid
          border
          position-absolute
          end-50
          bg-white
          overflow-auto
          mh-70
        "
        style="width: 20rem"
      >
        <!-- cart=title -->
        <div class="row py-2 border-bottom">
          <div class="col">購物車</div>
        </div>
        <!-- card-item -->
        <div class="card border-0" style="max-width: 540px">
          <div class="row g-0 align-items-center">
            <div class="col-5">
              <img
                src="https://fakeimg.pl/104x102/200"
                class="img-thumbnail rounded"
                alt="..."
              />
            </div>
            <div class="col-7">
              <div class="card-body">
                <span class="card-text">胡克綠</span>
                <h5 class="card-title fs-6">單色不鏽鋼保溫瓶</h5>
                <p class="card-text m-0">NT $600</p>
                <span class="card-text"> 數量： 1 </span>
                <button
                  type="button ms-auto"
                  class="btn bi bi-trash align-middle ms-4"
                ></button>
              </div>
            </div>
          </div>
        </div>
        <!-- cart-footer -->
        <div class="row border-top">
          <div class="col-12 py-2 d-flex justify-content-between">
            <p>合計</p>
            <p class="fw-medium">NT$ 1,200</p>
          </div>
          <div class="col-12">
            <div class="btn-group w-100">
              <router-link
                :to="{ path: '/user/cart' }"
                class="btn btn-outline-secondary w-45 mr-2 mb-3"
                >查看購物車</router-link
              >
              <router-link
                :to="{ path: '/user/cart/checkout' }"
                class="btn btn-secondary w-45 ms-2 mb-3"
                >結帳</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.dropdown-menu {
  left: auto;
  right: 0;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
