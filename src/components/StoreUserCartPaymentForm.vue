<template>
  <div class="col-12 col-lg-8">
    <Form class="border mb-3" @submit="onSubmit">
      <h4 class="fs-6 py-2 bg-light text-center border-bottom">訂單資訊</h4>
      <label for="inputEmail4" class="form-label col-12 px-4 mb-3"
        >Email<i class="asterisk"></i>
        <Field
          name="Email欄位"
          type="email"
          rules="email"
          class="form-control mt-1"
          id="inputEmail4"
          placeholder="請填入寄件人Email"
          v-model="form.user.email"
        />
        <ErrorMessage name="Email欄位" class="text-danger fs-7 ps-2 m-0" />
      </label>
      <label for="name" class="form-label col-12 px-4 mb-3">
        收件人名稱<i class="asterisk"></i>
        <Field
          name="收件人名稱"
          type="text"
          rules="max:10"
          class="form-control mt-1"
          id="name"
          placeholder="請填入收件人名稱"
          v-model="form.user.name"
        />
        <ErrorMessage name="收件人名稱" class="text-danger fs-7 ps-2 m-0" />
      </label>
      <label for="tel" class="form-label col-12 px-4 mb-3">
        收件人電話<i class="asterisk"></i>
        <Field
          name="收件人電話"
          type="text"
          rules="numeric|min:7|max:10"
          class="form-control mt-1"
          id="tel"
          placeholder="請填入收件人電話"
          v-model="form.user.tel"
        />
        <ErrorMessage name="收件人電話" class="text-danger fs-7 ps-2 m-0" />
      </label>
      <label for="address" class="form-label col-12 px-4 mb-3">
        收件人地址<i class="asterisk"></i>
        <Field
          name="收件人地址"
          type="text"
          rules="max:50"
          class="form-control mt-1"
          id="address"
          placeholder="請填入收件人地址"
          v-model="form.user.address"
        />
        <ErrorMessage name="收件人地址" class="text-danger fs-7 ps-2 m-0" />
      </label>
      <p class="form-check-label col-12 px-4 mb-1">付款方式<i class="asterisk"></i></p>
      <label for="COD" class="form-check ms-4 mb-3">
        <Field
          name="付款方式"
          type="radio"
          rules="required"
          class="form-check-input"
          value="貨到付款"
          id="COD"
        />貨到付款
        <ErrorMessage name="付款方式" class="text-danger fs-7 ps-2 m-0" />
      </label>
      <label for="note" class="form-label col-12 mt-2 px-4 mb-3">
        備註
        <textarea
          class="form-control mt-1"
          id="note"
          placeholder="有什麼想告訴我們嗎？"
          maxlength="100"
          v-model="form.message"
        ></textarea>
      </label>
      <button type="submit">Submit</button>
    </Form>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate';
import { email, required, numeric, min, max } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

configure({
  generateMessage: localize({
    zhTW,
  }),
});

setLocale('zhTW');

defineRule('email', email);
defineRule('required', required);
defineRule('numeric', numeric);
defineRule('min', min);
defineRule('max', max);

// setLocale('ar');
// setLocale('zh_TW');

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
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
