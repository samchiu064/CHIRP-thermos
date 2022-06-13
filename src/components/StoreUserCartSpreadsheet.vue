<template>
  <div class="col-12 col-lg-4">
    <div class="card">
      <h4 class="card-header fs-6 py-2 text-center">您的訂單</h4>
      <ul class="list-group list-group-flush">
        <li
          class="list-group-item d-flex justify-content-between align-items-center py-3 px-0 mx-3"
        >
          <h5 class="fs-6 m-0 fw-normal">小計</h5>
          <p class="fs-6 m-0 fw-medium">NT$ {{ cart.total?.toLocaleString('en-us') }}</p>
        </li>
        <li
          class="list-group-item d-flex justify-content-between align-items-center py-3 px-0 mx-3"
        >
          <h5 class="fs-6 m-0 fw-normal">運費</h5>
          <p class="fs-6 m-0 fw-medium">免運費</p>
        </li>
        <li class="list-group-item accordion accordion-flush py-3 px-0 mx-3">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed px-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="true"
                aria-controls="flush-collapseOne"
              >
                套用折扣碼
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <ul class="list-group-flush ps-0">
                  <li
                    v-for="(item, index) in couponList"
                    :key="item + index"
                    class="d-flex justify-content-between ps-2"
                  >
                    <p>{{ item }}</p>
                    <p>已套用</p>
                  </li>
                  <li class="d-flex justify-content-between ps-2">
                    <input
                      class="form-control form-control-sm w-70"
                      type="text"
                      placeholder="請輸入折扣碼 summer"
                      aria-label="折扣碼輸入處"
                      v-model="couponCode"
                      @click="
                        () => {
                          (couponIsValid = true), (couponIsApplied = false);
                        }
                      "
                    />
                    <button type="button" class="btn btn-outline-secondary" @click="addCoupon()">
                      套用
                    </button>
                  </li>
                </ul>
                <span
                  v-if="(!couponIsValid && couponCode.length !== 0) || couponIsApplied"
                  class="text-danger fs-7 ps-3 m-0"
                >
                  {{ errorMessage }}
                </span>
              </div>
            </div>
          </div>
        </li>
        <li
          class="list-group-item d-flex justify-content-between align-items-center pt-3 px-0 mx-3 border-bottom-0"
        >
          <h5 class="fs-6 m-0">折扣</h5>
          <p class="fs-6 m-0 fw-medium">- {{ discount?.toLocaleString('en-us') }}</p>
        </li>
        <li
          class="list-group-item d-flex justify-content-between align-items-center pb-3 px-0 mx-3 border-bottom-0"
        >
          <h5 class="fs-5 m-0 fw-bold">總計</h5>
          <p class="fs-5 m-0 fw-bold">NT ${{ cart.final_total?.toLocaleString('en-us') }}</p>
        </li>
        <li
          class="list-group-item d-flex justify-content-between align-items-center py-3 px-0 mx-3"
        >
          <button
            type="button"
            class="btn btn-dark w-100 rounded-pill"
            :disabled="
              this.cart.carts?.length === 0 || (this.$route.name === 'order' && !formIsValid)
            "
            @click="this.$router.push({ name: nextPage })"
          >
            下一步
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useCouponStore } from '@/stores/couponStore';
import { useCartStore } from '@/stores/cartStore';
import { mapActions, mapState, mapWritableState } from 'pinia';
import statusStore from '@/stores/statusStore';

export default {
  props: {
    nextPage: {
      type: String,
      required: true,
    },
    formIsValid: {
      type: Boolean,
      default: () => true,
    },
  },
  computed: {
    errorMessage() {
      if (!this.couponIsValid) return '無效的優惠券';
      if (this.couponIsApplied) return '已套用的優惠券';
      return '';
    },
    ...mapState(useCartStore, ['discount']),
    ...mapWritableState(useCartStore, ['cart']),
    ...mapWritableState(useCouponStore, ['couponCode', 'couponList']),
    ...mapWritableState(statusStore, ['couponIsApplied', 'couponIsValid']),
  },
  methods: {
    async addCoupon() {
      await this.applyCoupon();
      await this.getCartList();
    },
    ...mapActions(useCartStore, ['getCartList']),
    ...mapActions(useCouponStore, ['applyCoupon']),
  },
};
</script>

<style lang="scss" scoped>
.card,
.card-header,
.accordion-item,
.accordion-button,
.list-group-item,
.form-control {
  background-color: transparent !important;
}
</style>
