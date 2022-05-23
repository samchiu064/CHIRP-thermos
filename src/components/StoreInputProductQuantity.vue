<template>
  <button
    class="btn bi bi-dash fs-3 text-black-50"
    :disabled="this.unit === 0"
    @click="$emit('updateItem', { qty: qty - 1, id })"
  ></button>
  <label for="qty" class="w-25 align-middle">
    <input
      type="number"
      class="rounded form-control text-center w-100 text-black-50"
      id="qty"
      min="1"
      :disabled="this.unit === 0"
      :value="this.qty"
      @input="$emit('update:value', Number($event.target.value))"
    />
  </label>
  <button
    class="btn bi bi-plus fs-3 text-black-50"
    :disabled="this.unit === 0"
    @click="$emit('updateItem', { qty: qty + 1, id })"
  ></button>
</template>

<script>
export default {
  props: {
    unit: {
      type: Number,
      default: 1,
    },
    qty: {
      type: Number,
      default: 1,
    },
    id: {
      type: String,
      default: "",
    },
  },
  emits: ["updateItem", "update:value"],
};
</script>

<style lang="scss" scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
