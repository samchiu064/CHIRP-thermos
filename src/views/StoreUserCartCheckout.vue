<template>
  <div class="container p-3 p-md-5 bg-white">
    <div v-if="isCreated" class="row py-5">
      <div class="col">
        <p class="fs-1 text-center">
          <i class="bi bi-check2-circle text-success"></i> 我們收到您的訂單了！
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <StoreUserCartProductTable :isSummary="true" />
      </div>
    </div>
    <div class="row">
      <div class="col"><StoreUserCartDeliveryInfo /></div>
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
        <button type="button" class="btn btn-dark rounded-pill w-100 py-2">確認訂單</button>
      </div>
    </div>
  </div>
</template>

<script>
import StoreUserCartProductTable from '../components/StoreUserCartProductTable.vue';
import StoreUserCartDeliveryInfo from '../components/StoreUserCartDeliveryInfo.vue';

export default {
  components: {
    StoreUserCartProductTable,
    StoreUserCartDeliveryInfo,
  },
  props: {
    cart: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      isCreated: false,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
