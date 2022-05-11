<template>
  <StoreHeader />
  <main class="container bg-white p-3 p-md-5">
    <section class="row row-cols-1 row-cols-md-2 mb-2">
      <div
        class="col text-center d-flex align-items-center justify-content-center"
      >
        <img
          :src="this.tempProduct.imageUrl"
          alt="保溫瓶圖片"
          class="img-box"
        />
      </div>
      <div class="col">
        <div class="text-center text-md-start m-auto mx-md-0">
          <h2 class="mt-2 mt-md-0">{{ this.tempProduct.title }}</h2>
          <h3 style="display: none">價格</h3>
          <span class="fs-3 fw-bold">NT ${{ this.tempProduct.price }}</span>
          <p class="mt-3 mb-4">
            {{ this.tempProduct.description }}
          </p>
        </div>

        <div>
          <h3 class="fs-6 fw-bold">顏色</h3>
          <ul class="nav">
            <li
              v-for="(item, index) in products"
              :key="index"
              class="nav-item m-3 mb-1 text-center"
            >
              <button
                type="button"
                class="btn bg-classic-green p-3 rounded-circle d-inline-block"
                :class="`bg-${this.products[index].engColor}`"
                @click.prevent="switchProduct(item)"
              ></button>
              <p class="mt-1">{{ this.products[index].chtColor }}</p>
            </li>
          </ul>
        </div>

        <div class="mt-3 mb-4">
          <h3 class="fs-6 fw-bold">配送方式</h3>
          <label for="home-delivery" class="ps-3">
            <input
              type="radio"
              name="homeDelivery"
              id="home-delivery"
              checked
            />
            宅配配送
          </label>
        </div>

        <div class="mt-3">
          <h3 class="fs-6 fw-bold">數量</h3>
          <StoreInputProductQuantity
            :unit="this.tempProduct.unit"
            :qty="this.tempProduct.qty"
            @decreaseQty="decreaseQty"
            @increaseQty="increaseQty"
            @update:value="(newValue) => (this.tempProduct.qty = newValue)"
          />

          <span v-if="this.tempProduct.unit" class="align-middle"
            >庫存充足</span
          >
          <span v-else-if="this.tempProduct.unit === 0" class="align-middle"
            >庫存不足</span
          >
        </div>
        <div class="mt-4 mb-5 text-center text-md-start">
          <button
            type="button"
            class="btn btn-outline-secondary rounded-pill w-45 py-2"
          >
            立即購買
          </button>
          <button
            type="button"
            class="btn btn-dark rounded-pill w-45 ms-4 py-2"
          >
            <i class="bi bi-cart-dash text-white me-1"></i>
            加入購物車
          </button>
        </div>
      </div>
    </section>
    <section class="row row-cols-1">
      <nav class="col">
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            class="nav-link active"
            id="nav-details-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            商品詳情
          </button>
          <button
            class="nav-link"
            id="nav-delivery-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            運送資訊
          </button>
          <button
            class="nav-link"
            id="nav-refund-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-contact"
            type="button"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            退款政策
          </button>
        </div>
      </nav>
      <div class="col tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active border border-top-0 p-3"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-details-tab"
        >
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
          </dl>
        </div>
        <div
          class="tab-pane fade border border-top-0 p-3"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-delivery-tab"
        >
          <dl>
            <dt>寄送時間</dt>
            <dd>
              宅配配送全台灣24h到貨；超商取貨全台灣72h到貨。全年無休，週末假日照常出貨。
            </dd>
            <dt>運送方式</dt>
            <dd>
              透過宅配送達。除網頁另有特別標示外，均為常溫配送。<br />
              消費者訂購之商品若經配送兩次無法送達，再經本公司以電話與Email均無法聯繫逾三天者，本公司將取消該筆訂單，並且全額退款。
            </dd>
            <dt>運送範圍</dt>
            <dd>
              限台灣本島與離島地區註，部分離島地區包括連江馬祖、綠島、蘭嶼、琉球鄉…等貨件，將送至到岸船公司碼頭，需請收貨人自行至碼頭取貨。注意！收件地址請勿為郵政信箱。
            </dd>
          </dl>
        </div>
        <div
          class="tab-pane fade border border-top-0 p-3"
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-refund-tab"
        >
          <dl>
            <dt>退款須知</dt>
            <dd>
              消費者可以依照消費者保護法的規定，享有商品貨到次日起七天猶豫期的權益。但猶豫期並非試用期，請留意，您所退回的商品必須回復原狀（須回復至商品到貨時的原始狀態）
              並且保持完整包裝（包括商品本體、配件、贈品、保證書、原廠包裝及所有附隨文件或資料的完整性），切勿缺漏任何配件或損毀原廠外盒。<br />
              若因您要求退貨或換貨、或因本公司無法接受您全部或部分之訂單、或因契約解除或失其效力，而需為您辦理退款事宜時，您同意本公司得代您處理發票或折讓單等相關法令所要
              求之單據，以利本公司為您辦理退款。<br />
              本公司收到您所提出的申請後，若經確認無誤，將依消費者保護法之相關規定，返還您已支付之對價（含信用卡交易），退款日當天會再發送E-mail通知函給您。
            </dd>
          </dl>
        </div>
      </div>
    </section>
    <StoreProductCard />
  </main>
