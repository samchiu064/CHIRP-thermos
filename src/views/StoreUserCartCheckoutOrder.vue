<template>
  <div class="row py-2">
    <div class="col">
      <p class="fs-4 text-center">
        <i class="bi bi-check2-circle text-success"></i> 感謝您的購買，您的訂單
        <span class="text-success">{{ order.id }}</span> 已建立成功
      </p>
    </div>
  </div>
  <div class="col-lg-6 m-auto">
    <StoreUserCartOrderList :order="order" />
    <StoreUserCartOrderTable :form="tempForm" />
  </div>

  <div class="row justify-content-center mt-3">
    <div class="col-5 col-lg-3">
      <button
        type="button"
        class="btn btn-outline-secondary rounded-pill w-100 py-2"
        @click="this.$router.push({ name: 'thermosClassicDetails' })"
      >
        繼續購物
      </button>
    </div>
    <div class="col-5 col-lg-3">
      <button type="button" class="btn btn-dark rounded-pill w-100 py-2" onclick="window.print()">
        列印此頁
      </button>
    </div>
  </div>
</template>

<script>
import StoreUserCartOrderList from '@/components/StoreUserCartOrderList.vue';
import StoreUserCartOrderTable from '@/components/StoreUserCartOrderTable.vue';
import { useCartStore } from '@/stores/cartStore';
import { mapActions } from 'pinia';

export default {
  components: {
    StoreUserCartOrderList,
    StoreUserCartOrderTable,
  },
  props: {
    order: {
      type: Object,
      default: () => {},
    },
    tempForm: {
      type: Object,
      default: () => {},
    },
    paymentMethod: {
      type: String,
      default: '',
    },
  },
  emits: ['getOrderList'],
  methods: {
    ...mapActions(useCartStore, ['getCartList']),
  },
  created() {
    this.getCartList(); // Cart should be refreshed manually after being checked-out
    this.$emit('getOrderList', this.$route.params.orderId); // Update props: order
  },
};
</script>
