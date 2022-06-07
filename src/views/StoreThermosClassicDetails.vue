<template>
  <main>
    <section class="bg-light">
      <div class="container p-3 p-md-5">
        <div class="row row-cols-1 row-cols-md-2 mb-2">
          <div class="col">
            <Transition mode="out-in">
              <div class="text-center d-flex align-items-center justify-content-center">
                <img
                  :src="tempProduct.imageUrl"
                  :key="tempProduct.id"
                  alt="保溫瓶圖片"
                  class="img-box"
                />
              </div>
            </Transition>
          </div>
          <div class="col">
            <div class="text-center text-md-start m-auto mx-md-0">
              <h2 class="mt-2 mt-md-0">{{ tempProduct.title }}</h2>
              <h3 style="display: none">價格</h3>
              <span class="fs-3 fw-bold">NT ${{ tempProduct.price?.toLocaleString('en-us') }}</span>
              <p class="mt-3 mb-4">
                {{ tempProduct.description }}
              </p>
            </div>

            <div>
              <h3 class="fs-6 fw-bold">顏色</h3>
              <ul class="nav">
                <li
                  v-for="(item, index) in thermos"
                  :key="index"
                  class="nav-item m-3 mb-1 text-center"
                >
                  <button
                    type="button"
                    class="btn bg-classic-green p-3 rounded-circle d-inline-block"
                    :class="`bg-${item.engColor}`"
                    @click.prevent="switchProduct(item)"
                  ></button>
                  <p class="mt-1">{{ item.chtColor }}</p>
                </li>
              </ul>
            </div>

            <div class="mt-3 mb-4">
              <h3 class="fs-6 fw-bold">配送方式</h3>
              <label for="home-delivery" class="ps-3">
                <input type="radio" name="homeDelivery" id="home-delivery" checked />
                宅配配送
              </label>
            </div>

            <div class="mt-3">
              <h3 class="fs-6 fw-bold">數量</h3>
              <StoreInputProductQuantity
                :qty="tempProduct.qty"
                @updateItem="updateItem"
                @update:value="(newValue) => (tempProduct.qty = newValue)"
              />
              <span class="align-middle">庫存充足</span>
            </div>
            <div class="mt-4 mb-5 text-center text-md-start">
              <button
                type="button"
                class="btn btn-outline-secondary rounded-pill w-45 py-2"
                @click="purchaseNow(tempProduct.id, tempProduct.qty)"
              >
                立即購買
              </button>
              <button
                type="button"
                class="btn btn-dark rounded-pill w-45 ms-4 py-2"
                :disabled="cartLoadingItem === tempProduct.id"
                @click="addCartItem(tempProduct.id, tempProduct.qty)"
              >
                <div
                  v-if="cartLoadingItem === tempProduct.id"
                  class="spinner-border spinner-border-sm text-light"
                  role="status"
                >
                  <span class="visually-hidden">Loading...</span>
                </div>
                <i v-else class="bi bi-cart-dash text-white me-1"></i>
                加入購物車
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white">
      <div class="container p-3 p-md-5">
        <div class="row row-cols-1">
          <StoreTabsProductDetail>
            <template #titleFirstTab>商品詳情</template>
            <template #firstTab>
              <dl>
                <dt>產品規格</dt>
                <dd>
                  <ul>
                    <li>容量(cc)：480</li>
                    <li>長Ｘ寬Ｘ高(cm)：6.6x7.2x21.8</li>
                    <li>重量(kg)：0.19</li>
                    <li>保溫效力(6小時)：68oc以上</li>
                    <li>保冷效力(6小時)：8oc以下</li>
                    <li>外蓋/本體材質：PP/不鏽鋼SUS304</li>
                  </ul>
                </dd>
              </dl></template
            >
            <template #titleSecondTab>運送資訊</template>
            <template #secondTab>
              <dl>
                <dt>寄送時間</dt>
                <dd>宅配配送全台灣24h到貨；超商取貨全台灣72h到貨。全年無休，週末假日照常出貨。</dd>
                <dt>運送方式</dt>
                <dd>
                  透過宅配送達。除網頁另有特別標示外，均為常溫配送。<br />
                  消費者訂購之商品若經配送兩次無法送達，再經本公司以電話與Email均無法聯繫逾三天者，本公司將取消該筆訂單，並且全額退款。
                </dd>
                <dt>運送範圍</dt>
                <dd>
                  限台灣本島與離島地區註，部分離島地區包括連江馬祖、綠島、蘭嶼、琉球鄉…等貨件，將送至到岸船公司碼頭，需請收貨人自行至碼頭取貨。注意！收件地址請勿為郵政信箱。
                </dd>
              </dl></template
            >
            <template #titleThirdTab>退款政策</template>
            <template #thirdTab>
              <dl>
                <dt>退款須知</dt>
                <dd>
                  消費者可以依照消費者保護法的規定，享有商品貨到次日起七天猶豫期的權益。但猶豫期並非試用期，請留意，您所退回的商品必須回復原狀（須回復至商品到貨時的原始狀態）
                  並且保持完整包裝（包括商品本體、配件、贈品、保證書、原廠包裝及所有附隨文件或資料的完整性），切勿缺漏任何配件或損毀原廠外盒。<br />
                  若因您要求退貨或換貨、或因本公司無法接受您全部或部分之訂單、或因契約解除或失其效力，而需為您辦理退款事宜時，您同意本公司得代您處理發票或折讓單等相關法令所要
                  求之單據，以利本公司為您辦理退款。<br />
                  本公司收到您所提出的申請後，若經確認無誤，將依消費者保護法之相關規定，返還您已支付之對價（含信用卡交易），退款日當天會再發送E-mail通知函給您。
                </dd>
              </dl></template
            >
          </StoreTabsProductDetail>
        </div>
      </div>
    </section>
  </main>
  <StoreFooter />
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useProductStore } from '@/stores/productStore';
import { useCartStore } from '@/stores/cartStore';
import statusStore from '@/stores/statusStore';
import StoreFooter from '@/components/StoreFooter.vue';
import StoreTabsProductDetail from '@/components/StoreTabsProductDetail.vue';
import StoreInputProductQuantity from '../components/StoreInputProductQuantity.vue';

export default {
  components: {
    StoreInputProductQuantity,
    StoreTabsProductDetail,
    StoreFooter,
  },
  data() {
    return {
      tempProduct: {},
    };
  },
  computed: {
    ...mapState(useProductStore, ['thermos']),
    ...mapState(statusStore, ['cartLoadingItem']),
  },
  methods: {
    switchProduct(item) {
      this.tempProduct = { ...item, qty: 1 };
    },
    updateItem({ qty }) {
      const productQty = qty <= 0 ? 1 : qty;
      this.tempProduct.qty = productQty;
    },
    async purchaseNow(id, qty) {
      await this.addCartItem(id, qty);
      this.$router.push({ name: 'cart' });
    },
    ...mapActions(useProductStore, ['getProduct']),
    ...mapActions(useCartStore, ['addCartItem']),
  },
  async created() {
    await this.getProduct();
    this.tempProduct = { ...this.thermos[0], qty: 1 };
  },
};
</script>

<style lang="scss" scoped>
.outline-selected {
  border: 2px solid white;
  outline: 2px solid #212529;
}

.img-box {
  max-width: 620px;
  max-height: 509px;
  @media (max-width: 576px) {
    max-height: 360px;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