</template>

<script>
import StoreHeader from '../components/StoreHeader.vue';
import fetchDataMixin from '../mixins/fetchDataMixin';
import StoreProductCard from '../components/StoreProductCard.vue';
import StoreInputProductQuantity from '../components/StoreInputProductQuantity.vue';

export default {
  components: { StoreHeader, StoreProductCard, StoreInputProductQuantity },
  mixins: [fetchDataMixin],
  data() {
    return {
      tempProduct: {
        title: '單色不鏽鋼保溫瓶 - 胡克綠',
        imageUrl:
          'https://storage.googleapis.com/vue-course-api.appspot.com/samchiu064-api/1650008053965.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ItQvp2nC167foacul3Lh1SVOVstnA0qu5GBXVenxVfwijpE1Tb2%2B%2FGMIut2E1m98Tgg8w3BrQa9J%2Bnxbo%2BNAkKW8%2B1oK7A2qiWnPSJfcnasg9F6ABZyuIueKWuvCPp2npw2IY%2FK0cwWCFnFZ8tHQIhUNwaIfXYZy%2FETJjUNTNnsabZ2KZ6C0m%2FPCE00HCfYcrgIbiJr9%2F28Cw%2FndGkwAz7j81Iiht9E145ia1SYamoDkLAe%2BVVykOgpIvYEczVct%2BfEFylX1AD25eDjqTIDB7rqui8XzaLbpSfdA95t0W2yVfuLeSoJtzJlHHf6AEKPIZ8qVzbh1yUzHfNzJcWq8fQ%3D%3D',
        description:
          '高取或數有相個。看己的一，身家一海上少國多思住車面分 不毛五工品還觀草？我流力境由立教媽心施制臺內童見親而來，高香起 過覺眾示到部身、讀分務女生切相來室一次言物去賽動的清同別操物，此像？',
        price: 600,
        qty: 1,
      },
    };
  },
  methods: {
    async initData() {
      await this.$_fetchDataMixin_getProducts();
      this.$_fetchDataMixin_filterCategory('thermos');
      this.$_fetchDataMixin_addProperty('color');
      this.$_fetchDataMixin_addProperty('order');
      this.$_fetchDataMixin_sortProduct();
    },
    switchProduct(item) {
      console.log(item);
      this.tempProduct.title = item.title;
      this.tempProduct.imageUrl = item.imageUrl;
      this.tempProduct.id = item.id;
      this.tempProduct.description = item.description;
      this.tempProduct.price = item.price;
      this.tempProduct.unit = Number(item.unit); // Origin type: String
    },
    increaseQty() {
      this.tempProduct.qty += 1;
    },
    decreaseQty() {
      if (this.tempProduct.qty <= 1) return;
      this.tempProduct.qty -= 1;
    },
  },
  created() {
    this.initData();
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
</style>
