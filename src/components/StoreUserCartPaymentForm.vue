<template>
  <div class="col-12 col-lg-8">
    <form class="border mb-3">
      <h4 class="fs-6 py-2 bg-light text-center border-bottom">訂單資訊</h4>
      <label for="inputEmail4" class="form-label col-12 px-4 mb-3"
        >Email<i class="asterisk"></i>

        <input
          type="email"
          class="form-control mt-1"
          id="inputEmail4"
          placeholder="請填入收件人Email"
          required
        />
      </label>
      <label for="receiverName" class="form-label col-12 px-4 mb-3">
        收件人名稱<i class="asterisk"></i>
        <input
          type="text"
          class="form-control mt-1"
          id="receiverName"
          placeholder="請填入收件人名稱"
          required
        />
      </label>
      <label for="receiverPhone" class="form-label col-12 px-4 mb-3">
        收件人連絡電話<i class="asterisk"></i>
        <input
          type="text"
          class="form-control mt-1"
          id="receiverPhone"
          placeholder="請填入收件人電話"
          required
        />
      </label>
      <label for="receiverAddress" class="form-label col-12 px-4 mb-3">
        收件人地址<i class="asterisk"></i>
        <input
          type="text"
          class="form-control mt-1"
          id="receiverAddress"
          placeholder="請填入收件人地址"
          required
        />
      </label>
      <label for="payment" class="form-check-label col-12 px-4 mb-3">
        付款方式<i class="asterisk"></i>
        <div class="form-check mt-2 ms-3">
          <input
            type="radio"
            class="form-check-input"
            name="paymentMethods"
            id="payment"
            required
            checked
          />貨到付款
        </div>
      </label>
      <label for="note" class="form-label col-12 mt-2 px-4 mb-3">
        備註
        <textarea
          class="form-control mt-1"
          id="note"
          placeholder="有什麼想告訴我們嗎？"
        ></textarea>
      </label>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
::placeholder {
  color: rgba(74, 85, 104, 0.4);
  font-weight: 400;
}

.asterisk:after {
  content: "*";
  color: red;
}
</style>
