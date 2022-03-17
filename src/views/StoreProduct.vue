<template>
  <div class="ms-4 mt-4">
    <h2>{{ product.title }}</h2>
    <div>{{ product.description }}</div>
    <div>$ {{ product.price }}</div>
    <div><img width="200" :src="product.imageUrl" alt="" /></div>
    <button type="button" class="btn btn-outline-danger btn-sm">加入購物車</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productId: this.$route.params.productId,
      product: {},
    };
  },
  methods: {
    fetchProducts() {
      this.isLoading = true; // Show loading overlay

      const apiPath = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${this.productId}`;
      const httpMethod = 'get';

      this.$http[httpMethod](apiPath).then((res) => {
        console.log(res);
        if (res.data.success) {
          this.product = res.data.product;
        }
        this.isLoading = false; // Hide loading overlay
      });
    },
  },
  created() {
    this.fetchProducts();
  },
};
</script>
