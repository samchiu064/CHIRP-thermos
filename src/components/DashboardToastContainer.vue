<template>
  <div class="toast-container position-absolute top-0 end-0 pe-3 mt-3">
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
    this.emitter.on('push-messages', (messages) => {
      const message = { ...messages };
      this.messages.push(message);
    });
  },
};
</script>
