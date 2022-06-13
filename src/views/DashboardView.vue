<template>
  <div class="container">
    <DashboardNavbar />
    <DashboardToastContainer />
    <router-view></router-view>
  </div>
</template>

<script>
import DashboardNavbar from '@/components/DashboardNavbar.vue';
import DashboardToastContainer from '@/components/DashboardToastContainer.vue';
import emitter from '@/methods/emitter';
import pushMessageState from '@/methods/pushMessageState';

export default {
  components: {
    DashboardNavbar,
    DashboardToastContainer,
  },
  provide() {
    return {
      emitter,
      pushMessageState,
    };
  },
};
</script>
