<template>
  <div class="row justify-content-center align-items-center position-relative my-6">
    <div class="col-10">
      <div class="progress mx-3" style="height: 6px">
        <div
          class="progress-bar bg-secondary"
          role="progressbar"
          :style="`width: ${percentage}%`"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
    <div
      class="col-10 d-flex justify-content-between position-absolute top-0 translate-middle-y mt-4 pt-1"
    >
      <div class="text-center">
        <button
          type="button"
          class="btn btn-sm rounded-pill"
          :class="{
            'btn-secondary': enableStepsArray.includes(1),
            'btn-light': !enableStepsArray.includes(1),
          }"
          style="width: 2rem; height: 2rem"
          @click="this.$router.push({ name: 'cart' })"
        >
          1
        </button>
        <p class="mt-2">購物車</p>
      </div>
      <div class="text-center ps-3">
        <button
          type="button"
          class="btn btn-sm rounded-pill"
          :class="{
            'btn-secondary': enableStepsArray.includes(2),
            'btn-light': !enableStepsArray.includes(2),
          }"
          style="width: 2rem; height: 2rem"
          @click="this.$router.push({ name: 'order' })"
        >
          2
        </button>
        <p class="mt-2">填寫訂單明細</p>
      </div>
      <div class="text-center">
        <button
          type="button"
          class="btn btn-sm rounded-pill"
          :class="{
            'btn-secondary': enableStepsArray.includes(3),
            'btn-light': !enableStepsArray.includes(3),
          }"
          style="width: 2rem; height: 2rem"
          :disabled="!formIsValid"
          @click="this.$router.push({ name: 'checkout' })"
        >
          3
        </button>
        <p class="mt-2">確認訂單</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    percentage: {
      type: Number,
      default: 0,
    },
    enableStepsArray: {
      type: Array,
      default() {
        return [1];
      },
    },
    formIsValid: {
      type: Boolean,
      default: () => false,
    },
  },
};
</script>
