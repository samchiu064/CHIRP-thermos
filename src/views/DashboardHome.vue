<template>
  <!-- <div>Dashboard</div> -->
  <div class="container-fluid mt-3 position-relative">
    <router-view></router-view>
    <DashboardToastContainer />
  </div>
</template>

<script>
import { apiPostUserCheck } from '@/api/admin';
import emitter from '@/methods/emitter';
import DashboardToastContainer from '@/components/DashboardToastContainer.vue';
import pushMessageState from '@/methods/pushMessageState';

export default {
  components: {
    DashboardToastContainer,
  },
  provide: {
    emitter,
    pushMessageState,
  },
  created() {
    apiPostUserCheck()
      .then((res) => {
        if (!res.data.success) this.$router.push('/login');
        console.log(res);
      })
      .catch((err) => console.log(err));
  },
};
</script>
