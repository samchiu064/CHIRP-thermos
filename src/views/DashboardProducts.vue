<template>
  <LoadingOverlay :active="isLoading" />
  <div class="text-end">
    <button class="btn btn-primary" type="button" @click="openModal(true)">新增產品</button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td class="text-right">{{ $filters.currency(item.origin_price) }}</td>
        <td class="text-right">{{ $filters.currency(item.price) }}</td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
          <!-- <span class="text-success">{{ item.is_enabled ? '啟用' : '未啟用' }}</span> -->
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm" @click="openModal(false, item)">
              編輯
            </button>
            <button class="btn btn-outline-danger btn-sm" @click="openDeleteModal(item)">
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <ThePagination :pages="pagination" @emit-page="getProducts" />
  <ProductModal ref="productModal" :product="tempProduct" @update-product="updateProduct" />
  <DeleteModal ref="deleteModal" :item="tempProduct" @delete-item="deleteProduct" />
</template>

<script>
import ProductModal from '../components/DashboardProductModal.vue';
import DeleteModal from '../components/DashboardDeleteModal.vue';
import ThePagination from '../components/ThePagination.vue';

export default {
  components: {
    ProductModal,
    DeleteModal,
    ThePagination,
  },
  inject: ['emitter', 'pushMessageState'],
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false,
      apiPath: {
        product: `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`,
        products: `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products`,
      },
    };
  },
  methods: {
    getProducts(page = 1) {
      this.isLoading = true; // Show loading overlay

      this.$http.get(`${this.apiPath.products}?page=${page}`).then((res) => {
        if (res.data.success) {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        }
        this.isLoading = false; // Hide loading overlay
      });
    },
    openModal(isNew, item) {
      // Case 1: Add a new product (is NOT new); Case 2: Edit the product (is New)
      this.tempProduct = isNew ? {} : item;
      this.isNew = isNew;
      this.$refs.productModal.showModal();
    },
    openDeleteModal(item) {
      this.tempProduct = item;
      this.$refs.deleteModal.showModal();
    },
    updateProduct(item) {
      this.tempProduct = item;
      this.isLoading = true; // Show loading overlay

      const api = this.isNew ? this.apiPath.product : `${this.apiPath.product}/${item.id}`;
      const httpMethod = this.isNew ? 'post' : 'put';
      const productComponent = this.$refs.productModal;

      this.$http[httpMethod](api, { data: this.tempProduct }).then((res) => {
        console.log(res);
        this.isLoading = false; // Show loading overlay
        this.pushMessageState(res, '產品資料更新');

        productComponent.hideModal();
      });
    },
    deleteProduct(item) {
      this.isLoading = true; // Show loading overlay

      this.$http.delete(`${this.apiPath.product}/${item.id}`).then((res) => {
        this.isLoading = false; // Loading effect off
        this.pushMessageState(res, '產品資料刪除');

        console.log(res);
        this.$refs.deleteModal.hideModal();
        this.getProducts();
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
