<template>
  <StoreHeader :cart="cart" @getCartList="getCartList" />
  <div class="bg-light">
    <router-view @getCartList="getCartList" :cart="cart" />
  </div>
</template>

<script>
import { apiGetCartList } from "@/api/client";
import StoreHeader from "../components/StoreHeader.vue";

export default {
  components: { StoreHeader },
  data() {
    return {
      cart: {},
    };
  },
  methods: {
    async getCartList() {
      await apiGetCartList()
        .then((res) => {
          this.cart = res.data.data;
          console.log(res.data.data);
        })
        .catch((res) => console.log(res));
    },
  },
  created() {
    this.getCartList();
  },
};
</script>

<style lang="scss" scoped></style>
