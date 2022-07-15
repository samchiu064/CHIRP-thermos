<template>
  <main class="container mt-5">
    <RouterView
      name="StoreUserCartProgressBar"
      :percentage="progressPercent"
      :enableStepsArray="enableStepsArray"
      :formIsValid="formIsValid"
    />
    <div class="row">
      <RouterView name="StoreUserCartProductTable" :class="columns" />
      <RouterView
        name="StoreUserCartOrderForm"
        :emailValue="tempForm.user.email"
        :nameValue="tempForm.user.name"
        :telValue="tempForm.user.tel"
        :addressValue="tempForm.user.address"
        :messageValue="tempForm.message"
        :paymentMethod="paymentMethod"
        @update:emailValue="(value) => (tempForm.user.email = value)"
        @update:nameValue="(value) => (tempForm.user.name = value)"
        @update:telValue="(value) => (tempForm.user.tel = value)"
        @update:addressValue="(value) => (tempForm.user.address = value)"
        @update:messageValue="(value) => (tempForm.message = value)"
        @update:paymentMethod="(value) => (paymentMethod = value)"
        @validateForm="validateForm"
        class="col-12 col-lg-8"
      />
      <RouterView name="StoreUserCartSpreadsheet" :nextPage="nextPage" :formIsValid="formIsValid" />
    </div>
    <RouterView
      :tempForm="tempForm"
      :paymentMethod="paymentMethod"
      :order="order"
      @getOrderList="getOrderList"
    />
  </main>
</template>

<script>
import { apiGetOrderListById } from '@/api/client';

export default {
  data() {
    return {
      order: {},
      tempForm: {
        user: {
          email: '',
          name: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      paymentMethod: '貨到付款',
      formIsValid: false,
    };
  },
  computed: {
    form() {
      const form = {};
      form.message = this.order.message;
      form.user = { ...this.order.user };
      return form;
    },
    nextPage() {
      if (this.$route.name === 'cart') return 'order';
      if (this.$route.name === 'order') return 'checkout';
      return 'cart';
    },
    progressPercent() {
      if (this.$route.name === 'order') return 50;
      if (this.$route.name === 'checkout') return 100;
      return 0;
    },
    enableStepsArray() {
      if (this.$route.name === 'order') return [1, 2];
      if (this.$route.name === 'checkout') return [1, 2, 3];
      return [1];
    },
    columns() {
      if (this.$route.name === 'checkout') return 'col-12';
      return 'col-12 col-lg-8';
    },
  },
  methods: {
    validateForm(result) {
      this.formIsValid = result;
    },
    async getOrderList(orderId) {
      // Retrieve order data
      const result = await apiGetOrderListById(orderId);
      if (result.data.success === true) {
        this.order = result.data.order;
      }
    },
  },
};
</script>
