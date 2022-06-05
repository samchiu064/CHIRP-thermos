<template>
  <div class="row py-2">
    <div class="col">
      <p class="fs-2 text-center"><i class="bi bi-check2-circle text-success"></i> 訂單建立成功</p>
    </div>
  </div>
  <div class="col-lg-6 m-auto">
    <StoreUserCartOrderList />
    <StoreUserCartOrderTable />
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
  methods: {
    ...mapActions(useCartStore, ['getCartList']),
  },
  created() {
    this.getCartList();
  },
};
</script>
