<template>
  <LoadingOverlay :active="isLoading" />
  <div class="text-end mt-3">
    <button type="button" class="btn btn-primary" @click="openModal(true)">新增產品</button>
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
        <td class="text-right">{{ item.origin_price.toLocaleString('en-us') }}</td>
        <td class="text-right">{{ item.price.toLocaleString('en-us') }}</td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-outline-primary btn-sm"
              @click="openModal(false, item)"
            >
              編輯
            </button>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="openDeleteModal(item)"
            >
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <ThePagination :pages="pagination" @emit-page="getProducts" />
  <DashboardModalProduct
    ref="productModal"
    :product="tempProduct"
    @update-product="updateProduct"
  />
  <DashboardModalDelete ref="deleteModal" :item="tempProduct" @deleteItem="deleteProduct" />
</template>

<script>
import {
  apiGetProductListByPage,
  apiPostProductItem,
  apiPutProductItemDetail,
  apiDeleteProduct,
} from '@/api/admin';
import DashboardModalProduct from '@/components/DashboardModalProduct.vue';
import DashboardModalDelete from '@/components/DashboardModalDelete.vue';
import ThePagination from '@/components/ThePagination.vue';

export default {
  components: {
    DashboardModalProduct,
    DashboardModalDelete,
    ThePagination,
  },
  inject: ['pushMessageState'],
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false,
    };
  },
  methods: {
    async getProducts(page = 1) {
      this.isLoading = true;
      // Retrieve product data
      const result = await apiGetProductListByPage(page);
      if (result.data.success) {
        this.products = result.data.products;
        this.pagination = result.data.pagination;
      }
      this.isLoading = false;
    },
    openModal(isNew, item) {
      // Case 1: Add a new product (is NOT new); Case 2: Edit a product (is New)
      this.tempProduct = isNew ? {} : item;
      this.isNew = isNew;
      this.$refs.productModal.showModal();
    },
    openDeleteModal(item) {
      this.tempProduct = item;
      this.$refs.deleteModal.showModal();
    },
    async updateProduct(item) {
      this.isLoading = true;
      this.tempProduct = item;
      // Add a new product
      if (this.isNew) {
        const result = await apiPostProductItem({ data: this.tempProduct });
        if (result.data.success) {
          this.pushMessageState(result, '產品資料更新');
        }
      }
      // Update a product
      if (!this.isNew) {
        const result = await apiPutProductItemDetail({ data: this.tempProduct }, item.id);
        if (result.data.success) {
          this.pushMessageState(result, '產品資料更新');
        }
      }
      this.isLoading = false;
      this.$refs.productModal.hideModal();
      this.getProducts();
    },
    async deleteProduct(item) {
      this.isLoading = true;
      // Delete a product
      const result = await apiDeleteProduct(item.id);
      if (result.data.success) {
        this.pushMessageState(result, '產品資料刪除');
      }
      this.isLoading = false;
      this.$refs.deleteModal.hideModal();
      this.getProducts();
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
