<template>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">購買時間</th>
        <th width="120">Email</th>
        <th width="120">購買款項</th>
        <th width="120">應付金額</th>
        <th width="100">是否付款</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in orders" :key="item + index">
        <td>{{ item.create_at }}</td>
        <td>{{ item.user.email }}</td>
        <td class="text-right"></td>
        <td class="text-right"></td>
        <td>
          <button
            type="button"
            class="btn btn-sm btn-outline-success"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="更改為未付款"
          >
            已付款
          </button>
          <button
            type="button"
            class="btn btn-sm btn-outline-danger"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="更改為已付款"
          >
            未付款
          </button>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-danger btn-sm">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import statusStore from '@/stores/statusStore';
import { mapWritableState } from 'pinia';
import { apiGetOrderList } from '@/api/admin';

export default {
  data() {
    return {
      orders: [],
      pagination: {},
    };
  },
  computed: {
    ...mapWritableState(statusStore, ['isLoading']),
  },
  methods: {
    async getProducts(page = 1) {
      this.isLoading = true; // Show loading overlay
      await apiGetOrderList(page)
        .then((res) => {
          if (res.data.success) {
            this.orders = res.data.orders;
            this.pagination = res.data.pagination;
            console.log(res);
          }
        })
        .catch((err) => console.log(err));
      this.isLoading = false; // Hide loading overlay
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
