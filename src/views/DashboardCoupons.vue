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
import CouponModal from '../components/DashboardCouponModal.vue';
import DeleteModal from '../components/DashboardTheDeleteModal.vue';
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
    updateCoupon(formattedItem) {
      const apiPath = this.isNew
        ? this.apiPath.coupon
        : `${this.apiPath.coupon}/${this.tempCoupon.id}`;
      const httpMethod = this.isNew ? 'post' : 'put';

      this.isLoading = true;
      this.$http[httpMethod](apiPath, { data: formattedItem }).then((res) => {
        this.isLoading = false;
        this.pushMessageState(res, '優惠券資料更新');

        console.log('res', res);
        this.getCoupons();
        this.$refs.couponModal.hideModal();
      });
    },
    deleteCoupon() {
      const apiPath = `${this.apiPath.coupon}/${this.tempCoupon.id}`;
      const httpMethod = 'delete';

      this.isLoading = true;
      this.$http[httpMethod](apiPath).then((res) => {
        this.isLoading = false;
        this.pushMessageState(res, '優惠券資料刪除');

        console.log(res);
        this.getCoupons();
        this.$refs.deleteModal.hideModal();
      });
    },
    getCoupons(page = 1) {
      const apiPath = `${this.apiPath.coupons}?page=${page}`;
      const httpMethod = 'get';

      this.isLoading = true;
      this.$http[httpMethod](apiPath).then((res) => {
        this.isLoading = false;

        this.coupons = res.data.coupons;
        this.pagination = res.data.pagination;

        this.coupons.forEach((coupon, index) => {
          this.coupons[index].due_date = this.getCurrentDate(coupon.due_date);
        });
      });
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
