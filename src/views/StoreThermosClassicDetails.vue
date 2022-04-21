<template>
  <div class="container">
    <div class="row row-cols-2">
      <div class="col">
        <img src="https://fakeimg.pl/300x200/200" alt="test" />
      </div>
      <div class="col">
        <h2>保溫</h2>
      </div>
    </div>
  </div>
</template>

<script>
import getDataMixin from '../mixins/getDataMixin';

export default {
  mixins: [getDataMixin],
  data() {
    return {
      origin: [],
      products: [],
    };
  },
  methods: {
    async initData() {
      await this.$_getDataMixin_getProducts();
      this.$_getDataMixin_filterCategory('thermos');
      this.$_getDataMixin_addProperty('color');
      this.$_getDataMixin_addProperty('order');
      this.$_getDataMixin_sortProduct();
    },
  },
  created() {
    this.initData();
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 78vw;
  background-color: white;
  margin-top: 8rem;
}
</style>
