<template>
  <div>
    <table class="table align-middle table-borderless text-center border mb-3">
      <thead class="table-light border-bottom">
        <tr>
          <th class="fw-normal" scope="col">商品資訊</th>
          <th class="d-none d-md-table-cell fw-normal" scope="col">商品價格</th>
          <th class="d-none d-md-table-cell fw-normal" scope="col" width="180">數量</th>
          <th v-if="!isSummary" class="d-none d-md-table-cell fw-normal" scope="col">變更明細</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in cart.carts"
          :key="item + index"
          :class="{
            'td-deleted': cartDeletedItem === item.id,
            'text-muted': cartDeletedItem === item.id,
          }"
          class="d-flex d-sm-table-row table-row--divider-light flex-wrap justify-content-center m-2 position-relative"
        >
          <td class="col-12 col-md-auto text-center text-md-start">
            <figure
              class="figure figure--spacing-mobile d-flex justify-content-start align-items-center flex-column flex-md-row m-0"
            >
              <div
                class="img-box d-flex justify-content-center align-items-center border ms-1 me-2"
              >
                <img
                  :src="item.product.imageUrl"
                  :alt="`${item.product.title}圖片`"
                  class="img-fluid img-cart-item p-1 rounded"
                />
              </div>
              <figcaption>
                <h2 class="fs-6 m-0 pt-3 pt-md-0">{{ item.product.title }}</h2>
              </figcaption>
            </figure>
          </td>
          <td class="col-12 col-md-auto p-2">
            NT$ {{ item.product.price.toLocaleString('en-us') }}
          </td>
          <td class="col-12 col-md-auto p-0">
            <StoreProductInput
              v-if="cartLoadingItem !== item.id"
              :hasOperators="hasOperators"
              :editable="editable"
              :qty="item.qty"
              :itemId="item.id"
              @updateItem="updateCartItem"
              @update:value="(newValue) => updateCartItem({ itemId: item.id, qty: newValue })"
            />
            <div
              v-if="cartLoadingItem === item.id"
              class="spinner-border spinner-border-sm"
              role="status"
            >
              <span class="visually-hidden">Loading...</span>
            </div>
          </td>
          <td class="col-12 col-md-auto p-0" v-if="!isSummary">
            <button
              v-if="cartDeletedItem !== item.id"
              type="button"
              class="btn btn-deleted bi bi-trash"
              @click="overlayCartItem(item.id)"
            ></button>
            <div
              v-if="cartDeletedItem === item.id"
              class="spinner-border spinner-border-sm align-middle"
              role="status"
            >
              <span class="visually-hidden">Loading...</span>
            </div>
          </td>
          <td
            v-if="item.id === cartDeletedItem"
            class="overlay w-100 h-100 position-absolute top-0 start-0"
          >
            <div class="w-100 position-absolute top-50 start-50 translate-middle">
              <p class="text-center text-light">確定要刪除嗎？</p>
              <div class="d-flex justify-content-center" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-danger me-1" @click="deleteCartItem(item.id)">
                  刪除產品
                </button>
                <button @click="cancelOverlay" type="button" class="btn btn-light ms-1">
                  返回
                </button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot v-if="isSummary" class="border-top">
        <tr>
          <td colspan="4" class="text-end fw-medium">
            折扣<span class="fw-medium ps-3">- NT$ {{ discount }}元</span>
          </td>
        </tr>
        <tr>
          <td colspan="4" class="text-end fw-bold">
            本訂單須支付金額<span class="fw-bold ps-3">
              NT$ {{ cart.final_total?.toLocaleString('en-us') }}元</span
            >
          </td>
        </tr>
      </tfoot>
      <td v-if="this.cart.carts?.length === 0" colspan="4" class="p-4">
        您的購物車目前沒有任何商品，<router-link
          to="/thermos/classic/details/classic-green"
          class="text-decoration-none link-classic-green fw-medium"
          >去購物</router-link
        >
      </td>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useCartStore } from '@/stores/cartStore';
import statusStore from '@/stores/statusStore';
import StoreProductInput from './StoreProductInput.vue';

export default {
  components: {
    StoreProductInput,
  },
  props: {
    isSummary: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      tempItem: [],
    };
  },
  computed: {
    hasOperators() {
      if (this.isSummary) return false;
      return true;
    },
    editable() {
      if (this.isSummary) return false;
      return true;
    },
    ...mapState(useCartStore, ['cart', 'discount']),
    ...mapState(statusStore, ['cartLoadingItem', 'cartDeletedItem']),
  },
  methods: {
    ...mapActions(useCartStore, [
      'getCartList',
      'updateCartItem',
      'deleteCartItem',
      'overlayCartItem',
      'cancelOverlay',
    ]),
  },
  created() {
    this.getCartList();
  },
};
</script>

<style lang="scss" scoped>
.img-box {
  width: 86px;
  height: 89px;
  @media (max-width: 576px) {
    width: 60vw;
    height: 60vw;
  }
}
.img-cart-item {
  max-height: 89px;
  @media (max-width: 576px) {
    max-height: 50vw;
  }
}
.td-deleted {
  background-color: #e9ecef;
}

.btn-deleted {
  transition: background-color 0.3s;
  &:hover {
    background-color: #f8f9fa !important;
  }
}

.overlay {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
