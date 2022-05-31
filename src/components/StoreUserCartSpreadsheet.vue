<template>
  <div class="col-12 col-lg-4">
    <div class="card">
      <h4 class="card-header fs-6 py-2 text-center">您的訂單</h4>
      <ul class="list-group list-group-flush">
        <li
          class="list-group-item d-flex justify-content-between align-items-center py-3 px-0 mx-3"
        >
          <h5 class="fs-6 m-0 fw-normal">小計</h5>
          <p class="fs-6 m-0 fw-medium">NT ${{ cart.total?.toLocaleString('en-us') }}</p>
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
                aria-expanded="false"
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
                      placeholder="請輸入折扣碼"
                      aria-label="折扣碼輸入處"
                      v-model="couponCode"
                      @click="
                        () => {
                          (couponIsInvalid = false), (couponIsApplied = false);
                        }
                      "
                    />
                    <button type="button" class="btn btn-outline-secondary" @click="applyCoupon()">
                      套用
                    </button>
                  </li>
                </ul>
                <p v-if="couponIsInvalid || couponIsApplied" class="text-danger fs-7 ps-3 m-0">
                  {{ errorMessage }}
                </p>
              </div>
            </div>
          </div>
        </li>
        <li
          class="list-group-item d-flex justify-content-between align-items-center pt-3 px-0 mx-3 border-bottom-0"
        >
          <h5 class="fs-6 m-0">折扣</h5>
          <p class="fs-6 m-0 fw-medium">NT$ {{ discount?.toLocaleString('en-us') }}</p>
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
            :class="{ disabled: !formIsValid && this.$route.name === 'order' }"
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
import statusStore from '@/stores/statusStore';
import { mapActions, mapWritableState } from 'pinia';

export default {
  props: {
    nextPage: {
      type: String,
      required: true,
    },
    cart: {
      type: Object,
      default: () => {},
    },
    formIsValid: {
      type: Boolean,
      default: () => true,
    },
  },
  data() {
    return {};
  },
  computed: {
    discount() {
      return this.cart.final_total - this.cart.total;
    },
    errorMessage() {
      if (this.couponIsInvalid) return '無效的優惠券';
      if (this.couponIsApplied) return '已套用的優惠券';
      return '';
    },
    ...mapWritableState(useCouponStore, ['couponCode', 'couponList']),
    ...mapWritableState(statusStore, ['couponIsApplied', 'couponIsInvalid']),
  },
  methods: {
    ...mapActions(useCouponStore, ['applyCoupon']),
  },
};
</script>

<style lang="scss" scoped></style>
