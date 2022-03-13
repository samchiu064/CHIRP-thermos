<template>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
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
        <td class="text-right">{{ item.origin_price }}</td>
        <td class="text-right">{{ item.price }}</td>
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
            <button class="btn btn-outline-danger btn-sm" @click="openDelModal(item)">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <ProductModal
    ref="productModal"
    :product="tempProduct"
    @update-product="updateProduct"
  ></ProductModal>
  <DelModal ref="deleteModal" :item="tempProduct" @delete-product="deleteProduct"></DelModal>
</template>

<script>
import ProductModal from '../components/ProductModal.vue';
import DelModal from '../components/DelModal.vue';

export default {
  inject: ['emitter'],
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
  components: {
    ProductModal,
    DelModal,
  },
  methods: {
    getProducts() {
      this.isLoading = true; // Show loading overlay

      this.$http.get(this.apiPath.products).then((res) => {
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
    openDelModal(item) {
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

        productComponent.hideModal();

        if (!res.data.success) {
          this.getProducts();
          this.emitter.emit('push-messages', {
            status: 'failed',
            title: '更新失敗',
            content: res.data.message.join('、'),
          });
        } else {
          this.emitter.emit('push-messages', {
            status: 'success',
            title: '更新成功',
            content: res.data.message,
          });
        }
      });
    },
    deleteProduct(item) {
      this.isLoading = true; // Show loading overlay

      this.$http.delete(`${this.apiPath.product}/${item.id}`).then((res) => {
        this.isLoading = false; // Loading effect on

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
