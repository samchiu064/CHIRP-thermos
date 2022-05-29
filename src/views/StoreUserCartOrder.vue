<template>
  <StoreUserCartPaymentForm />
</template>

<script>
import StoreUserCartPaymentForm from '../components/StoreUserCartPaymentForm.vue';

export default {
  props: {
    cart: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    StoreUserCartPaymentForm,
  },
};
</script>

<style lang="scss" scoped></style>
