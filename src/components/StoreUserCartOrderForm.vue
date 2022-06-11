<template>
  <div>
    <VForm class="border mb-3" v-slot="{ meta }">
      <div @change="$emit('validateForm', meta.valid)" @blur="$emit('validateForm', meta.valid)">
        <h4 class="fs-6 py-2 bg-light text-center border-bottom">訂單資訊</h4>
        <label for="email" class="form-label col-12 px-4 mb-3"
          >Email<i class="asterisk"></i>
          <VField
            name="Email欄位"
            type="email"
            rules="email|required"
            class="form-control mt-1"
            id="email"
            placeholder="請填入寄件人Email"
            :value="emailValue"
            @input="$emit('update:emailValue', $event.target.value)"
          />
          <ErrorMessage name="Email欄位" class="text-danger fs-7 ps-2 m-0" />
        </label>
        <label for="name" class="form-label col-12 px-4 mb-3">
          收件人名稱<i class="asterisk"></i>
          <VField
            name="收件人名稱"
            type="text"
            rules="max:10|required"
            class="form-control mt-1"
            id="name"
            placeholder="請填入收件人名稱"
            :value="nameValue"
            @input="$emit('update:nameValue', $event.target.value)"
          />
          <ErrorMessage name="收件人名稱" class="text-danger fs-7 ps-2 m-0" />
        </label>
        <label for="tel" class="form-label col-12 px-4 mb-3">
          收件人電話<i class="asterisk"></i>
          <VField
            name="收件人電話"
            type="text"
            rules="numeric|min:7|max:10|required"
            class="form-control mt-1"
            id="tel"
            placeholder="請填入收件人電話"
            :value="telValue"
            @input="$emit('update:telValue', $event.target.value)"
          />
          <ErrorMessage name="收件人電話" class="text-danger fs-7 ps-2 m-0" />
        </label>
        <label for="address" class="form-label col-12 px-4 mb-3">
          收件人地址<i class="asterisk"></i>
          <VField
            name="收件人地址"
            type="text"
            rules="max:50|required"
            class="form-control mt-1"
            id="address"
            placeholder="請填入收件人地址"
            :value="addressValue"
            @input="$emit('update:addressValue', $event.target.value)"
          />
          <ErrorMessage name="收件人地址" class="text-danger fs-7 ps-2 m-0" />
        </label>
        <p class="form-check-label col-12 px-4 mb-1">付款方式<i class="asterisk"></i></p>
        <label for="COD" class="form-check ms-4 mb-3">
          <VField as="div" name="付款方式" rules="required">
            <input
              type="radio"
              id="COD"
              class="form-check-input"
              :checked="paymentMethod === '貨到付款'"
              :value="paymentMethod"
              @input="$emit('update:paymentMethod', '貨到付款')"
            />貨到付款
          </VField>
          <ErrorMessage name="付款方式" class="text-danger fs-7 ps-2 m-0" />
        </label>
        <label for="note" class="form-label col-12 mt-2 px-4 mb-3">
          備註
          <textarea
            class="form-control mt-1"
            id="note"
            placeholder="有什麼想告訴我們嗎？"
            maxlength="100"
            :value="messageValue"
            @input="$emit('update:messageValue', $event.target.value)"
          ></textarea>
        </label>
      </div>
    </VForm>
  </div>
</template>

<script>
export default {
  props: {
    emailValue: {
      type: String,
      required: true,
    },
    nameValue: {
      type: String,
      required: true,
    },
    telValue: {
      type: String,
      required: true,
    },
    addressValue: {
      type: String,
      required: true,
    },
    messageValue: {
      type: String,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
  },
  emits: [
    'update:emailValue',
    'update:nameValue',
    'update:telValue',
    'update:addressValue',
    'update:messageValue',
    'update:paymentMethod',
    'validateForm',
  ],
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

.form-control {
  background-color: transparent !important;
}
</style>
