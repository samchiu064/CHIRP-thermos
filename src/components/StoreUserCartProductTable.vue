<template>
  <table class="table align-middle table-borderless text-center border mb-3">
    <thead class="table-light border-bottom">
      <tr>
        <th class="fw-normal" scope="col">商品資訊</th>
        <th class="d-none d-md-table-cell fw-normal" scope="col">商品價格</th>
        <th class="d-none d-md-table-cell fw-normal" scope="col" width="180">數量</th>
        <th v-if="!readonly" class="d-none d-md-table-cell fw-normal" scope="col">變更明細</th>
        <th v-if="readonly" class="d-none d-md-table-cell fw-normal" scope="col">小計</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(item, index) in cart.carts"
        :key="item + index"
        class="d-flex d-sm-table-row table-row--divider-light flex-wrap justify-content-center m-2"
      >
        <td class="col-12 col-md-auto text-center text-md-start">
          <figure
            class="figure figure--spacing-mobile d-flex justify-content-start align-items-center flex-column flex-md-row m-0"
          >
            <div class="img-box d-flex justify-content-center align-items-center border ms-1 me-2">
              <img
                :src="item.product.imageUrl"
                alt="購物車商品圖"
                class="img-fluid img-cart-item p-1 rounded"
              />
            </div>

            <figcaption>
              <p class="fs-6 fw-light m-0">胡克綠</p>
              <h2 class="fs-6">單色不鏽鋼保溫瓶</h2>
            </figcaption>
          </figure>
        </td>
        <td class="col-12 col-md-auto p-0">NT$ {{ item.product.price.toLocaleString("en-us") }}</td>
        <td class="col-12 col-md-auto p-0">
          <StoreInputProductQuantityVue
            v-if="loadingItem !== item.id"
            :qty="item.qty"
            @decreaseQty="decreaseQty(item.id, item.qty)"
            @increaseQty="increaseQty(item.id, item.qty)"
          />
          <div
            v-if="loadingItem === item.id"
            class="spinner-border spinner-border-sm"
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
        </td>
        <td class="col-12 col-md-auto p-0" v-if="!readonly">
          <button type="button" class="btn bi bi-trash" @click="deleteItem(item.id)"></button>
        </td>
        <td v-if="readonly" class="col-12 col-md-auto">NT$ 600</td>
      </tr>
    </tbody>
    <tfoot v-if="readonly" class="border-top">
      <tr>
        <td colspan="4" class="text-end fw-medium">
          折扣<span class="fw-medium ps-3">- NT$ 240元</span>
        </td>
      </tr>
      <tr>
        <td colspan="4" class="text-end fw-bold">
          本訂單須支付金額<span class="fw-bold ps-3"> NT$ 1,200元</span>
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
import StoreInputProductQuantityVue from "./StoreInputProductQuantity.vue";

export default {
  components: {
    StoreInputProductQuantityVue,
  },
  props: {
    readonly: {
      type: Boolean,
      default: false,
    },
    cart: {
      type: Object,
      default: () => {},
    },
    loadingItem: {
      type: String,
      default: "",
    },
  },
  emits: ["increaseItem", "decreaseItem"],
  data() {
    return {
      tempItem: [],
      status: { isloading: false },
    };
  },
  methods: {
    increaseQty(itemId, qty) {
      this.$emit("increaseItem", { itemId, qty });
    },
    decreaseQty(itemId, qty) {
      this.$emit("decreaseItem", { itemId, qty });
    },
    deleteItem(itemId) {
      this.$emit("deleteItem", itemId);
    },
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
</style>
