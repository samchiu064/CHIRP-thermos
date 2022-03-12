<template>
  <div class="toast-container position-absolute top-0 end-0 pe-3">
    <ToastMessage></ToastMessage>
  </div>
</template>

<script>
import ToastMessage from './ToastMessage.vue';

export default {
  data() {
    return {};
  },
  components: {
    ToastMessage,
  },
};
</script>
