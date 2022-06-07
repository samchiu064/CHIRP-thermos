<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col col-lg-6">
        <p class="text-center">請輸入您的訂單號碼</p>
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
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            @click="getOrderList(orderId)"
          >
            查詢
          </button>
        </div>
        <span
          v-if="!orderIsValid && orderId.length !== 0 && orderId.length < 20"
          class="text-danger fs-7 ps-3 m-0"
          >無效的訂單號碼，請輸入 20 個字元
        </span>
      </div>
    </div>
    <div class="row justify-content-center m-0 mt-4">
      <div class="col col-lg-6">
        <StoreUserCartOrderList v-if="orderIsValid" />
      </div>
    </div>
    <div class="row justify-content-center m-0">
      <div class="col col-lg-6">
        <StoreUserCartOrderTable v-if="orderIsValid" />
      </div>
    </div>
  </div>

  <StoreFooter />
</template>

<script>
import { useOrderStore } from '@/stores/orderStore';
import statusStore from '@/stores/statusStore';
import { mapState, mapActions } from 'pinia';
import StoreUserCartOrderList from '@/components/StoreUserCartOrderList.vue';
import StoreUserCartOrderTable from '@/components/StoreUserCartOrderTable.vue';
import StoreFooter from '@/components/StoreFooter.vue';

export default {
  components: {
    StoreUserCartOrderList,
    StoreUserCartOrderTable,
    StoreFooter,
  },
  data() {
    return {
      orderId: '',
    };
  },
  computed: {
    ...mapState(useOrderStore, ['form', 'order']),
    ...mapState(statusStore, ['orderIsValid']),
  },
  methods: {
    ...mapActions(useOrderStore, ['getOrderList']),
  },
};
</script>
