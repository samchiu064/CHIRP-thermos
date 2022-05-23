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
import { mapState, mapActions } from "pinia";
import { useCartStore } from "@/stores/cartStore";
import { statusStore } from "@/stores/statusStore";
import StoreUserCartProductTable from "../components/StoreUserCartProductTable.vue";

export default {
  components: {
    StoreUserCartProductTable,
  },
  // props: {
  //   cart: {
  //     type: Object,
  //     default: () => {},
  //   },
  // },
  data() {
    return {
      status: { loadingItem: "" },
    };
  },
  computed: {
    ...mapState(useCartStore, ["cart"]),
    ...mapState(statusStore, ["isLoading"]),
  },
  methods: {
    ...mapActions(useCartStore, ["getCartList", "increaseItem", "decreaseItem", "deleteItem"]),
  },
  created() {
    this.getCartList();
  },
};
</script>

<style lang="scss" scoped></style>
