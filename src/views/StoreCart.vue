<template>
  <LoadingOverlay :active="isLoading" />
  <table class="table mt-4 ms-5 w-75">
    <thead>
      <tr>
        <th width="200">圖片</th>
        <th width="120">商品名稱</th>
        <th width="150">價格</th>
        <th>數量</th>
        <th width="200">更多</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, key) in products" :key="item + key">
        <td>
          <img width="200" :src="item.imageUrl" alt="" />
        </td>
        <td>{{ item.title }}</td>
        <td>{{ item.price }}</td>
        <td>
          <div class="col-md-3 col-lg-3 col-xl-3 d-flex">
            <button
              class="btn btn-link px-2"
              onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
            >
              <i class="bi bi-dash-lg"></i>
            </button>

            <label for="form1">
              <input
                id="form1"
                min="0"
                name="quantity"
                value="1"
                type="number"
                class="form-control form-control-sm"
            /></label>

            <button
              class="btn btn-link px-2"
              onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
            >
              <i class="bi bi-plus-lg"></i>
            </button>
          </div>
        </td>
        <td>
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-outline-secondary btn-sm"
              @click="getProduct(item.id)"
            >
              查看更多
            </button>
            <button
              type="button"
              :disabled="this.status.loadingItem === item.id"
              class="btn btn-outline-danger btn-sm"
              @click="addToCart(item.id)"
            >
              <div
                v-if="this.status.loadingItem === item.id"
                class="spinner-border spinner-border-sm text-danger"
                role="status"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
              加入購物車
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      isLoading: false,
      pagination: {},
      status: {
        loadingItem: '',
      },
      apiPath: {
        product: `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product`,
        products: `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products`,
      },
    };
  },
  methods: {
    fetchProducts(page = 1) {
      this.isLoading = true; // Show loading overlay

      this.$http.get(`${this.apiPath.products}?page=${page}`).then((res) => {
        if (res.data.success) {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
          console.log(res);
        }
        this.isLoading = false; // Hide loading overlay
      });
    },
    getProduct(id) {
      this.$router.push(`/user/product/${id}`);
    },
    addToCart(id) {
      this.status.loadingItem = id;

      const apiPath = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      const httpMethod = 'post';
      const bodyContent = {
        product_id: id,
        qty: 1,
      };

      this.$http[httpMethod](apiPath, { data: bodyContent }).then((res) => {
        console.log(res);
        this.status.loadingItem = '';
      });
    },
  },
  created() {
    this.fetchProducts();
  },
};
</script>
