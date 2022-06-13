<template>
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
        <slot name="titleFirstTab">商品詳情</slot>
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
        <slot name="titleSecondTab">運送資訊</slot>
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
        <slot name="titleThirdTab">退款政策</slot>
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
      <slot name="firstTab">更新中</slot>
    </div>
    <div
      class="tab-pane fade border border-top-0 p-3"
      id="nav-profile"
      role="tabpanel"
      aria-labelledby="nav-delivery-tab"
    >
      <slot name="secondTab">更新中</slot>
    </div>
    <div
      class="tab-pane fade border border-top-0 p-3"
      id="nav-contact"
      role="tabpanel"
      aria-labelledby="nav-refund-tab"
    >
      <slot name="thirdTab">
        <dl>
          <dt>退款須知</dt>
          <dd>
            消費者可以依照消費者保護法的規定，享有商品貨到次日起七天猶豫期的權益。但猶豫期並非試用期，請留意，您所退回的商品必須回復原狀（須回復至商品到貨時的原始狀態）
            並且保持完整包裝（包括商品本體、配件、贈品、保證書、原廠包裝及所有附隨文件或資料的完整性），切勿缺漏任何配件或損毀原廠外盒。<br />
            若因您要求退貨或換貨、或因本公司無法接受您全部或部分之訂單、或因契約解除或失其效力，而需為您辦理退款事宜時，您同意本公司得代您處理發票或折讓單等相關法令所要
            求之單據，以利本公司為您辦理退款。<br />
            本公司收到您所提出的申請後，若經確認無誤，將依消費者保護法之相關規定，返還您已支付之對價（含信用卡交易），退款日當天會再發送E-mail通知函給您。
          </dd>
        </dl></slot
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>
