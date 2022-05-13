<template>
  <!-- <div>Dashboard</div> -->
  <DashboardNavbar />
  <div class="container-fluid mt-3 position-relative">
    <router-view></router-view>
    <DashboardToastContainer />
  </div>
</template>

<script>
import DashboardNavbar from '../components/DashboardNavbar.vue';
import emitter from '../methods/emitter';
import DashboardToastContainer from '../components/DashboardToastContainer.vue';
import pushMessageState from '../methods/pushMessageState';

export default {
  components: {
    DashboardNavbar,
    DashboardToastContainer,
  },
  provide: {
    emitter,
    pushMessageState,
  },
  created() {
    // console.log(document.cookie);
    // 取得 Token
    if (document.cookie) {
      const token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('hexToken='))
        .split('=')[1];
      // Add token to Header
      this.$http.defaults.headers.common.Authorization = token;
    }

    // Send request to api/user/check for verifying login status
    const api = `${process.env.VUE_APP_API}/api/user/check`;
    this.$http.post(api, this.user).then((res) => {
      if (!res.data.success) {
        this.$router.push('/login');
      }
    });
  },
};
</script>
