<template>
  <div class="col-10 position-relative m-4">
    <div class="progress" style="height: 6px">
      <div
        class="progress-bar bg-secondary"
        role="progressbar"
        :style="`width: ${percentage}%`"
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
    <div class="bullet">
      <button
        type="button"
        class="position-absolute top-50 start-0 translate-middle btn btn-sm rounded-pill"
        :class="{
          'btn-secondary': enableStepsArray.includes(1),
          'btn-light': !enableStepsArray.includes(1),
        }"
        style="width: 2rem; height: 2rem"
        @click="this.$router.push({ name: 'cart' })"
      >
        1
      </button>
      <button
        type="button"
        class="position-absolute top-50 start-50 translate-middle btn btn-sm rounded-pill"
        :class="{
          'btn-secondary': enableStepsArray.includes(2),
          'btn-light': !enableStepsArray.includes(2),
        }"
        style="width: 2rem; height: 2rem"
        @click="this.$router.push({ name: 'order' })"
      >
        2
      </button>
      <button
        type="button"
        class="position-absolute top-50 start-100 translate-middle btn btn-sm rounded-pill"
        :class="{
          'btn-secondary': enableStepsArray.includes(3),
          'btn-light': !enableStepsArray.includes(3),
        }"
        style="width: 2rem; height: 2rem"
        :disabled="formIsValid"
        @click="this.$router.push({ name: 'checkout' })"
      >
        3
      </button>
    </div>
    <div class="word">
      <p class="position-absolute top-100 start-0 translate-middle-x mt-4">購物車</p>
      <p class="position-absolute top-100 start-50 translate-middle-x mt-4">填寫訂單明細</p>
      <p class="position-absolute top-100 start-100 translate-middle-x mt-4" style="width: 4rem">
        確認訂單
      </p>
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

<style lang="scss" scoped></style>
