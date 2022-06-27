<template>
  <LoadingOverlay :active="isLoading" />
  <table class="table mt-4">
    <thead>
      <tr>
        <th>訂單編號</th>
        <th>Email</th>
        <th>購買款項</th>
        <th>應付金額</th>
        <th>是否付款</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in orders" :key="item + index">
        <td>{{ item.id }}</td>
        <td>{{ item.user.email }}</td>
        <td class="text-right">
          <DashboardOrderList :order="item" :form="item.user" />
        </td>
        <td class="text-right">{{ item.total.toLocaleString('en-us') }}</td>
        <td>
          <button
            v-if="item.is_paid"
            type="button"
            class="btn btn-sm btn-outline-success"
            title="更改為未付款"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            @click="changePaymentStatus(item.is_paid, item.id)"
          >
            <span>已付款</span>
          </button>
          <button
            v-if="!item.is_paid"
            type="button"
            class="btn btn-sm btn-outline-danger"
            title="更改為已付款"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            @click="changePaymentStatus(item.is_paid, item.id)"
          >
            <span>未付款</span>
          </button>
        </td>
        <td>
          <div class="btn-group">
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
  <DashboardModalDelete ref="deleteModal" :item="tempOrder" @deleteItem="deleteOrder" />
</template>

<script>
import { apiGetOrderList, apiPutOrderItemDetail, apiDeleteOrder } from '@/api/admin';
import DashboardOrderList from '@/components/DashboardOrderList.vue';
import DashboardModalDelete from '@/components/DashboardModalDelete.vue';
import ThePagination from '@/components/ThePagination.vue';

export default {
  components: {
    ThePagination,
    DashboardOrderList,
    DashboardModalDelete,
  },
  inject: ['pushMessageState'],
  data() {
    return {
      orders: [],
      pagination: {},
      isLoading: false,
      tempOrder: {},
    };
  },
  methods: {
    async getProducts(page = 1) {
      this.isLoading = true;
      // Retrieve product data
      const result = await apiGetOrderList(page);
      try {
        if (result.data.success) {
          this.orders = result.data.orders;
          this.pagination = result.data.pagination;
          console.log(result);
        }
      } catch (e) {
        console.log(e);
      }
      this.isLoading = false;
    },
    async changePaymentStatus(status, id) {
      this.isLoading = true;
      // Change the payment status of an order
      const isPaid = !status;
      const result = await apiPutOrderItemDetail({ data: { is_paid: isPaid } }, id);
      try {
        this.pushMessageState(result, '訂單狀態更新');
        this.getProducts();
        console.log(result);
      } catch (e) {
        console.log(e);
      }
    },
    async deleteOrder(item) {
      this.isLoading = true;
      // Delete an order
      const { id } = item;
      const result = await apiDeleteOrder(id);
      try {
        this.pushMessageState(result, '訂單刪除');
        this.getProducts();
        this.$refs.deleteModal.hideModal();
        console.log(result);
      } catch (e) {
        console.log(e);
      }
    },
    openDeleteModal(item) {
      this.tempOrder = { ...item, title: '此筆訂單' };
      this.$refs.deleteModal.showModal();
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
