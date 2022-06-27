<template>
  <LoadingOverlay :active="isLoading" />
  <div class="text-end mt-3">
    <button type="button" class="btn btn-primary" @click="openModal(true)">建立新的優惠券</button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>名稱</th>
        <th width="120">折扣百分比</th>
        <th width="120">到期日</th>
        <th width="120">折扣碼</th>
        <th width="120">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, key) in coupons" :key="item + key">
        <td>{{ item.title }}</td>
        <td>{{ item.percent }}%</td>
        <td>{{ item.due_date }}</td>
        <td>{{ item.code }}</td>
        <td>
          <span v-if="item.is_enabled" class="text-success">啟用</span>
          <span v-else class="text-secondary">未啟用</span>
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
              @click="openDeleteModal(false, item)"
            >
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <DashboardModalCoupon ref="couponModal" @update-coupon="updateCoupon" :coupon="tempCoupon" />
  <DashboardModalDelete ref="deleteModal" @deleteItem="deleteCoupon" :item="tempCoupon" />
  <ThePagination :pages="pagination" @emit-page="getCoupons" />
</template>

<script>
import {
  apiGetCouponList,
  apiPostCouponItem,
  apiPutCouponItemDetail,
  apiDeleteCoupon,
} from '@/api/admin';
import DashboardModalCoupon from '@/components/DashboardModalCoupon.vue';
import DashboardModalDelete from '@/components/DashboardModalDelete.vue';
import ThePagination from '@/components/ThePagination.vue';

export default {
  components: { DashboardModalCoupon, DashboardModalDelete, ThePagination },
  inject: ['pushMessageState'],
  data() {
    return {
      tempCoupon: {},
      coupons: [],
      pagination: {},
      isNew: false,
      isLoading: false,
    };
  },
  methods: {
    openModal(isNew, item) {
      this.tempCoupon = isNew ? {} : item;
      this.$refs.couponModal.showModal();
      this.isNew = isNew;
    },
    openDeleteModal(isNew, item) {
      this.tempCoupon = item;
      this.$refs.deleteModal.showModal();
      this.isNew = isNew;
    },
    async updateCoupon(formattedItem) {
      this.isLoading = true;

      // Create a new voucher
      if (this.isNew) {
        const result = await apiPostCouponItem({ data: formattedItem });
        try {
          console.log(result);
          this.pushMessageState(result, '優惠券資料建立');
        } catch (e) {
          console.log(e);
        }
      }
      // Refresh the information of a voucher
      if (!this.isNew) {
        const result = await apiPutCouponItemDetail({ data: formattedItem });
        try {
          console.log(result);
          this.pushMessageState(result, '優惠券資料更新');
        } catch (e) {
          console.log(e);
        }
      }
      this.isLoading = false;
      this.$refs.couponModal.hideModal();
      this.getCoupons();
    },
    async deleteCoupon() {
      this.isLoading = true;

      // Delete a voucher
      const result = await apiDeleteCoupon(this.tempCoupon.id);
      try {
        console.log(result);
        this.pushMessageState(result, '優惠券資料刪除');
      } catch (e) {
        console.log(e);
      }
      this.isLoading = false;
      this.$refs.deleteModal.hideModal();
      this.getCoupons();
    },
    async getCoupons(page = 1) {
      this.isLoading = true;

      // Retrieve voucher data
      const result = await apiGetCouponList(page);
      try {
        this.coupons = result.data.coupons;
        this.pagination = result.data.pagination;

        this.coupons.forEach((coupon, index) => {
          this.coupons[index].due_date = this.getCurrentDate(coupon.due_date);
        });
      } catch (e) {
        console.log(e);
      }
      this.isLoading = false;
    },
    getCurrentDate(unixtimestamp) {
      const date = new Date(unixtimestamp);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1);
      const day = (date.getDate() < 10 ? '0' : '') + date.getDate();
      return `${year}-${month}-${day}`;
    },
  },
  created() {
    this.getCoupons();
  },
};
</script>
