<template>
  <div class="toast bg-white" role="alert" aria-live="assertive" aria-atomic="true" ref="toast">
    <div class="toast-header">
      <span class="rounded me-2 p-2" :class="`bg-${statusLight}`"></span>
      <strong class="me-auto fw-medium">{{ message.title }}</strong>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">{{ message.content }}</div>
  </div>
</template>

<script>
import Toast from 'bootstrap/js/dist/toast';

export default {
  props: {
    message: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  computed: {
    statusLight() {
      return this.message.status === 'success' ? 'success' : 'danger';
    },
  },
  mounted() {
    const toast = new Toast(this.$refs.toast, {
      delay: 6000,
    });
    toast.show();
  },
};
</script>
