<template>
  <div class="container">
    <div class="row justify-content-center mt-6">
      <div class="col col-lg-6">
        <p class="text-center fs-5 fw-medium">請輸入您的 20 碼訂單號碼以獲取訂單資訊</p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col col-lg-6">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="訂單號碼"
            aria-label="訂單號碼"
            aria-describedby="button-addon2"
            maxlength="20"
            v-model="orderId"
          />
          <button
            type="button"
            class="btn btn-outline-secondary"
            id="button-addon2"
            @click="getOrderList(orderId)"
          >
            查詢
          </button>
        </div>
        <span
          v-if="!orderIsValid && orderId.length !== 0 && orderId.length < 20"
          class="text-danger fs-7 ps-3 m-0"
          >錯誤的訂單號碼
        </span>
        <span v-if="orderNotFound" class="text-danger fs-7 ps-3 m-0">找不到這筆訂單 </span>
      </div>
    </div>
    <div class="row justify-content-center m-0 mt-4">
      <div class="col col-lg-6">
        <StoreUserCartOrderList v-if="orderIsValid" :order="order" />
      </div>
    </div>
    <div class="row justify-content-center m-0">
      <div class="col col-lg-6">
        <StoreUserCartOrderTable v-if="orderIsValid" :form="form" />
      </div>
    </div>
  </div>
</template>

<script>
import StoreUserCartOrderList from '@/components/StoreUserCartOrderList.vue';
import StoreUserCartOrderTable from '@/components/StoreUserCartOrderTable.vue';
import { apiGetOrderListById } from '@/api/client';

export default {
  components: {
    StoreUserCartOrderList,
    StoreUserCartOrderTable,
  },
  data() {
    return {
      order: {},
      orderId: '',
      orderIsValid: false,
      orderNotFound: false,
    };
  },
  computed: {
    form() {
      const form = {};
      form.message = this.order.message ?? '';
      form.user = { ...this.order.user };
      return form;
    },
  },
  methods: {
    async getOrderList(orderId) {
      this.orderIsValid = false;
      if (orderId.length < 20) return;

      this.$Progress.start();
      try {
        // Retrieve order data
        const result = await apiGetOrderListById(orderId);
        // No order found
        if (!result.data.order) {
          this.orderNotFound = true;
          this.$Progress.finish();
          return;
        }
        // Order found
        if (result.data.success === true) {
          this.order = result.data.order;
          this.orderNotFound = false;
          this.orderIsValid = true;
        }
        this.$Progress.finish();
      } catch (e) {
        this.$Progress.fail();
        this.orderIsValid = false;
      }
    },
  },
  created() {
    if (this.$route.query.order_id) {
      this.orderId = this.$route.query.order_id;
      this.getOrderList(this.$route.query.order_id);
    }
  },
};
</script>

<style lang="scss" scoped>
.form-control {
  background-color: transparent;
}
</style>
