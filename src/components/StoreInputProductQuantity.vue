<template>
  <button
    v-if="hasOperators"
    class="btn bi bi-dash fs-3 text-black-50"
    :disabled="cartDeletedItem === itemId"
    @click="$emit('updateItem', { qty: qty - 1, itemId })"
  ></button>
  <label for="qty" class="w-25 align-middle">
    <input
      type="number"
      class="rounded form-control text-center w-100 text-black-50"
      id="qty"
      min="1"
      :disabled="cartDeletedItem === itemId || !hasOperators"
      :value="qty"
      @focusout="$emit('update:value', Number($event.target.value))"
    />
  </label>
  <button
    v-if="hasOperators"
    class="btn bi bi-plus fs-3 text-black-50"
    :disabled="cartDeletedItem === itemId"
    @click="$emit('updateItem', { qty: qty + 1, itemId })"
  ></button>
</template>

<script>
import statusStore from '@/stores/statusStore';
// import { useCartStore } from '@/stores/cartStore';
import { mapState } from 'pinia';

export default {
  props: {
    hasOperators: {
      type: Boolean,
      default: true,
    },
    qty: {
      type: Number,
      default: 1,
    },
    itemId: {
      type: String,
      default: 'defaultId',
    },
  },
  emits: ['updateItem', 'update:value'],
  computed: {
    ...mapState(statusStore, ['cartDeletedItem']),
  },
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
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
