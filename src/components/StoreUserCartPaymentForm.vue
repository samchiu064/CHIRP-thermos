<template>
  <div class="col-12 col-lg-8">
    <Form class="border mb-3" @submit="onSubmit">
      <h4 class="fs-6 py-2 bg-light text-center border-bottom">訂單資訊</h4>
      <label for="inputEmail4" class="form-label col-12 px-4 mb-3"
        >Email<i class="asterisk"></i>
        <Field
          name="email"
          type="email"
          :rules="validateEmail"
          class="form-control mt-1"
          id="inputEmail4"
          placeholder="請填入收件人Email"
          required
        />
        <ErrorMessage name="email" class="text-danger fs-7 ps-2 m-0" />
      </label>
      <label for="receiverName" class="form-label col-12 px-4 mb-3">
        收件人名稱<i class="asterisk"></i>
        <Field
          name="receiverName"
          type="text"
          class="form-control mt-1"
          id="receiverName"
          placeholder="請填入收件人名稱"
          required
        />
      </label>
      <label for="receiverPhone" class="form-label col-12 px-4 mb-3">
        收件人連絡電話<i class="asterisk"></i>
        <Field
          name="receiverPhone"
          type="text"
          class="form-control mt-1"
          id="receiverPhone"
          placeholder="請填入收件人電話"
          required
        />
      </label>
      <label for="receiverAddress" class="form-label col-12 px-4 mb-3">
        收件人地址<i class="asterisk"></i>
        <Field
          name="receiverAddress"
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
          <Field
            name="paymentMethods"
            type="radio"
            class="form-check-input"
            id="payment"
            required
            checked
          />貨到付款
        </div>
      </label>
      <label for="note" class="form-label col-12 mt-2 px-4 mb-3">
        備註
        <textarea class="form-control mt-1" id="note" placeholder="有什麼想告訴我們嗎？"></textarea>
      </label>
      <button type="submit">Submit</button>
    </Form>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  methods: {
    onSubmit(values) {
      console.log(values);
    },
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return 'This field is required';
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return 'This field must be a valid email';
      }
      // All is good
      return true;
    },
  },
};
</script>

<style lang="scss" scoped>
::placeholder {
  color: rgba(74, 85, 104, 0.4);
  font-weight: 400;
}

.asterisk:after {
  content: '*';
  color: red;
}
</style>
