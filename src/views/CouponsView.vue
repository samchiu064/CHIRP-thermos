<template>
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
          <span class="text-success">{{ item.is_enabled }}</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm" @click="openModal(false, item)">
              編輯
            </button>
            <button class="btn btn-outline-danger btn-sm">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <CouponModal ref="couponModal" @update-coupon="updateCoupon" :coupon="tempCoupon"></CouponModal>
</template>

<script>
import CouponModal from '../components/CouponModal.vue';

export default {
  data() {
    return {
      tempCoupon: {},
      coupons: [],
      pagination: {},
      isNew: false,
      apiPath: {
        coupon: `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon`,
        coupons: `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupons`,
      },
    };
  },
  components: { CouponModal },
  methods: {
    openModal(isNew, item) {
      this.tempCoupon = isNew ? {} : item;
      this.$refs.couponModal.showModal();
      console.log(this.tempCoupon);
    },
    updateCoupon(tempCoupon) {
      // Add a new coupon
      // this.tempCoupon = { ...tempCoupon };
      // this.tempCoupon.due_date = new Date(this.tempCoupon.due_date).getTime();

      console.log(tempCoupon.due_date);

      // this.$http.post(this.apiPath.coupon, { data: this.tempCoupon }).then((res) => {
      //   console.log(res);
      // });
    },
    getCoupons() {
      this.$http.get(this.apiPath.coupons).then((res) => {
        this.coupons = res.data.coupons;
        this.pagination = res.data.pagination;

        this.coupons.forEach((coupon, index) => {
          this.coupons[index].due_date = this.getCurrentDate(coupon.due_date);
        });
        console.log(this.coupons);
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
  computed: {},
  created() {
    this.getCoupons();
  },
};
</script>
