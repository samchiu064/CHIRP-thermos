<template>
  <div class="toast-container position-absolute top-0 end-0 pe-3 mt-5">
    <DashboardToastContainerMessage
      v-for="(message, key) in messages"
      :key="key"
      :message="message"
    />
  </div>
</template>

<script>
import DashboardToastContainerMessage from './DashboardToastContainerMessage.vue';

export default {
  components: {
    DashboardToastContainerMessage,
  },
  inject: ['emitter'],
  data() {
    return {
      messages: [],
    };
  },
  mounted() {
    this.emitter.on('pushMessages', (messages) => {
      const message = { ...messages };
      this.messages.push(message);
      // Remove the hidden message from DOM
      setTimeout(() => {
        this.messages.shift();
      }, 6000);
    });
  },
};
</script>
