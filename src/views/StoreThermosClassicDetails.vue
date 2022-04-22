<template>
  <main class="container">
    <section class="row row-cols-1 row-cols-md-2">
      <div class="col">
        <img src="https://fakeimg.pl/300x200/200" alt="test" />
      </div>
      <div class="col">
        <h2>單色不鏽鋼保溫瓶 -胡克綠</h2>
        <h3 style="display: none">價格</h3>
        <span>NT $600</span>
        <p>
          高取或數有相個。看己的一，身家一海上少國多思住車面分
          不毛五工品還觀草？我流力境由立教媽心施制臺內童見親而來，高香起
          過覺眾示到部身、讀分務女生切相來室一次言物去賽動的清同別操物，此像？
        </p>
        <div>
          <h3>顏色</h3>
          <ul>
            <li>胡克綠</li>
            <li>灰玫紅</li>
            <li>灰丁寧藍</li>
          </ul>
        </div>

        <div>
          <h3>配送方式</h3>
          <ul>
            <li>宅配配送</li>
          </ul>
        </div>

        <div>
          <h3>數量</h3>
          <i class="bi bi-dash"></i>
          <label for="qty">
            <input type="number" id="qty" />
          </label>
          <i class="bi bi-plus"></i>
          <span>庫存充足</span>
        </div>
        <div>
          <button type="button" class="btn btn-outline-primary">
            立即購買
          </button>
          <button type="button" class="btn btn-outline-secondary">
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
          class="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-details-tab"
        >
          <ul>
            <li>容量(cc)：480</li>
            <li>長Ｘ寬Ｘ高(cm)：6.6x7.2x21.8</li>
            <li>重量(kg)：0.19</li>
            <li>保溫效力(6小時)：68oc以上</li>
            <li>保冷效力(6小時)：8oc以下</li>
            <li>外蓋/本體材質：PP/不鏽鋼SUS304</li>
          </ul>
        </div>
        <div
          class="tab-pane fade"
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
          class="tab-pane fade"
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-refund-tab"
        >
          <p>
            消費者可以依照消費者保護法的規定，享有商品貨到次日起七天猶豫期的權益。但猶豫期並非試用期，請留意，您所退回的商品必須回復原狀（須回復至商品到貨時的原始狀態）
            並且保持完整包裝（包括商品本體、配件、贈品、保證書、原廠包裝及所有附隨文件或資料的完整性），切勿缺漏任何配件或損毀原廠外盒。<br />
            若因您要求退貨或換貨、或因本公司無法接受您全部或部分之訂單、或因契約解除或失其效力，而需為您辦理退款事宜時，您同意本公司得代您處理發票或折讓單等相關法令所要
            求之單據，以利本公司為您辦理退款。<br />
            本公司收到您所提出的申請後，若經確認無誤，將依消費者保護法之相關規定，返還您已支付之對價（含信用卡交易），退款日當天會再發送E-mail通知函給您。
          </p>
        </div>
      </div>
    </section>
    <StoreProductCard />
  </main>
</template>

<script>
import getDataMixin from '../mixins/getDataMixin';
import StoreProductCard from '../components/StoreProductCard.vue';

export default {
  components: { StoreProductCard },
  mixins: [getDataMixin],
  data() {
    return {
      origin: [],
      products: [],
      tempProduct: {},
    };
  },
  methods: {
    async initData() {
      await this.$_getDataMixin_getProducts();
      this.$_getDataMixin_filterCategory('thermos');
      this.$_getDataMixin_addProperty('color');
      this.$_getDataMixin_addProperty('order');
      this.$_getDataMixin_sortProduct();
    },
  },
  created() {
    this.initData();
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 78vw;
  background-color: white;
  margin-top: 8rem;
}
</style>
