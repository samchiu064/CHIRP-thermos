<template>
  <LoadingOverlay :active="isLoading" />
  <div class="text-end">
    <button class="btn btn-primary" type="button" @click="openModal(true)">建立新的優惠券</button>
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
            <button class="btn btn-outline-primary btn-sm" @click="openModal(false, item)">
              編輯
            </button>
            <button class="btn btn-outline-danger btn-sm" @click="openDeleteModal(false, item)">
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <CouponModal ref="couponModal" @update-coupon="updateCoupon" :coupon="tempCoupon" />
  <DeleteModal ref="deleteModal" @delete-item="deleteCoupon" :item="tempCoupon" />
  <ThePagination :pages="pagination" @emit-page="getCoupons" />
</template>

<script>
import {
  apiGetCouponList,
  apiPostCouponItem,
  apiPutCouponItemDetail,
  apiDeleteCoupon,
} from '@/api/admin';
import CouponModal from '../components/DashboardModalCoupon.vue';
import DeleteModal from '../components/DashboardModalDelete.vue';
import ThePagination from '../components/ThePagination.vue';

export default {
  components: { CouponModal, DeleteModal, ThePagination },
  inject: ['pushMessageState'],
  data() {
    return {
      tempCoupon: {},
      coupons: [],
      pagination: {},
      isNew: false,
      isLoading: false,
      apiPath: {
        coupon: `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon`,
        coupons: `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupons`,
      },
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
      // 建立優惠券
      if (this.isNew) {
        await apiPostCouponItem({ data: formattedItem })
          .then((res) => {
            console.log(res);
            this.pushMessageState(res, '優惠券資料建立');
          })
          .catch((err) => console.log(err));
      }
      // 更新優惠券
      if (!this.isNew) {
        await apiPutCouponItemDetail({ data: formattedItem })
          .then((res) => {
            console.log(res);
            this.pushMessageState(res, '優惠券資料更新');
          })
          .catch((err) => console.log(err));
      }

      this.isLoading = false;
      this.$refs.couponModal.hideModal();
      this.getCoupons();
    },
    async deleteCoupon() {
      this.isLoading = true;
      // 刪除優惠券
      await apiDeleteCoupon(this.tempCoupon.id)
        .then((res) => {
          console.log(res);
          this.pushMessageState(res, '優惠券資料刪除');
        })
        .catch((err) => console.log(err));

      this.isLoading = false;
      this.$refs.deleteModal.hideModal();
      this.getCoupons();
    },
    async getCoupons(page = 1) {
      this.isLoading = true;
      // 取得優惠券資料
      await apiGetCouponList(page)
        .then((res) => {
          console.log(res);
          this.coupons = res.data.coupons;
          this.pagination = res.data.pagination;

          this.coupons.forEach((coupon, index) => {
            this.coupons[index].due_date = this.getCurrentDate(coupon.due_date);
          });
        })
        .catch((err) => console.log(err));

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
