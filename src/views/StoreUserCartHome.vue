<template>
  <div class="col-12 col-lg-8">
    <StoreUserCartProductTable
      :readonly="false"
      :cart="cart"
      :loadingItem="status.loadingItem"
      @increaseItem="increaseItem"
      @decreaseItem="decreaseItem"
      @deleteItem="deleteItem"
    />
  </div>
</template>

<script>
import { apiPutCartItem, apiDeleteCartItem } from "@/api/client";
import StoreUserCartProductTable from "../components/StoreUserCartProductTable.vue";

export default {
  components: {
    StoreUserCartProductTable,
  },
  props: {
    cart: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      status: { loadingItem: "" },
    };
  },
  methods: {
    async increaseItem({ itemId, qty }) {
      this.status.loadingItem = itemId;

      const newQty = qty + 1;
      await apiPutCartItem({ data: { product_id: itemId, qty: newQty } }, itemId)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));

      this.getCartList(); // Update cart list to refresh data in the table
      this.status.loadingItem = "";
    },
    async decreaseItem({ itemId, qty }) {
      this.status.loadingItem = itemId;

      const newQty = qty - 1;
      if (qty <= 1) return; // Cart item should be either 0 or larger than 0
      await apiPutCartItem({ data: { product_id: itemId, qty: newQty } }, itemId)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));

      this.getCartList(); // Update cart list to refresh data in the table
      this.status.loadingItem = "";
    },
    async deleteItem(itemId) {
      await apiDeleteCartItem(itemId)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    },
    async getCartList() {
      this.$emit("getCartList");
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped></style>
