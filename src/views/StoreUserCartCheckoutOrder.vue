<template>
  <div class="row">
    <div class="col text-center">
      <div class="bottle-outline">
        <img src="@/assets/images/static/bottle_outline.svg" alt="" class="bottle-outline__img" />
      </div>
    </div>
  </div>
  <div class="row py-2">
    <div class="col">
      <p class="fs-4 text-center mb-0">購買完成</p>
      <p class="fs-4 text-center">
        您的訂單 <span class="text-success">{{ order.id }}</span> 已建立成功
      </p>
      <p class="text-center">
        接下來您可以考慮訂閱我們，或是
        <router-link
          to="/thermos/classic/details/classic-green"
          class="text-decoration-none link-classic-green"
          >繼續購物</router-link
        >
      </p>
    </div>
  </div>
  <div class="row mb-5">
    <div class="col-lg-6 m-auto">
      <VForm @submit="subscribe" class="subscription-box p-3">
        <p class="ps-2 pb-3 mb-0 fw-bold">訂閱電子報</p>
        <p class="ps-2">輸入MAIL訂閱電子報，及時獲取最新的商品資訊！</p>
        <div class="input-group mb-0">
          <VField
            name="Email"
            type="email"
            rules="email"
            class="form-control ms-2 bg-transparent"
            id="email"
            placeholder="Email"
            :disabled="isSubscribed"
          />
          <button
            v-if="isSubscribed === false"
            class="btn btn-outline-secondary me-3"
            type="submit"
          >
            訂閱
          </button>
          <button
            v-else
            class="btn btn-outline-success me-3"
            type="button"
            id="button-addon2"
            disabled
          >
            訂閱成功
          </button>
        </div>
        <ErrorMessage name="Email" class="text-danger fs-7 ms-3" />
      </VForm>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-6 m-auto">
      <div class="accordion-collapse" id="accordionOrder">
        <div class="accordion-item bg-transparent">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button bg-transparent text-dark fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              訂單詳情
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionOrder"
          >
            <div class="accordion-body">
              <StoreUserCartOrderList :order="order" />
              <StoreUserCartOrderTable :form="tempForm" />
              <div class="row justify-content-center mt-3">
                <div class="col-5 col-lg-4">
                  <button
                    type="button"
                    class="btn btn-outline-secondary rounded-pill w-100 py-2"
                    @click="
                      this.$router.push({
                        path: '/order-check',
                        query: { order_id: this.$route.params.orderId },
                      })
                    "
                  >
                    查詢訂單
                  </button>
                </div>
                <div class="col-5 col-lg-4">
                  <button
                    type="button"
                    class="btn btn-dark rounded-pill w-100 py-2"
                    @click="printWindow"
                  >
                    列印此頁
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StoreUserCartOrderList from '@/components/StoreUserCartOrderList.vue';
import StoreUserCartOrderTable from '@/components/StoreUserCartOrderTable.vue';
import { useCartStore } from '@/stores/cartStore';
import { mapActions } from 'pinia';

export default {
  components: {
    StoreUserCartOrderList,
    StoreUserCartOrderTable,
  },
  props: {
    order: {
      type: Object,
      default: () => {},
    },
    tempForm: {
      type: Object,
      default: () => {},
    },
    paymentMethod: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isSubscribed: false,
      subscriberEmail: '',
    };
  },
  emits: ['getOrderList'],
  methods: {
    printWindow() {
      window.print();
    },
    subscribe(values) {
      if (values.Email) {
        this.subscriberEmail = values.Email;
        this.isSubscribed = true;
      }
    },
    ...mapActions(useCartStore, ['getCartList']),
  },
  created() {
    this.$Progress.start();
    this.getCartList();
    this.$emit('getOrderList', this.$route.params.orderId);
    this.$Progress.finish();
  },
};
</script>

<style lang="scss">
.bottle-outline {
  max-width: 65px;
  max-height: 200px;
  position: relative;
  overflow: hidden;
  margin: auto;
  &__img {
    max-width: 100%;
    max-height: 100%;
  }

  &:before {
    content: '';
    position: absolute;
    width: 210px;
    height: 210px;
    background: #cc7e85;
    left: 50%;
    bottom: 0%;
    transform: translateX(-50%);
    border-radius: 40%;
    animation: fill 4s;
    z-index: -1;
  }
}

.subscription-box {
  background-color: transparent;
  border: 1px solid #dee2e6;
}

@keyframes fill {
  from {
    bottom: -200px;
    transform: translateX(-50%) rotate(0deg);
  }
  to {
    bottom: 0px;
    transform: translateX(-50%) rotate(360deg);
  }
}
</style>
