<template>
  <div class="toast-container position-absolute top-0 end-0 pe-3">
    <ToastMessage v-for="(message, key) in messages" :key="key" :message="message"></ToastMessage>
  </div>
</template>

<script>
import ToastMessage from './ToastMessage.vue';

export default {
  components: {
    ToastMessage,
  },
  inject: ['emitter'],
  data() {
    return {
      messages: [],
    };
  },

  mounted() {
    this.emitter.on('push-messages', (messages) => {
      const message = { ...messages };
      this.messages.push(message);
    });
  },
};
</script>
