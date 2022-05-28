<template>
  <div class="dropdown position-relative">
    <button id="cart" class="btn" type="button" @click="show = !show">
      <i class="bi bi-cart fs-4"></i>
      <span class="position-absolute top-28 start-75 translate-middle badge rounded-pill bg-danger">
        {{ this.cart.carts?.length }}
        <span class="visually-hidden">unread messages</span>
      </span>
    </button>
    <Transition>
      <div
        v-if="show"
        class="container-fluid border position-absolute end-50 bg-white overflow-auto mh-70"
        style="width: 20rem"
      >
        <!-- cart=title -->
        <div class="row py-2 border-bottom">
          <div class="col">購物車</div>
        </div>
        <!-- card-item -->
        <div class="card border-0" style="max-width: 540px">
          <div
            v-for="(item, index) in cart.carts"
            :key="item + index"
            class="row g-0 align-items-center"
            :class="{
              'td-deleted': cartDeletedItem === item.id,
              'text-muted': cartDeletedItem === item.id,
            }"
          >
            <div class="col-5 border text-center" style="max-width: 114px; max-height: 112px">
              <img
                :src="item.product.imageUrl"
                class="img-fluid p-2 rounded"
                alt="..."
                style="max-height: 112px"
              />
            </div>
            <div class="col-7">
              <div class="card-body">
                <h5 class="card-title fs-6">{{ item.product.title }}</h5>
                <p class="card-text m-0">NT$ {{ item.product.price }}</p>
                <span class="card-text align-middle"> 數量： {{ item.qty }} </span>
                <button
                  v-if="cartDeletedItem !== item.id"
                  type="button"
                  class="btn bi bi-trash float-end"
                  @click="deleteCartItem(item.id)"
                ></button>
                <div
                  v-if="cartDeletedItem === item.id"
                  class="spinner-border spinner-border-sm text-dark float-end m-2"
                  role="status"
                >
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- cart-footer -->
        <div class="row border-top">
          <div class="col-12 py-2 d-flex justify-content-between">
            <p>合計</p>
            <p class="fw-medium">NT$ {{ cart.total.toLocaleString('en-us') }}</p>
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
import { useCartStore } from '@/stores/cartStore';
import { mapState, mapActions } from 'pinia';
import statusStore from '@/stores/statusStore';

export default {
  data() {
    return {
      show: false,
    };
  },
  computed: {
    ...mapState(useCartStore, ['cart']),
    ...mapState(statusStore, ['cartDeletedItem']),
  },
  methods: {
    ...mapActions(useCartStore, ['getCartList', 'deleteCartItem']),
  },
  created() {
    this.getCartList();
  },
};
</script>

<style lang="scss" scoped>
.dropdown-menu {
  left: auto;
  right: 0;
}

.td-deleted {
  background-color: #e9ecef;
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
