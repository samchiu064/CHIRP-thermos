<template>
  <div class="container p-3 p-md-5 bg-white">
    <div class="row">
      <div class="col">
        <StoreUserCartProductTable :isSummary="true" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <StoreUserCartOrderTable />
      </div>
    </div>
    <div v-if="!isCreated" class="row justify-content-center mt-3">
      <div class="col-6 col-lg-3">
        <button
          type="button"
          class="btn btn-outline-secondary rounded-pill w-100 py-2"
          @click="this.$router.push({ name: 'order' })"
        >
          上一步
        </button>
      </div>
      <div class="col-6 col-lg-3">
        <button
          type="button"
          class="btn btn-dark rounded-pill w-100 py-2"
          @click="confirmOrder"
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
import statusStore from '@/stores/statusStore';
import { useOrderStore } from '@/stores/orderStore';
import { useCartStore } from '@/stores/cartStore';
import { mapActions, mapState } from 'pinia';
import StoreUserCartProductTable from '../components/StoreUserCartProductTable.vue';
import StoreUserCartOrderTable from '../components/StoreUserCartOrderTable.vue';

export default {
  components: {
    StoreUserCartProductTable,
    StoreUserCartOrderTable,
  },
  data() {
    return {
      isCreated: false,
    };
  },
  computed: {
    ...mapState(useCartStore, ['cart']),
    ...mapState(useOrderStore, ['orderId']),
    ...mapState(statusStore, ['isLoading']),
  },
  methods: {
    async confirmOrder() {
      await this.createOrder();
      this.$router.push({ name: 'checkoutOrder', params: { orderId: this.orderId } });
    },
    ...mapActions(useOrderStore, ['createOrder']),
  },
  created() {
    if (this.cart.carts.length === 0) this.$router.push({ name: 'cart' });
  },
};
</script>

<style lang="scss" scoped></style>
