<template>
  <div class="row py-2">
    <div class="col">
      <p class="fs-4 text-center">
        <i class="bi bi-check2-circle text-success"></i> 感謝您的購買，您的訂單
        <span class="text-success">{{ order.id }}</span> 已建立成功
      </p>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-6 m-auto">
      <form class="subscription-box">
        <p>訂閱電子報</p>
        <label for="email" class="form-label col-12 px-4 mb-3"
          >Email<i class="asterisk"></i>
          <VField
            name="Email欄位"
            type="email"
            rules="email|required"
            class="form-control mt-1"
            id="email"
            placeholder="請填入要被通知的Email"
          />
          <ErrorMessage name="Email欄位" class="text-danger fs-7 ps-2 m-0" />
          <button type="submit" class="btn btn-primary" @click.prevent>Submit</button>
        </label>
      </form>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-6 m-auto">
      <StoreUserCartOrderList :order="order" />
      <StoreUserCartOrderTable :form="tempForm" />
    </div>
  </div>

  <div class="row justify-content-center mt-3">
    <div class="col-5 col-lg-3">
      <button
        type="button"
        class="btn btn-outline-secondary rounded-pill w-100 py-2"
        @click="this.$router.push({ name: 'OrderCheck' })"
      >
        查詢訂單
      </button>
    </div>
    <div class="col-5 col-lg-3">
      <button type="button" class="btn btn-dark rounded-pill w-100 py-2" @click="printWindow">
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
    printWindow() {
      window.print();
    },
    ...mapActions(useCartStore, ['getCartList']),
  },
  created() {
    this.$Progress.start();
    // Update the information of cart & order to the latest
    this.getCartList();
    this.$emit('getOrderList', this.$route.params.orderId);
    this.$Progress.finish();
  },
};
</script>
