<template>
  <div class="container p-3 p-md-5">
    <div class="row">
      <div class="col">
        <StoreUserCartProductTable :isSummary="true" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <StoreUserCartOrderTable :form="tempForm" />
      </div>
    </div>
    <div class="row justify-content-center mt-3">
      <div class="col-6 col-lg-3">
        <button
          type="button"
          class="btn btn-outline-secondary rounded-pill w-100 py-2"
          @click="$router.push({ name: 'order' })"
        >
          上一步
        </button>
      </div>
      <div class="col-6 col-lg-3">
        <button
          type="button"
          class="btn btn-dark rounded-pill w-100 py-2"
          @click="placeOrder"
          :disabled="isLoading"
        >
          <div
            v-if="isLoading"
            class="spinner-border spinner-border-sm text-light"
            role="status"
          ></div>
          確認訂單
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { apiPostOrder } from '@/api/client';
import StoreUserCartProductTable from '@/components/StoreUserCartProductTable.vue';
import StoreUserCartOrderTable from '@/components/StoreUserCartOrderTable.vue';
import { mapWritableState } from 'pinia';
import statusStore from '@/stores/statusStore';

export default {
  components: {
    StoreUserCartProductTable,
    StoreUserCartOrderTable,
  },
  props: {
    tempForm: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      orderId: '',
      isLoading: false,
    };
  },
  computed: {
    ...mapWritableState(statusStore, ['apiRequestIsFailed', 'apiErrorMessage']),
  },
  methods: {
    async placeOrder() {
      this.isLoading = true;

      try {
        const result = await apiPostOrder({ data: this.tempForm });

        this.orderId = result.data.orderId;
      } catch (err) {
        this.apiRequestIsFailed = true;
        this.apiErrorMessage = err;
      }

      this.isLoading = false;
      this.$router.push({ name: 'checkoutOrder', params: { orderId: this.orderId } });
    },
  },
};
</script>

<style lang="scss" scoped></style>
