<template>
  <LoadingOverlay :active="isLoading" />
  <table class="table mt-4">
    <thead>
      <tr>
        <th>購買時間</th>
        <th>Email</th>
        <th>購買款項</th>
        <th>應付金額</th>
        <th>是否付款</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in orders" :key="item + index">
        <td>{{ createdDate(item.create_at) }}</td>
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
            <button class="btn btn-outline-danger btn-sm" @click="openDeleteModal(item)">
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
    createdDate(milliseconds) {
      const date = new Date(milliseconds);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1);
      const day = (date.getDate() < 10 ? '0' : '') + date.getDate();
      const hours = (date.getHours() < 10 ? '0' : '') + date.getHours();
      const minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
      const seconds = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    },
    async getProducts(page = 1) {
      // Show loading overlay
      this.isLoading = true;
      await apiGetOrderList(page)
        .then((res) => {
          if (res.data.success) {
            this.orders = res.data.orders;
            this.pagination = res.data.pagination;
            console.log(res);
          }
        })
        .catch((err) => console.log(err));
      // Hide loading overlay
      this.isLoading = false;
    },
    async changePaymentStatus(status, id) {
      this.isLoading = true;
      const isPaid = !status;
      await apiPutOrderItemDetail({ data: { is_paid: isPaid } }, id)
        .then((res) => {
          console.log(res);
          this.pushMessageState(res, '訂單狀態更新');
          this.getProducts();
        })
        .catch((err) => console.log(err));
    },
    async deleteOrder(item) {
      const { id } = item;
      this.isLoading = true;
      await apiDeleteOrder(id)
        .then((res) => {
          console.log(res);
          this.getProducts();
          this.$refs.deleteModal.hideModal();
          this.pushMessageState(res, '訂單刪除');
        })
        .catch((err) => console.log(err));
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
