<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-sm" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>新增折扣碼</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-12">
              <div class="mb-3">
                <label for="title" class="form-label w-100"
                  >優惠券名稱
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    placeholder="請輸入優惠券名稱"
                    v-model="tempCoupon.title"
                  />
                </label>
              </div>

              <div class="mb-3 col-md-12">
                <label for="percentage" class="form-label w-100"
                  >折扣百分比
                  <input
                    type="number"
                    min="0"
                    max="100"
                    class="form-control"
                    id="percentage"
                    placeholder="請輸入折扣百分比"
                    v-model="tempCoupon.percent"
                  />
                </label>
              </div>
              <div class="mb-3 col-md-12">
                <label for="due_date" class="form-label w-100"
                  >到期日
                  <input
                    type="date"
                    class="form-control"
                    id="due_date"
                    v-model="tempCoupon.due_date"
                  />
                </label>
              </div>

              <div class="mb-3 col-md-12">
                <label for="coupon_code" class="form-label w-100"
                  >折扣碼
                  <input
                    type="text"
                    class="form-control"
                    id="coupon_code"
                    placeholder="請輸入折扣碼"
                    v-model="tempCoupon.code"
                  />
                </label>
              </div>

              <div class="mb-3">
                <div class="form-check">
                  <label class="form-check-label" for="is_enabled">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :true-value="1"
                      :false-value="0"
                      id="is_enabled"
                      v-model="tempCoupon.is_enabled"
                    />
                    是否啟用
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="updateCoupon">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/src/modal';

export default {
  props: ['coupon'],
  data() {
    return {
      modal: {},
      tempCoupon: {},
    };
  },
  watch: {
    coupon() {
      this.tempCoupon = this.coupon;
    },
  },
  methods: {
    showModal() {
      this.modal.show();
    },
    updateCoupon() {
      // this.tempCoupon.due_date = new Date(this.tempCoupon.due_date).getTime();
      this.$emit('update-coupon', this.tempCoupon);
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>
